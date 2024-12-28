const urlParams = new URLSearchParams(window.location.search);
const videoID = urlParams.get('videoID');
const videoPlayer = document.getElementById('video-player');
const noteTextarea = document.getElementById('note');
const notepad = document.getElementById('notepad');
const toggleButton = document.getElementById('toggle-notepad');
const saveNoteButton = document.getElementById('save-note');

let isFullScreen = false;

// Embed YouTube Video
if (videoID) {
  videoPlayer.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&controls=1" 
                title="YouTube video player" allowfullscreen></iframe>`;
} else {
  videoPlayer.innerHTML = `<p>Video not found.</p>`;
}

// Load Note
const loadNote = () => {
  const savedNote = localStorage.getItem(`note_${videoID}`);
  noteTextarea.value = savedNote || '';
};

// Save Note to Local Storage
noteTextarea.addEventListener('input', () => {
  localStorage.setItem(`note_${videoID}`, noteTextarea.value);
});

// Toggle Notepad Size
toggleButton.addEventListener('click', () => {
  if (!isFullScreen) {
    notepad.classList.add('fullscreen');
    toggleButton.innerHTML = '<i class="fa fa-chevron-down"></i>';
  } else {
    notepad.classList.remove('fullscreen');
    toggleButton.innerHTML = '<i class="fa fa-chevron-up"></i>';
  }
  isFullScreen = !isFullScreen;
});

// Save Note as File
saveNoteButton.addEventListener('click', () => {
  const note = noteTextarea.value;
  const fileName = `note_${videoID || 'untitled'}.txt`;
  const blob = new Blob([note], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
});

// Load Note on Page Load
loadNote();


// Fullscreen
const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    // Enter fullscreen mode
    document.documentElement.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    // Exit fullscreen mode
    document.exitFullscreen().catch((err) => {
      console.error(`Error attempting to exit full-screen mode: ${err.message}`);
    });
  }
});

document.getElementById("back-btn-video").addEventListener("click", function() {
  window.history.back();
});
