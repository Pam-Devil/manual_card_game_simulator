// ================================
// CARD DEFINITIONS
// ================================

import { session } from "./session.js";

const card_database = [
  {
    "id": "001-pyro-duelista-das-chamas",
    "name": "Duelista das Chamas",
    "element": "pyro",
    "cost": 3,
    "atk": 800,
    "hp": 900,
    "art": "https://d.l3n.co/wE4kJ0.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Revele uma carta de unidade pyro na sua mão; compre 1 carta. \n (1-En) Ato: Revele uma carta pyro da sua mão: esta carta recebe +300 ATK até o fim do turno. \n (2-En) Ato: Revele uma carta pyro e uma carta anemo da sua mão: destrua uma unidade com 500 ATK ou menos."
  },
  {
    "id": "002-hydro-cantora-das-mares",
    "name": "Cantora das Marés",
    "element": "hydro",
    "cost": 3,
    "atk": 500,
    "hp": 1100,
    "art": "https://c.l3n.co/wE41Br.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Escolha uma unidade sua; mova 1 token elemental dela para outra unidade sua. \n (1-En) Ato: Revele uma carta hydro da sua mão: uma unidade sua recebe +200 HP até o fim do turno. \n (2-En) Ato: Revele uma carta hydro e uma carta cryo da sua mão: devolva 1 token elemental de uma unidade oponente para a reserva."
  },
  {
    "id": "003-anemo-bailarina-das-brisas",
    "name": "Bailarina das Brisas",
    "element": "anemo",
    "cost": 2,
    "atk": 600,
    "hp": 700,
    "art": "https://c.l3n.co/wE4ZpT.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Revele uma carta anemo da sua mão: devolva esta carta para sua mão. \n (2-En) Ato: Revele uma carta anemo e uma carta hydro da sua mão: devolva uma unidade com 700 ATK ou menos para a mão do seu dono. \n (1-En) Quando esta carta retorna do Backstage ao campo: Escolha uma unidade sua; ela pode atacar imediatamente."
  },
  {
    "id": "004-electro-magico-dos-relampagos",
    "name": "Mágico dos Relâmpagos",
    "element": "electro",
    "cost": 4,
    "atk": 900,
    "hp": 900,
    "art": "https://a.l3n.co/wE4iSC.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: Olhe as 3 cartas do topo do seu deck; coloque uma delas na sua mão e devolva as demais ao topo em qualquer ordem. \n (1-En) Ato: Revele uma carta electro da sua mão: mova 1 token elemental entre unidades no campo. \n (2-En) Ato: Revele uma carta electro e uma carta pyro da sua mão: aplique 1 token electro a uma unidade sua e 1 token pyro a uma unidade sua."
  },
  {
    "id": "005-dark-ceifadora-do-ultimo-ato",
    "name": "Ceifadora do Último Ato",
    "element": "cryo",
    "cost": 5,
    "atk": 1100,
    "hp": 900,
    "art": "https://d.l3n.co/wE4RYF.png",
    "artPosition": "50% 32%",
    "effect": "(1-En) Ato: Revele uma carta dark da sua mão: uma unidade oponente perde 300 ATK até o fim do turno. \n (2-En) Ato: Revele uma carta dark e uma carta pyro da sua mão: destrua uma unidade oponente com 600 ATK ou menos. \n (1-En) Quando uma unidade oponente é destruída por este efeito: mova 1 token elemental dela para uma unidade sua."
  },
  {
    "id": "006-geo-guardiao-do-palco",
    "name": "Guardião do Palco",
    "element": "geo",
    "cost": 4,
    "atk": 700,
    "hp": 1500,
    "art": "https://a.l3n.co/wE4I1z.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Ato: Revele uma carta geo da sua mão: até o fim do turno, a primeira vez que outra unidade sua seria destruída, ela permanece com 100 HP. \n (2-En) Ato: Revele uma carta geo e uma carta pyro da sua mão: esta carta recebe +500 ATK e não pode ser alvo de efeitos de unidades oponentes até o fim do turno. \n (1-En) Quando esta carta retorna do campo para a mão: aplique 1 token geo a uma unidade sua."
  },
  {
    "id": "007-electro-marionetista",
    "name": "Marionetista",
    "element": "electro",
    "cost": 4,
    "atk": 700,
    "hp": 800,
    "art": "https://d.l3n.co/wE4WCv.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: escolha uma unidade oponente; ela não pode atacar neste turno. \n (1-En) Ato: Revele uma carta electro da sua mão: mova 1 token elemental de uma unidade para outra unidade no campo. \n (2-En) Ato: Revele uma carta electro e uma carta dark da sua mão: escolha uma unidade oponente; ela não pode ativar efeitos até o fim do turno."
  },
  {
    "id": "008-pyro-atirador-do-picadeiro",
    "name": "Atirador do Picadeiro",
    "element": "pyro",
    "cost": 3,
    "atk": 900,
    "hp": 600,
    "art": "https://a.l3n.co/wE4A22.png",
    "artPosition": "50% 32%",
    "effect": "(1-En) Ato: Revele uma carta pyro da sua mão: cause 300 de dano a uma unidade oponente. \n (2-En) Ato: Revele uma carta pyro e uma carta electro da sua mão: cause 600 de dano a uma unidade oponente. \n (1-En) Se esta carta destruir uma unidade em combate: compre 1 carta."
  },
  {
    "id": "009-anemo-acrobata",
    "name": "Acrobata",
    "element": "anemo",
    "cost": 3,
    "atk": 700,
    "hp": 700,
    "art": "https://c.l3n.co/wE3hqo.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Ato: Revele uma carta anemo da sua mão: esta carta não pode ser destruída em combate neste turno. \n (2-En) Ato: Revele uma carta anemo e uma carta hydro da sua mão: devolva esta carta para sua mão; depois, você pode colocar uma unidade do seu Backstage no campo pagando 1-En a menos. \n (1-En) Quando esta carta entra em cena pelo efeito de outra unidade: compre 1 carta."
  },
  {
    "id": "010-dark-comediante-tragico",
    "name": "Comediante Trágico",
    "element": "dark",
    "cost": 3,
    "atk": 600,
    "hp": 800,
    "art": "https://d.l3n.co/wE4jw5.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: escolha uma unidade no campo; ela perde 400 ATK até o fim do turno. \n (1-En) Ato: Revele uma carta dark da sua mão: troque a posição de duas unidades no campo. \n (2-En) Ato: Revele uma carta dark e uma carta anemo da sua mão: devolva esta carta para o Backstage; uma unidade oponente perde 500 ATK até o fim do turno."
  },
  {
    "id": "011-hydro-estrela-mascarada",
    "name": "Estrela Mascarada",
    "element": "hydro",
    "cost": 6,
    "atk": 1400,
    "hp": 1300,
    "art": "https://d.l3n.co/wE3a0i.png",
    "artPosition": "50% 28%",
    "effect": "(2-En) Entrada em Cena: Você pode devolver uma unidade sua para sua mão; se fizer isso, compre 1 carta e aplique 1 token hydro a esta carta. \n (1-En) Ato: Revele uma carta hydro da sua mão: esta carta recebe +400 ATK até o fim do turno. \n (3-En) Ato: Revele uma carta hydro, uma carta pyro e uma carta anemo da sua mão: devolva uma unidade oponente para a mão do dono."
  },
  {
    "id": "012-geo-regente-do-ultimo-ato",
    "name": "Regente do Último Ato",
    "element": "geo",
    "cost": 7,
    "atk": 1500,
    "hp": 1600,
    "art": "https://c.l3n.co/wE35fm.png",
    "artPosition": "50% 30%",
    "effect": "(2-En) Entrada em Cena: Você pode devolver uma unidade sua para sua mão; se fizer isso, escolha uma unidade no Backstage e coloque-a no campo pagando 2-En a menos. \n (1-En) Ato: Revele uma carta geo da sua mão: uma unidade sua recebe +300 ATK até o fim do turno. \n (3-En) Ato: Revele uma carta geo, uma carta electro e uma carta dark da sua mão: até o fim do turno, as outras unidades suas podem ativar seus efeitos de Ato sem pagar o primeiro custo de Energia."
  },
  {
    "id": "013-hydro-assistente-de-palco",
    "name": "Assistente de Palco",
    "element": "hydro",
    "cost": 1,
    "atk": 300,
    "hp": 500,
    "art": "https://c.l3n.co/wE4q0a.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Olhe as 2 cartas do topo do seu deck; coloque 1 delas na sua mão e envie a outra para o Backstage."
  },
  {
    "id": "014-geo-operadora-de-palco",
    "name": "Operadora de Palco",
    "element": "geo",
    "cost": 1,
    "atk": 400,
    "hp": 600,
    "art": "https://a.l3n.co/wE4QRA.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Escolha duas unidades suas; mova 1 token elemental de uma delas para a outra."
  },
  {
    "id": "015-anemo-coelha-do-picadeiro",
    "name": "Coelha do Picadeiro",
    "element": "anemo",
    "cost": 1,
    "atk": 300,
    "hp": 400,
    "art": "https://b.l3n.co/wE4mok.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Retorne esta carta para sua mão; depois, escolha outra unidade sua. Ela recebe +200 ATK até o fim do turno."
  },
  {
    "id": "016-pyro-ponto-do-palco",
    "name": "Ponto do Palco",
    "element": "pyro",
    "cost": 1,
    "atk": 400,
    "hp": 400,
    "art": "https://d.l3n.co/wE4BBe.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Escolha uma unidade sua. Ela recebe +200 ATK até o fim do turno. \n (1-En) Ato: Retorne esta carta para sua mão; depois, uma unidade sua pode atacar imediatamente."
  },
  {
    "id": "017-cryo-figurinista",
    "name": "Figurinista",
    "element": "cryo",
    "cost": 1,
    "atk": 200,
    "hp": 700,
    "art": "https://b.l3n.co/wE49FQ.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Escolha uma unidade sua. Ela recebe +300 HP até o fim do turno. \n (1-En) Quando esta carta é enviada para o Backstage: Escolha uma unidade sua. Ela recebe +200 HP até o fim do turno."
  },
  {
    "id": "018-electro-tecnica-de-palco",
    "name": "Técnica de Palco",
    "element": "electro",
    "cost": 1,
    "atk": 400,
    "hp": 500,
    "art": "https://d.l3n.co/wE4Cxq.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Envie uma unidade sua para o Backstage; depois, você pode mover 1 token elemental dela para outra unidade sua."
  }
]

function populate_cards(){
    card_database.forEach(element => {
        cards[cards.count + 1] = {...element, card_id: cards.count + 1};
        cards.count += 1;
    });

    console.log(cards);
}

export const cards = {
    count: 124,
};

populate_cards();
// ================================
// CARD INSTANCES
// ================================

function populate_deck(){
    function create_instance(card){
        return {
            card_id: card,
            flip: false,
            tokens_list: [],
            owner: 1
        }
    }
    
    Object.keys(cards).forEach(card => {
       if(card == "count") return;
       console.dir(`key: ${card}; obj: ${cards}; access: ${cards[card]}`)
       cardState[cardState.count + 1 ] = create_instance(cards[card].card_id) 
       cardState[cardState.count + 2 ] = create_instance(cards[card].card_id) 
       cardState[cardState.count + 3 ] = create_instance(cards[card].card_id) 

       cardState.count += 3;
    });

    for(let i = 1010; i < cardState.count; i++){
        gameState.player_1_deck.push(i)
    }
}

export const cardState = {
    count: 1009,
    1001: {
        card_id: 125,
        flip: false,
        tokens_list:[],
        owner: 1,
    },

    1002: {
        card_id: 126,        
        flip: false,
        tokens_list:[],
        owner: 1,
    },

    1003: {
        card_id: 127,
        flip: false,
        tokens_list:[],
        owner: 2,
    },
    1004: {
        card_id: 126,
        flip: false,
        tokens_list:[],
        owner: 2,
    },

    1005: {
        card_id: 125,
        flip: false,
        tokens_list:[],
        owner: 2,
    },
1006: {
        card_id: 126,
        flip: false,
        tokens_list:[],
        owner: 2,
    },
    1007: {
        card_id: 127,
        flip: false,
        tokens_list:[],
        owner: 2,
    },
1008: {
        card_id: 125,
        flip: false,
        tokens_list:[],
        owner: 2,
    },
1009: {
        card_id: 126,
        flip: false,
        tokens_list:[],
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

populate_deck();
/* 
export function old_createCard(instanceId) {
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
    instance.flip ? card.classList.add("flip") : card.classList.remove("flip");

    card.dataset.instance = instanceId;

    const image = document.createElement("img");

    image.src = definition.art;
    image.alt = definition.name;

    card.append(image);

    return card;
} */

export function createCard(instanceId) {
    const instance = cardState[instanceId];

    if (!instance) {
        throw new Error(
            `createCard: instância ${instanceId} não existe em cardState`
        );
    }

    const definition = cards[instance.card_id];

    if (!definition) {
        throw new Error(
            `createCard: card_id ${instance.card_id} não existe em cards`
        );
    }

    const template = document.querySelector("#card-template");

    if (!template) {
        throw new Error(
            "createCard: #card-template não foi encontrado no DOM"
        );
    }

    const card = template.content
        .querySelector("card")
        ?.cloneNode(true);

    if (!card) {
        throw new Error(
            "createCard: <card> não foi encontrado dentro de #card-template"
        );
    }

    const cardData = card.querySelector("card-data");

    if (!cardData) {
        throw new Error(
            "createCard: <card-data> não foi encontrado dentro de <card>"
        );
    }

    /*
     * Dados da carta
     */

    cardData.dataset.cost = definition.cost;
    cardData.dataset.element = definition.element;
    cardData.dataset.atk = definition.atk;
    cardData.dataset.hp = definition.hp;
    cardData.dataset.effect = definition.effect;

    /*
     * Arte
     */

    cardData.style.setProperty(
        "--card-art",
        `url("${definition.art}")`
    );

    /*
     * Posição da arte
     */

    if (definition.artPosition) {
        const bleed = cardData.querySelector(".card-bleed");

        if (bleed) {
            bleed.style.backgroundPosition = definition.artPosition;
        }
    }

    /*
     * Estado da instância
     */

    card.dataset.instance = instanceId;

    card.classList.toggle("flip", instance.flip);

    return card;
}

export function serialize_card(instanceId){
    if (!Number.isInteger(instanceId)) {
        throw new Error(
            `serialize_card: instanceId inválido: ${instanceId}`
        );
    }

    const instance = cardState[instanceId];

    if (!instance) {
        throw new Error(
            `serialize_card: instância ${instanceId} não existe`
        );
    }
    
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
    console.log("MOVE CARD:", {
        instanceId,
        type: typeof instanceId,
        destination
    });

    if (!Number.isInteger(instanceId)) {
        throw new Error(
            `moveCard: instanceId inválido: ${instanceId}`
        );
    }

    if (!cardState[instanceId]) {
        throw new Error(
            `moveCard: instância ${instanceId} não existe em cardState`
        );
    }

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