
// Menu burger responsive
const logo = document.querySelector('.logo');
const navUl = document.querySelector('nav ul');

// Créer le bouton burger
const burger = document.createElement('button');
burger.innerHTML = '☰';
burger.style.cssText = 'display:none; background:none; border:none; color:white; font-size:1.8rem; cursor:pointer;';
burger.id = 'burger';
document.querySelector('nav').appendChild(burger);

// Afficher burger sur mobile
function checkScreen() {
  if (window.innerWidth <= 768) {
    burger.style.display = 'block';
    navUl.style.display = 'none';
  } else {
    burger.style.display = 'none';
    navUl.style.display = 'flex';
  }
}

burger.addEventListener('click', () => {
  if (navUl.style.display === 'none') {
    navUl.style.display = 'flex';
    navUl.style.flexDirection = 'column';
    navUl.style.alignItems = 'center';
  } else {
    navUl.style.display = 'none';
  }
});

window.addEventListener('resize', checkScreen);
checkScreen();

// Carrousel d'images (section hero)
const hero = document.querySelector('.hero');
if (hero) {
  const backgrounds = [
    'linear-gradient(135deg, #1a237e, #42a5f5)',
    'linear-gradient(135deg, #004d40, #26a69a)',
    'linear-gradient(135deg, #4a148c, #ab47bc)'
  ];
  let index = 0;
  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    hero.style.background = backgrounds[index];
    hero.style.transition = 'background 1s ease';
  }, 3000);
}

// Effets de scroll animés
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .apropos, .contact').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
EOF