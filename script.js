// JavaScript to handle music player functionality

const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const songTitle = document.getElementById("song-title");

// List of songs
const songs = [
  { title: "Song 1", src: "path/to/song1.mp3" },
  { title: "Song 2", src: "path/to/song2.mp3" },
  { title: "Song 3", src: "path/to/song3.mp3" },
];

// Current song index
let currentSongIndex = 0;

// Load the first song
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
}

// Play or pause the audio
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "⏸️ Pause";
  } else {
    audio.pause();
    playPauseButton.textContent = "▶️ Play";
  }
}

// Play the previous song
function playPrevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseButton.textContent = "⏸️ Pause";
}

// Play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseButton.textContent = "⏸️ Pause";
}

// Event listeners
playPauseButton.addEventListener("click", togglePlayPause);
prevButton.addEventListener("click", playPrevSong);
nextButton.addEventListener("click", playNextSong);

// Load the first song initially
loadSong(currentSongIndex);
