const tabs = document.querySelectorAll(".sidebar-tab");
const panels = document.querySelectorAll(".sidebar-panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.panel;

        tabs.forEach(tab => {
            tab.classList.remove("active");
        });

        panels.forEach(panel => {
            panel.classList.remove("active");
        });

        tab.classList.add("active");

        document
            .getElementById(`${target}-panel`)
            .classList.add("active");

    });

});