// JavaScript for content switching
const contentSections = document.querySelectorAll('.content-section');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    navButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Hide all sections and show the selected one with a fade-in effect
    contentSections.forEach(section => section.style.display = 'none');
    const activeSection = document.querySelector(`.section-${index}`);
    activeSection.style.display = 'block';
    activeSection.style.animation = 'fadeIn 0.5s ease-in-out';
  });
});

// Initial state: show the first section
document.querySelector('.section-0').style.display = 'block';

// Enhanced click effect for navigation buttons
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});

// 
let currentIndex = 0;

function moveCarousel(direction) {
  const cards = document.querySelectorAll('.card');
  const totalCards = cards.length;

  currentIndex = (currentIndex + direction + totalCards) % totalCards;
  const offset = -currentIndex * (200 - 20); // Adjust offset based on card width + margin
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

// Initialize the carousel to show the first card
moveCarousel(0);

function openVideoPage(videoID) {
  window.location.href = `video.html?videoID=${videoID}`;
}

// for section-2

function showTab(tabId) {
  // Remove 'active' class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  // Add 'active' class to the clicked tab button
  event.target.classList.add('active');

  // Hide all tab content panes
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
    pane.style.opacity = 0;
  });

  // Delay to show the new tab content with a smooth fade-in effect
  setTimeout(() => {
    const activePane = document.getElementById(tabId);
    activePane.classList.add('active');
    activePane.style.opacity = 1;
  }, 200);
}


// // Fullscreen
// const fullscreenButton = document.getElementById("fullscreenButton");

// fullscreenButton.addEventListener("click", () => {
//   if (!document.fullscreenElement) {
//     // Enter fullscreen mode
//     document.documentElement.requestFullscreen().catch((err) => {
//       console.error(`Error attempting to enable full-screen mode: ${err.message}`);
//     });
//   } else {
//     // Exit fullscreen mode
//     document.exitFullscreen().catch((err) => {
//       console.error(`Error attempting to exit full-screen mode: ${err.message}`);
//     });
//   }
// });

// Intro Video
const video = document.querySelector(".intro-video");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Notification

const notificationBtn = document.getElementById('notification-btn');
const notificationOverlay = document.getElementById('notification-overlay');
const closeBtn = document.getElementById('close-btn');

notificationBtn.addEventListener('click', () => {
  notificationOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  notificationOverlay.classList.remove('active');
});

// Close the overlay by clicking outside the notification box
window.addEventListener('click', (e) => {
  if (e.target === notificationOverlay) {
    notificationOverlay.classList.remove('active');
  }
});


function goBack() {
  window.history.back();
}



// JS for box switching in box-area-sections

const boxes = document.querySelectorAll('.box');
const sections = document.querySelectorAll('.box_area');
const container = document.querySelector('.boxes');
const backButtons = document.querySelectorAll('.back-button');

// When a box is clicked
boxes.forEach(box => {
  box.addEventListener('click', () => {
    const sectionId = box.getAttribute('data-section');

    // Hide container and all sections
    container.style.display = 'none';
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    document.getElementById(`box_area-${sectionId}`).classList.add('active');
  });
});

// When a back button is clicked
backButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link default action

    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));

    // Show the main container
    container.style.display = 'flex';
  });
});

// Service Worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}
