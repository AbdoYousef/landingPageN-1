const searchNav = document.querySelector('.mobile-search-nav');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', (e) => {
    searchNav.style.display = searchNav.style.display === 'flex' ? 'none' : 'flex';
});
