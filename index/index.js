// Cookie Consent Functionality
document.addEventListener('DOMContentLoaded', () => {
    const consentBanner = document.getElementById('cookieConsent');
    
    if (localStorage.getItem('cookieAccepted') !== 'true') {
        consentBanner.style.display = 'flex';
    } else {
        consentBanner.style.display = 'none';
    }
});

function acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    const consentBanner = document.getElementById('cookieConsent');
    consentBanner.classList.add('hidden');
    setTimeout(() => {
        consentBanner.style.display = 'none';
    }, 500);
}