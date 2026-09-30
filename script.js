import { moveCard } from "./src/game.js";
const actionMenu = document.querySelector("action-menu");

let activeCard = null;

document.addEventListener("pointerover", event => {
    const card = event.target.closest("card");

    if (!card || card === activeCard)
        return;

    activeCard?.style.removeProperty("anchor-name");
    activeCard?.removeAttribute("data-menu-hover");

    activeCard = card;

    activeCard.style.anchorName = "--active-card";
    activeCard.setAttribute("data-menu-hover", "");

    actionMenu.showPopover();
});

document.addEventListener("pointerout", event => {
    if (!activeCard)
        return;

    const related = event.relatedTarget;

    // Ainda estamos dentro do card
    if (related?.closest?.("card") === activeCard)
        return;

    // Estamos indo para o action-menu
    if (related?.closest?.("action-menu"))
        return;

    activeCard.removeAttribute("data-menu-hover");
});

actionMenu.addEventListener("click", event => {
    const button = event.target.closest("action");

    if (!button || !activeCard)
        return;

    const instanceId = Number(activeCard.dataset.instance);

    switch (button.dataset.action) {
        case "to_backstage":
            moveCard(instanceId, {
                zone: "backstage"
            });
            break;
        case "move":{
            alert("moving card");
            break;
        }
    }
});


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