// ──────────────────────────────────────────────
// MUSIC.JS — Audio player with mute/persist
// ──────────────────────────────────────────────

// ── TRACK LIST ──
// Add your MP3 filenames here once you have them.
// Files should be placed in the /audio/ directory.
const TRACKS = [
  { title: "Chronicles of the Forge", file: "audio/Chronicles_of_the_Forge_2026-03-09T150601.mp3" },
  { title: "Chronicles of the Forge (Alt)", file: "audio/Chronicles_of_the_Forge_2026-03-09T150601 (1).mp3" },
];

const audio    = document.getElementById('audio-player');
const bar      = document.getElementById('music-bar');
const trackEl  = document.getElementById('music-track-name');
const timeEl   = document.getElementById('music-time');
const playBtn  = document.getElementById('music-play');
const prevBtn  = document.getElementById('music-prev');
const nextBtn  = document.getElementById('music-next');
const muteBtn  = document.getElementById('music-mute');

let currentTrack = 0;
let isPlaying    = false;

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  if (TRACKS.length === 0) {
    bar.classList.add('no-audio');
    return;
  }

  // Restore mute state
  const savedMute = localStorage.getItem('sovereign-muted') === 'true';
  audio.muted = savedMute;
  updateMuteBtn(savedMute);

  // Restore track index
  const savedTrack = parseInt(localStorage.getItem('sovereign-track') || '0');
  currentTrack = isNaN(savedTrack) ? 0 : savedTrack % TRACKS.length;

  loadTrack(currentTrack);

  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', playPrev);
  nextBtn.addEventListener('click', playNext);
  muteBtn.addEventListener('click', toggleMute);

  audio.addEventListener('ended', playNext);
  audio.addEventListener('timeupdate', updateTime);
  audio.addEventListener('error', () => {
    trackEl.textContent = TRACKS[currentTrack].title + ' (unavailable)';
  });
});

function loadTrack(idx) {
  currentTrack = idx;
  localStorage.setItem('sovereign-track', idx);
  const track = TRACKS[idx];
  audio.src = track.file;
  trackEl.textContent = track.title;
  timeEl.textContent = '0:00';

  if (isPlaying) {
    audio.play().catch(() => {});
  }
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '&#9654;';
  } else {
    audio.play().then(() => {
      isPlaying = true;
      playBtn.innerHTML = '&#9646;&#9646;';
    }).catch(() => {});
  }
}

function playNext() {
  loadTrack((currentTrack + 1) % TRACKS.length);
  if (isPlaying) {
    audio.play().catch(() => {});
    playBtn.innerHTML = '&#9646;&#9646;';
  }
}

function playPrev() {
  // If > 3 seconds in, restart current; otherwise go to previous
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    loadTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length);
    if (isPlaying) {
      audio.play().catch(() => {});
    }
  }
}

function toggleMute() {
  const muted = !audio.muted;
  audio.muted = muted;
  localStorage.setItem('sovereign-muted', muted);
  updateMuteBtn(muted);
}

function updateMuteBtn(muted) {
  muteBtn.innerHTML = muted ? '&#128263;' : '&#128266;';
  muteBtn.classList.toggle('muted', muted);
  muteBtn.title = muted ? 'Unmute' : 'Mute';
}

function updateTime() {
  const cur  = formatTime(audio.currentTime);
  const dur  = isNaN(audio.duration) ? '--:--' : formatTime(audio.duration);
  timeEl.textContent = `${cur} / ${dur}`;
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
