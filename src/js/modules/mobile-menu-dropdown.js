function toggleMobileMenu() {
    document.querySelectorAll('.mobile-nav__dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const listItem = button.closest('.mobile-nav__list-item');
            const dropdown = listItem.querySelector('.mobile-nav__list-item-dropdown_list');
            const expanded = button.getAttribute('aria-expanded') === 'true';

            // Переключаем класс активности
            listItem.classList.toggle('mobile-nav__list-item--open', !expanded);
            button.setAttribute('aria-expanded', String(!expanded));
        });
    });

}

export default toggleMobileMenu;
