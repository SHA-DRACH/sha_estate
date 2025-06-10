document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebarNav = document.querySelector('.sidebar-nav');
  const closeSidebar = document.querySelector('.close-sidebar');

  menuToggle.addEventListener('click', () => {
    sidebarNav.classList.add('open');
  });

  closeSidebar.addEventListener('click', () => {
    sidebarNav.classList.remove('open');
  });

  // Close sidebar when clicking on a link
  sidebarNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebarNav.classList.remove('open');
    });
  });
});
