// Enhanced scroll reveal animation
        document.addEventListener('DOMContentLoaded', function () {
            const sections = document.querySelectorAll('.section, .hero');
            const features = document.querySelectorAll('.feature-card');

            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const featureObserverOptions = {
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';

                        // Stagger animation for features
                        if (entry.target.classList.contains('features-grid')) {
                            const cards = entry.target.querySelectorAll('.feature-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.style.opacity = 1;
                                    card.style.transform = 'translateY(0)';
                                }, index * 150);
                            });
                        }
                    }
                });
            }, observerOptions);

            const featureObserver = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateY(0) scale(1)';
                        }, 100);
                    }
                });
            }, featureObserverOptions);

            // Initialize section animations
            sections.forEach(section => {
                section.style.opacity = 0;
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });

            // Initialize feature card animations
            features.forEach(feature => {
                feature.style.opacity = 0;
                feature.style.transform = 'translateY(20px) scale(0.95)';
                feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
                featureObserver.observe(feature);
            });

            // Header scroll effect
            window.addEventListener('scroll', function () {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(15, 15, 19, 0.95)';
                    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(15, 15, 19, 0.8)';
                    header.style.boxShadow = 'none';
                }
            });

            // Cookie Banner Functionality
            const cookieBanner = document.getElementById('cookieBanner');
            const cookieAccept = document.getElementById('cookieAccept');
            const cookieCustomize = document.getElementById('cookieCustomize');

            // Check if cookies were already accepted
            if (!localStorage.getItem('cookiesAccepted')) {
                setTimeout(() => {
                    cookieBanner.style.display = 'block';
                }, 1000);
            } else {
                cookieBanner.style.display = 'none';
            }

            cookieAccept.addEventListener('click', function () {
                localStorage.setItem('cookiesAccepted', 'true');
                cookieBanner.style.animation = 'slideUp 0.5s ease-out reverse';
                setTimeout(() => {
                    cookieBanner.style.display = 'none';
                }, 500);
            });

            cookieCustomize.addEventListener('click', function () {
                // Here you can implement custom cookie settings
                alert('Personalização de cookies será implementada em breve!');
            });
        });

         const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.innerHTML = mobileMenu.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });