import { cardState, gameState, moveCard, render, renderBackstageModal, renderDeck, serialize_card} from "./src/game.js";
import { session, switchPerspective } from "./src/session.js";

const actionMenu = document.querySelector("action-menu");
const toolBar = document.querySelector("toolbar");
const deckActionsMenu = document.querySelector("deck-actions-menu");
let activeCard = null;
let activeCardElement = null;
let activeDeck = null;

const zoneModal = document.querySelector("zone-modal");

const backstageZone = document.querySelector("backstage-zone");

backstageZone.addEventListener("click", () => {
    renderBackstageModal();

    zoneModal.querySelector("zone-header span").textContent = "BACKSTAGE";

    zoneModal.showPopover();
});

function setActiveDeck(deck) {
    if (activeDeck === deck)
        return;

    clearActiveDeck();

    const player = Number(deck.dataset.player);

    // Só o dono do deck pode interagir com ele
    if (player !== session.player)
        return;

    activeDeck = deck;

    activeDeck.style.anchorName = "--active-deck";

    deckActionsMenu.showPopover();
}

export function shuffleDeck(player) {
    const deck = gameState[`player_${player}_deck`];

    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    render();
}

export function shuffle_hand(player){
    const hand = gameState[`player_${player}_hand`];

    for (let i = hand.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [hand[i], hand[j]] = [hand[j], hand[i]];
    }

    render();
}

let activeTargetMode = null;
let activeAttackMode = null;

function clearTargetMode() {
    if (activeTargetMode) {
        document.removeEventListener("click", activeTargetMode);
        activeTargetMode = null;
    }

    document.querySelectorAll(".targetable")
        .forEach(card => {
            card.classList.remove("targetable");
        });
}

function clearAttackMode() {
    if (activeAttackMode) {
        document.removeEventListener("click", activeAttackMode);
        activeAttackMode = null;
    }

    document.querySelectorAll(".attack-able")
        .forEach(card => {
            card.classList.remove("attack-able");
        });
}

function clearCombatModes() {
    clearTargetMode();
    clearAttackMode();
}


function clearActiveDeck() {
    if (!activeDeck)
        return;

    activeDeck.style.removeProperty("anchor-name");

    activeDeck = null;

    deckActionsMenu.hidePopover();
}
function closeZoneModal() {
    if (zoneModal.matches(":popover-open")) {
        zoneModal.hidePopover();
    }

    const grid = zoneModal.querySelector("zone-grid");

    if (grid) {
        grid.replaceChildren();
    }
}

zoneModal.addEventListener("click", event => {
    const button = event.target.closest('[data-action="close-deck"]');

    if (!button)
        return;

    zoneModal.hidePopover();
    shuffleDeck(session.player);
    closeZoneModal();
});


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

document.addEventListener("pointerover", event => {
    const deck = event.target.closest("deck");

    if (!deck)
        return;

    setActiveDeck(deck);
});

document.addEventListener("pointerout", event => {
    if (!activeDeck)
        return;

    const related = event.relatedTarget;

    // Continua dentro do deck
    if (related?.closest?.("deck") === activeDeck)
        return;

    // Está indo para o menu
    if (related?.closest?.("deck-actions-menu"))
        return;

    clearActiveDeck();
});

deckActionsMenu.addEventListener("pointerout", event => {
    const related = event.relatedTarget;

    // Voltando para o deck
    if (related?.closest?.("deck") === activeDeck)
        return;

    // Continua dentro do menu
    if (related?.closest?.("deck-actions-menu"))
        return;

    clearActiveDeck();
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
        case "shuffle_hand":{
            shuffle_hand(session.player);
            break;
        }
    }
});

const deckActions = {

    mill: function (data) {
        const deck = gameState[`player_${data.player}_deck`];

        if (!deck.length)
            return;

        const instanceId = deck.at(-1);

        moveCard(instanceId, {
            zone: "backstage"
        });
    },


    show_deck: function (data) {
        renderDeck(data.player);

        clearActiveDeck();

        zoneModal.showPopover();
    },


    draw: function (data) {
        const deck = gameState[`player_${data.player}_deck`];

        if (!deck.length)
            return;

        const instanceId = deck.at(-1);

        moveCard(instanceId, {
            zone: `player_${data.player}_hand`
        });
    },
    shuffle: function(data){
        shuffleDeck(session.player)
    }

};

deckActionsMenu.addEventListener("click", event => {
    const action = event.target.closest("action");

    if (!action || !activeDeck)
        return;

    const player = Number(activeDeck.dataset.player);

    // Segurança da própria UI
    if (player !== session.player)
        return;

    deckActions[action.dataset.action]?.({
        player
    });
});

function playCardAnimation(card, className, duration = 350) {
    card.classList.remove(className);

    void card.offsetWidth;

    card.classList.add(className);

    setTimeout(() => {
        card.classList.remove(className);
    }, duration);
}

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
        cardState[data.instanceId].flip = !(cardState[data.instanceId].flip);
        render();
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
    clearCombatModes();

    const cards = document.querySelectorAll("card-slot card");

    cards.forEach(card => {
        card.classList.add("targetable");
    });

    function handle_target_click(event) {
        const card = event.target.closest("card-slot card");

        if (!card)
            return;

        const card_instance = card.dataset.instance;

        const target = document.querySelector(
            `[data-instance="${card_instance}"]`
        );

        if (!target)
            return;

        playCardAnimation(target, "targeted");

        clearTargetMode();
    }

    activeTargetMode = handle_target_click;

    document.addEventListener(
        "click",
        handle_target_click
    );
},
attack: function (data) {
    clearCombatModes();

    const cards = document.querySelectorAll("card-slot card");

    cards.forEach(card => {
        card.classList.add("attack-able");
    });

    function handle_attack_click(event) {
        const card = event.target.closest("card-slot card");

        if (!card)
            return;

        const card_instance = card.dataset.instance;

        const target = document.querySelector(
            `[data-instance="${card_instance}"]`
        );

        if (!target)
            return;

        playCardAnimation(target, "attacked");

        clearAttackMode();
    }

    activeAttackMode = handle_attack_click;

    document.addEventListener(
        "click",
        handle_attack_click
    );
},
    to_top_deck: function (data) {
        const deck = `player_${session.player}_deck`
        moveCard(data.instanceId, { zone: deck });
    },
    show_deck: function (data) {
        renderDeck(session.player);

        actionMenu.hidePopover();

        const deckModal = document.querySelector("zone-modal");

        deckModal.showPopover();
    }

}


actionMenu.addEventListener("click", event => {
    const button = event.target.closest("action");

    if (!button || !activeCard)
        return;
console.log("ACTIVE CARD:", activeCard);
    console.log("ACTIVE INSTANCE:", activeCard.dataset.instance);
    console.log("INSTANCE NUMBER:", Number(activeCard.dataset.instance));
    console.log("ACTION:", button.dataset.action);

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