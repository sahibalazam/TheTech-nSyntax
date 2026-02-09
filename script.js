// FAQ accordion
document.querySelectorAll(".faq-q").forEach(q => {
  q.onclick = () => {
    const a = q.nextElementSibling;
    a.style.display = a.style.display === "block" ? "none" : "block";
  };
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change icon to X / bars
    const icon = menuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}
