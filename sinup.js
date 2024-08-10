document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.nav-menu').classList.toggle('active');
});

function showLogin() {
    hideAllSections();
    document.getElementById('login-section').classList.remove('hidden');
}

function showRegister() {
    hideAllSections();
    document.getElementById('register-section').classList.remove('hidden');
}

function hideAllSections() {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.classList.add('hidden'));
}