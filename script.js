// Animate skill bars when the skills section enters view
const skillBars = document.querySelectorAll(".skill-bar div");
const skillsSection = document.getElementById("skills");

function fillBars() {
  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    skillBars.forEach((bar) => {
      const target = bar.getAttribute("data-width");
      bar.style.width = target + "%";
    });
    window.removeEventListener("scroll", fillBars);
  }
}

window.addEventListener("scroll", fillBars);
fillBars(); // run once in case already visible

// Smooth scroll for nav links (in case some browsers ignore CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  
  // Update icon
  if (isLightMode) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});
