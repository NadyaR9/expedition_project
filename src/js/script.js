'use strict';
let showTab = function () {
    const tabs = document.querySelectorAll('.booking__tab'),
        contentTabs = document.querySelectorAll('.booking__content-tab');
    let tabData;
    tabs.forEach(item => {
        item.addEventListener('click', selectTab);
    });

    function selectTab(event) {
        tabs.forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
        tabData = event.target.getAttribute('data-tab-name');
        console.log(tabData);
        selectTabContent(tabData);
    }

    function selectTabContent(name) {
        contentTabs.forEach(item => {
            item.classList.contains(name) ? item.classList.add('active') :
                item.classList.remove('active');
        });
    }
};

showTab();

let showMenu = function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu__list');

    hamburger.addEventListener('click', () => {
        // menu.classList.contains('menu__list_active') ? menu.classList.remove('menu__list_active') :
        //     menu.classList.add('menu__list_active');
        menu.classList.toggle('menu__list_active');
        hamburger.classList.toggle('hamburger_active');
    });
};

showMenu();

let changeInput = function () {
    const btnChange = document.querySelector('.booking__change'),
        toInput = document.querySelector('.to'),
        fromInput = document.querySelector('.from');

    btnChange.addEventListener('click', (e) => {
        e.preventDefault();
        toInput.classList.toggle('to');
        toInput.classList.contains('to') ? toInput.placeholder = 'from' : toInput.placeholder = 'to';
        toInput.classList.toggle('from');
        fromInput.classList.toggle('from');
        fromInput.classList.contains('from') ? fromInput.placeholder = 'to' : fromInput.placeholder = 'from';
        fromInput.classList.toggle('to');

    });
};

changeInput();