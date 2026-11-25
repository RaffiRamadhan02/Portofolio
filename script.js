/**
 * Script Interaktivitas Portofolio Raffi Ramadhan
 * Sesuai PRD Tahap 1 & Desain Editorial MNTN: Vanilla JavaScript tanpa framework
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Ikon Lucide
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Elemen Menu Seluler
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const trackerItems = document.querySelectorAll('.scroll-tracker-item');

  if (mobileMenuBtn && mobileMenu) {
    function updateMenuIcon(isOpen) {
      const currentIcon = mobileMenuBtn.querySelector('i, svg');
      if (currentIcon) {
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        newIcon.className = 'w-6 h-6';
        currentIcon.replaceWith(newIcon);

        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      }
    }

    function openMenu() {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.setAttribute('aria-label', 'Tutup menu navigasi');
      updateMenuIcon(true);
    }

    function closeMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', 'Buka menu navigasi');
      updateMenuIcon(false);
    }

    function toggleMenu() {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        mobileMenuBtn.focus();
      }
    });

    document.addEventListener('click', (e) => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // 3. Scrollspy untuk Navbar & Tracker Rail Kanan (Gaya Editorial MNTN)
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Highlight Navbar Links
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-emerald-400', 'bg-slate-900/80');
            link.classList.remove('text-slate-300');
          } else {
            link.classList.remove('text-emerald-400', 'bg-slate-900/80');
            link.classList.add('text-slate-300');
          }
        });

        // Highlight Right Tracker Rail (MNTN style)
        trackerItems.forEach((item) => {
          const target = item.getAttribute('data-target');
          const line = item.querySelector('span:last-child');
          if (target === sectionId) {
            item.classList.add('text-emerald-400');
            item.classList.remove('text-slate-500');
            if (line) {
              line.classList.add('w-10', 'bg-emerald-400');
              line.classList.remove('w-5', 'bg-slate-700');
            }
          } else {
            item.classList.remove('text-emerald-400');
            item.classList.add('text-slate-500');
            if (line) {
              line.classList.remove('w-10', 'bg-emerald-400');
              line.classList.add('w-5', 'bg-slate-700');
            }
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavigation, { passive: true });
  highlightNavigation();
});
