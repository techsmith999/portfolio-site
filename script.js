
 
 
 
 
 const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });


  // Back to Top Button logic
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 200) {
    btn.style.display = "block";
    btn.classList.add("pulse");
  } else {
    btn.style.display = "none";
    btn.classList.remove("pulse");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTop");
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
