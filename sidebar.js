const toggleButton = document.getElementById('toggle-button');
const sidebarContainer = document.getElementById('sidebar-container');

toggleButton.addEventListener('click', () => {
  // toggle the "right" CSS property of the sidebar container
  if (sidebarContainer.style.right === '0') {
    sidebarContainer.style.right = '-300px';
  } else {
    sidebarContainer.style.right = '0';
  }
});

sidebarContainer.addEventListener('click', function() {
  // set the "right" CSS property of the sidebar container to "-300px"
  sidebarContainer.style.right = '-300px';
});