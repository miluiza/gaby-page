document.addEventListener('DOMContentLoaded', function() {
  const linksNav = document.querySelectorAll('a[href^="#"]');
  
  linksNav.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajusta de acordo com a altura da Navbar
          behavior: 'smooth'
        });
      }
    });
  });
});
