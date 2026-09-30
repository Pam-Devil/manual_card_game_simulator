import { gameState, moveCard, render, serialize_card } from "./src/game.js";
import { session, switchPerspective } from "./src/session.js";

const actionMenu = document.querySelector("action-menu");
const toolBar = document.querySelector("toolbar");

let activeCard = null;

function setActiveCard(card) {
    if (activeCard === card)
        return;

    clearActiveCard();

    activeCard = card;

    activeCard.style.anchorName = "--active-card";
    activeCard.setAttribute("data-menu-hover", "");

    actionMenu.showPopover();
}

function clearActiveCard() {
    if (!activeCard)
        return;

    activeCard.style.removeProperty("anchor-name");
    activeCard.removeAttribute("data-menu-hover");

    activeCard = null;

    actionMenu.hidePopover();

    console.log(actionMenu.matches(":popover-open"));
}

document.addEventListener("pointerover", event => {
    const card = event.target.closest("card");

    if (!card)
        return;

    setActiveCard(card);
});

document.addEventListener("pointerout", event => {
    if (!activeCard)
        return;

    const related = event.relatedTarget;

    // Continua dentro do card
    if (related?.closest?.("card") === activeCard)
        return;

    // Está indo para o menu
    if (related?.closest?.("action-menu"))
        return;

    clearActiveCard();
});

actionMenu.addEventListener("pointerout", event => {
    const related = event.relatedTarget;

    // Voltando para o card
    if (related?.closest?.("card") === activeCard)
        return;

    // Continua dentro do menu
    if (related?.closest?.("action-menu"))
        return;

    clearActiveCard();
});

toolBar.addEventListener("click", event => {
    const button = event.target.closest("button");

    switch (button.dataset.action) {
        case "switch_players": {
            switchPerspective();
            break;
        }
    }
});

const actions = {
    to_backstage: function (data) {
        moveCard(data.instanceId, {
            zone: "backstage"
        });
    },
    move: function (data) {
        const card = serialize_card(data.instanceId);
        console.dir(card);

        const zones = document.querySelectorAll("card-slot");
        zones.forEach(zone => {
            zone.classList.add("move_mode");
        })

        function handle_move_click(event) {
            const slot = event.target.closest("card-slot");
            const field = event.target.closest("game-field");

            if (!slot || !field)
                return;

            const player = Number(field.dataset.player);

            switch (player) {
                case 1: {
                    moveCard(data.instanceId, { zone: "player_1_field", slot: slot.dataset.slot });
                    break;
                }
                case 2: {
                    moveCard(data.instanceId, { zone: "player_2_field", slot: slot.dataset.slot });
                    break;
                }
            }
            disable_move_mode();
            zones.forEach(zone => {
                zone.classList.remove("move_mode");
            })
        }

        function enable_move_mode() {
            document.addEventListener("click", handle_move_click);
        }
        function disable_move_mode() {
            document.removeEventListener("click", handle_move_click);
        }

        enable_move_mode();
    },
    to_hand: function (data) {
        const hand = `player_${session.player}_hand`
        moveCard(data.instanceId, { zone: hand });
    },
    flip: function (data) {
        const card = document.querySelector(
            `[data-instance="${data.instanceId}"]`
        );

        if (!card) return;
        card.classList.toggle("flip");
    },
    declare: function (data) {
        const card = document.querySelector(
            `[data-instance="${data.instanceId}"]`
        );

        if (!card) return;

        card.classList.remove("declare");

        void card.offsetWidth;

        card.classList.add("declare");

        card.addEventListener("animationend", () => {
            card.classList.remove("declare");
        }, { once: true });
    },
    target: function (data) {
        const cards = document.querySelectorAll("card-slot card")
        cards.forEach(card => {
            card.classList.add("targetable")
        });

        function handle_target_click(event) {
            const card = event.target.closest("card");
            if(!card) return;

            const card_instance = card.dataset.instance;

            const target = document.querySelector(
            `[data-instance="${card_instance}"]`
        );

        if (!card) return;

        card.classList.remove("targeted");

        void card.offsetWidth;

        card.classList.add("targeted");

        card.addEventListener("animationend", () => {
            card.classList.remove("declare");
        }, { once: true });

            if (!card)
                return;

            disable_target_mode();
            cards.forEach(card => {
                card.classList.remove("targetable");
            })
        }

        function enable_target_mode() {
            document.addEventListener("click", handle_target_click);
        }
        function disable_target_mode() {
            document.removeEventListener("click", handle_target_click);
        }

        enable_target_mode();
    },
    attack: function (data) {
        const cards = document.querySelectorAll("card-slot card")
        cards.forEach(card => {
            card.classList.add("attack-able")
        });

        function handle_attack_click(event) {
            const card = event.target.closest("card");
            if(!card) return;

            const card_instance = card.dataset.instance;

            const target = document.querySelector(
            `[data-instance="${card_instance}"]`
        );

        if (!card) return;

        card.classList.remove("attacked");

        void card.offsetWidth;

        card.classList.add("attacked");

        card.addEventListener("animationend", () => {
            card.classList.remove("attacked");
        }, { once: true });

            if (!card)
                return;

            disable_attack_mode();
            cards.forEach(card => {
                card.classList.remove("attack-able");
            })
        }

        function enable_attack_mode() {
            document.addEventListener("click", handle_attack_click);
        }
        function disable_attack_mode() {
            document.removeEventListener("click", handle_attack_click);
        }

        enable_attack_mode();
    }
}


actionMenu.addEventListener("click", event => {
    const button = event.target.closest("action");

    if (!button || !activeCard)
        return;

    const instanceId = Number(activeCard.dataset.instance);

    actions[button.dataset.action]?.({ instanceId })
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


function init_game() {
    render();
}

init_game();