const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.menu');

// Fungsi klik untuk memunculkan menu
menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
    
    const icon = menuToggle.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Menutup menu otomatis saat link diklik
const navLinks = document.querySelectorAll('.klik');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        document.querySelector('#mobile-menu i').classList.replace('fa-xmark', 'fa-bars');
    });
});