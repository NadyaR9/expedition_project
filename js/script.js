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