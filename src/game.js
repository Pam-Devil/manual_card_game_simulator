// ================================
// CARD DEFINITIONS
// ================================

import { session } from "./session.js";

export const cards = {
    125: {
        "id": "001-geo-hannelore",
        "name": "Hannelore",
        "element": "geo",
        "cost": 2,
        "atk": 400,
        "hp": 900,
        "art": "https://c.l3n.co/wR6LYm.png",
        "artPosition": "50% 30%",
        "effect": "(1-En) Se esta carta retorna ao campo do cemitério: Aplique um token geo a uma unidade no campo (Escolha)."
    },
    126:{
        "id": "002-electro-clarissa",
        "name": "Clarissa",
        "element": "electro",
        "cost": 4,
        "atk": 900,
        "hp": 1200,
        "art": "https://a.l3n.co/wRTMhF.png",
        "effect": "(1-En) Se o oponente declara um ataque ou ativa um efeito de unidade: Descarte esta carta da sua mão; Aplique um token electro a uma unidade no campo (Único, Escolha)."
    },
    127:{
        "id": "003-pyro-egglantine",
        "name": "Egglantine",
        "element": "pyro",
        "cost": 6,
        "atk": 1200,
        "hp": 1000,
        "art": "https://a.l3n.co/wR6Y2i.png",
        "effect": "(2-En) Se esta carta realiza uma reação de vaporizar: Aumente o ataque de uma outra unidade pyro (exceto ela mesma) no campo em 300 (Escolha). \n (1-En) Se esta carta retorna ao campo do cemitério: Aplique um token pyro a uma unidade no campo."
    }
};


// ================================
// CARD INSTANCES
// ================================

export const cardState = {
    1001: {
        card_id: 125,
        owner: 1,
    },

    1002: {
        card_id: 126,
        owner: 1,
    },

    1003: {
        card_id: 127,
        owner: 2,
    },
    1004: {
        card_id: 126,
        owner: 2,
    },

    1005: {
        card_id: 125,
        owner: 2,
    },
1006: {
        card_id: 126,
        owner: 2,
    },
    1007: {
        card_id: 127,
        owner: 2,
    },
1008: {
        card_id: 125,
        owner: 2,
    },
1009: {
        card_id: 126,
        owner: 2,
    },
};


// ================================
// GAME STATE
// ================================

export const gameState = {
    player_1_hand: [1001, 1002],

    player_1_field: [
        null,
        1003,
        null,
        1004,
        null,
    ],

    player_1_deck: [],

    player_2_hand: [1006,1007,1008],

    player_2_field: [
        null,
        null,
        null,
        1005,
        null,
    ],

    player_2_deck: [],

    backstage: [],
};

export function createCard(instanceId) {
    const instance = cardState[instanceId];

    if (!instance) {
        console.error("Instance inexistente:", instanceId);
        return document.createElement("card");
    }

    const definition = cards[instance.card_id];

    if (!definition) {
        console.error("Card definition inexistente:", instance.card_id);
        return document.createElement("card");
    }

    const card = document.createElement("card");

    card.dataset.instance = instanceId;

    const image = document.createElement("img");

    image.src = definition.art;
    image.alt = definition.name;

    card.append(image);

    return card;
}

export function serialize_card(instanceId){
    const card_id = cardState[instanceId].card_id;
    const card = cards[card_id];
    
    return {
        instanceId,
        card_id,
        card_owner: cardState[instanceId].owner,
        name: card.name,
        element: card.element,
        cost: card.cost,
        art: card.art,
        effect: card.effect
    }
}

export function renderField(player) {
    const side = document.querySelector(
        player === 1 ? "player-side" : "opponent-side"
    );

    const slots = side.querySelectorAll("card-slot");

    const field = gameState[
        `player_${player}_field`
    ];

    slots.forEach((slot, index) => {
        slot.replaceChildren();

        const instanceId = field[index];

        if (instanceId === null)
            return;

        slot.append(createCard(instanceId));
    });
}

export function setActiveDeck(deck) {
    const player = Number(deck.dataset.player);

    // Só o dono pode interagir com o deck
    if (player !== session.player)
        return;

    clearActiveDeck();

    activeDeck = deck;

    activeDeck.style.anchorName = "--active-deck";

    deckActionsMenu.showPopover();
}


export function clearActiveDeck() {
    if (!activeDeck)
        return;

    activeDeck.style.removeProperty("anchor-name");

    activeDeck = null;

    deckActionsMenu.hidePopover();
}

export function renderDeck(player) {
    const grid = document.querySelector("zone-grid");

    grid.replaceChildren();

    const deck = gameState[`player_${player}_deck`];

    for (const instanceId of deck) {
        grid.append(createCard(instanceId));
    }
}

export function renderHand(player) {
    const hand = document.querySelector("player-hand");

    const cardsInHand = gameState[
        `player_${player}_hand`
    ];

    hand.replaceChildren();

    for (const instanceId of cardsInHand) {
        hand.append(createCard(instanceId));
    }
}

export function renderBackstage() {
    const backstage = document.querySelector("backstage-zone");

    backstage.replaceChildren();

    const topCard = gameState.backstage.at(-1);

    if (topCard === undefined)
        return;

    backstage.append(createCard(topCard));
}

export function renderBackstageModal() {
    const grid = document.querySelector("zone-grid");

    grid.replaceChildren();

    for (const instanceId of gameState.backstage) {
        grid.append(createCard(instanceId));
    }
}

export function render() {
    
const board = document.querySelector("game-board");

    board.classList.toggle("player-two-view", session.player === 2);

    renderField(session.player);
    const opponent = session.player === 1 ? 2 : 1
    renderField(opponent);

    renderHand(session.player);

    renderBackstage();

    console.log(`Session player: PLAYER_${session.player}`)
}

export function moveCard(instanceId, destination) {
    removeCardFromAllZones(instanceId);

    if (destination.zone === "backstage") {
        gameState.backstage.push(instanceId);
    }

    if (destination.zone === "player_1_hand") {
        gameState.player_1_hand.push(instanceId);
    }

    if (destination.zone === "player_2_hand") {
        gameState.player_2_hand.push(instanceId);
    }

    if (destination.zone === "player_1_deck") {
        gameState.player_1_deck.push(instanceId);
    }

    if (destination.zone === "player_2_deck") {
        gameState.player_2_deck.push(instanceId);
    }

    if (destination.zone === "player_1_field") {
        gameState.player_1_field[destination.slot] = instanceId;
    }

    if (destination.zone === "player_2_field") {
        gameState.player_2_field[destination.slot] = instanceId;
    }

    render();
}

export function removeCardFromAllZones(instanceId) {
    for (const zone of Object.keys(gameState)) {
        const value = gameState[zone];

        if (!Array.isArray(value))
            continue;

        for (let i = 0; i < value.length; i++) {
            if (value[i] !== instanceId)
                continue;

            if (zone.includes("field")) {
                value[i] = null;
            } else {
                value.splice(i, 1);
            }

            return;
        }
    }
}