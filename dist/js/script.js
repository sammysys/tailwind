const MobileBtn = document.querySelector("#mobile-btn") 
const MobileMenu = document.querySelector("#mobile-menu")

MobileBtn.addEventListener('click', () => {
    MobileMenu.classList.toggle('hidden');
});