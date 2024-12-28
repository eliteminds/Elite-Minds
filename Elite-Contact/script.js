function openTab(evt, tabName) {
    // Hide all tab content
    let tabContents = document.querySelectorAll('.tab-pane-contact');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove 'active' class from all tabs
    let tabs = document.querySelectorAll('.tab-contact');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the clicked tab content
    document.getElementById(tabName).classList.add('active');

    // Add 'active' class to clicked tab
    evt.currentTarget.classList.add('active');
}

// Set default active tab
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-contact').click();
});
