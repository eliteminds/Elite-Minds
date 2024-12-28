// Disable double-tap zoom Or Disable the Zoom functionality
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault(); // Prevent gestures like pinch-to-zoom
    }
  },
  { passive: false }
);

// Disable pinch-to-zoom
document.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});

// Disable zoom with Ctrl + scroll or pinch zoom in desktop browsers
document.addEventListener(
  "wheel",
  function (event) {
    if (event.ctrlKey) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// Disable ON Contextmenu

// document.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });

// Sidebar JS

const navBar = document.querySelector("naav"),
  menuBtns = document.querySelectorAll(".menu-icon"),
  overlay = document.querySelector(".overlay-sidebar");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});


 // Select all links and iframe container
 const links = document.querySelectorAll('.iframe-link');
 const iframeContainer = document.getElementById('iframeContainer');
 const iframe = document.getElementById('iframe');
 const closeButton = document.getElementById('closeButton');

 // Add event listener to each link
 links.forEach(link => {
   link.addEventListener('click', function(event) {
     event.preventDefault(); // Prevent default anchor behavior

     // Get the URL from the data attribute
     const url = this.getAttribute('data-url');

     // Set the iframe source and display the container
     iframe.src = url;
     iframeContainer.style.display = 'block';
   });
 });

 // Close button functionality
 closeButton.addEventListener('click', function() {
   iframeContainer.style.display = 'none'; // Hide the container
   iframe.src = ''; // Clear the iframe source
 });