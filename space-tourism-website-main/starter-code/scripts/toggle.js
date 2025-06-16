
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    const visible = navLinks.getAttribute('data-visible') === 'true';
    navLinks.setAttribute('data-visible', !visible);
    navToggle.setAttribute('aria-expanded', !visible);
  });

  // Optional: Close menu when a link is clicked (for better UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    });
  });
