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
    "hp": 8,
    "art": "https://d.l3n.co/wE4kJ0.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Revele uma carta de unidade pyro na sua mão; compre 1 carta.\n(1-En) Ato: Revele uma carta pyro da sua mão: aplique 1 token pyro a esta carta.\n(2-En) Ato: Revele uma carta pyro e uma carta anemo da sua mão: aplique 1 token pyro e 1 token anemo a uma unidade."
  },
  {
    "id": "002-hydro-cantora-das-mares",
    "name": "Cantora das Marés",
    "element": "hydro",
    "cost": 3,
    "hp": 8,
    "art": "https://c.l3n.co/wE41Br.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Escolha uma unidade sua; mova 1 token elemental dela para outra unidade sua.\n(1-En) Ato: Revele uma carta hydro da sua mão: uma unidade sua recupera 2 de vida.\n(2-En) Ato: Revele uma carta hydro e uma carta cryo da sua mão: devolva 1 token elemental de uma unidade oponente para a reserva."
  },
  {
    "id": "003-anemo-bailarina-das-brisas",
    "name": "Bailarina das Brisas",
    "element": "anemo",
    "cost": 2,
    "hp": 6,
    "art": "https://c.l3n.co/wE4ZpT.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Revele uma carta anemo da sua mão: devolva esta carta para sua mão.\n(2-En) Ato: Revele uma carta anemo e uma carta hydro da sua mão: devolva uma unidade para a mão do seu dono.\n(1-En) Quando esta carta retorna do Backstage ao campo: Escolha uma unidade sua; ela pode realizar um ataque imediatamente."
  },
  {
    "id": "004-electro-magico-dos-relampagos",
    "name": "Mágico dos Relâmpagos",
    "element": "electro",
    "cost": 4,
    "hp": 7,
    "art": "https://a.l3n.co/wE4iSC.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: Olhe as 3 cartas do topo do seu deck; coloque uma delas na sua mão e devolva as demais ao topo em qualquer ordem.\n(1-En) Ato: Revele uma carta electro da sua mão: mova 1 token elemental entre unidades no campo.\n(2-En) Ato: Revele uma carta electro e uma carta pyro da sua mão: aplique 1 token electro a uma unidade sua e 1 token pyro a uma unidade sua."
  },
  {
    "id": "005-dark-ceifadora-do-ultimo-ato",
    "name": "Ceifadora do Último Ato",
    "element": "cryo",
    "cost": 5,
    "hp": 7,
    "art": "https://d.l3n.co/wE4RYF.png",
    "artPosition": "50% 32%",
    "effect": "(1-En) Ato: Revele uma carta dark da sua mão: mova 1 token elemental de uma unidade oponente para outra unidade oponente.\n(2-En) Ato: Revele uma carta dark e uma carta pyro da sua mão: aplique 1 token pyro a uma unidade oponente e 1 token cryo a outra unidade oponente.\n(1-En) Quando uma reação que contenha um token cryo é realizada em uma unidade oponente: você pode mover 1 token elemental dela para uma unidade sua."
  },
  {
    "id": "006-geo-guardiao-do-palco",
    "name": "Guardião do Palco",
    "element": "geo",
    "cost": 4,
    "hp": 10,
    "art": "https://a.l3n.co/wE4I1z.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Ato: Revele uma carta geo da sua mão: até o fim do turno, a próxima vez que outra unidade sua sofreria dano de uma reação, reduza esse dano em 1.\n(2-En) Ato: Revele uma carta geo e uma carta pyro da sua mão: esta carta recupera 2 de vida e não pode ser alvo de efeitos de unidades oponentes até o fim do turno.\n(1-En) Quando esta carta retorna do campo para a mão: aplique 1 token geo a uma unidade sua."
  },
  {
    "id": "007-electro-marionetista",
    "name": "Marionetista",
    "element": "electro",
    "cost": 4,
    "hp": 7,
    "art": "https://d.l3n.co/wE4WCv.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: escolha uma unidade oponente; ela não pode realizar ataques neste turno.\n(1-En) Ato: Revele uma carta electro da sua mão: mova 1 token elemental de uma unidade para outra unidade no campo.\n(2-En) Ato: Revele uma carta electro e uma carta dark da sua mão: escolha uma unidade oponente; ela não pode ativar efeitos até o fim do turno."
  },
  {
    "id": "008-pyro-atirador-do-picadeiro",
    "name": "Atirador do Picadeiro",
    "element": "pyro",
    "cost": 3,
    "hp": 5,
    "art": "https://a.l3n.co/wE4A22.png",
    "artPosition": "50% 32%",
    "effect": "(1-En) Ato: Revele uma carta pyro da sua mão: aplique 1 token pyro a uma unidade oponente.\n(2-En) Ato: Revele uma carta pyro e uma carta electro da sua mão: aplique 1 token pyro e 1 token electro a uma unidade oponente.\n(1-En) Quando esta carta destruir uma unidade em combate: compre 1 carta."
  },
  {
    "id": "009-anemo-acrobata",
    "name": "Acrobata",
    "element": "anemo",
    "cost": 3,
    "hp": 6,
    "art": "https://c.l3n.co/wE3hqo.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Ato: Revele uma carta anemo da sua mão: esta carta não pode ser destruída por uma reação neste turno.\n(2-En) Ato: Revele uma carta anemo e uma carta hydro da sua mão: devolva esta carta para sua mão; depois, você pode colocar uma unidade do seu Backstage no campo pagando 1-En a menos.\n(1-En) Quando esta carta entra em cena pelo efeito de outra unidade: compre 1 carta."
  },
  {
    "id": "010-dark-comediante-tragico",
    "name": "Comediante Trágico",
    "element": "dark",
    "cost": 3,
    "hp": 7,
    "art": "https://d.l3n.co/wE4jw5.png",
    "artPosition": "50% 30%",
    "effect": "(1-En) Quando esta carta entra em cena: escolha uma unidade no campo; mova 1 token elemental dela para outra unidade no campo.\n(1-En) Ato: Revele uma carta dark da sua mão: troque a posição de duas unidades no campo.\n(2-En) Ato: Revele uma carta dark e uma carta anemo da sua mão: devolva esta carta para o Backstage; uma unidade oponente não pode realizar ataques até o fim do turno."
  },
  {
    "id": "011-hydro-estrela-mascarada",
    "name": "Estrela Mascarada",
    "element": "hydro",
    "cost": 6,
    "hp": 10,
    "art": "https://d.l3n.co/wE3a0i.png",
    "artPosition": "50% 28%",
    "effect": "(2-En) Entrada em Cena: Você pode devolver uma unidade sua para sua mão; se fizer isso, compre 1 carta e aplique 1 token hydro a esta carta.\n(1-En) Ato: Revele uma carta hydro da sua mão: aplique 1 token hydro a uma unidade sua.\n(3-En) Ato: Revele uma carta hydro, uma carta pyro e uma carta anemo da sua mão: devolva uma unidade oponente para a mão do dono."
  },
  {
    "id": "012-geo-regente-do-ultimo-ato",
    "name": "Regente do Último Ato",
    "element": "geo",
    "cost": 7,
    "hp": 10,
    "art": "https://c.l3n.co/wE35fm.png",
    "artPosition": "50% 30%",
    "effect": "(2-En) Entrada em Cena: Você pode devolver uma unidade sua para sua mão; se fizer isso, escolha uma unidade no Backstage e coloque-a no campo pagando 2-En a menos.\n(1-En) Ato: Revele uma carta geo da sua mão: uma unidade sua recupera 2 de vida.\n(3-En) Ato: Revele uma carta geo, uma carta electro e uma carta dark da sua mão: até o fim do turno, as outras unidades suas podem ativar seus efeitos de Ato sem pagar o primeiro custo de Energia."
  },
  {
    "id": "013-hydro-assistente-de-palco",
    "name": "Assistente de Palco",
    "element": "hydro",
    "cost": 1,
    "hp": 4,
    "art": "https://c.l3n.co/wE4q0a.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Olhe as 2 cartas do topo do seu deck; coloque 1 delas na sua mão e envie a outra para o Backstage."
  },
  {
    "id": "014-geo-operadora-de-palco",
    "name": "Operadora de Palco",
    "element": "geo",
    "cost": 1,
    "hp": 5,
    "art": "https://a.l3n.co/wE4QRA.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Escolha duas unidades suas; mova 1 token elemental de uma delas para a outra."
  },
  {
    "id": "015-anemo-coelha-do-picadeiro",
    "name": "Coelha do Picadeiro",
    "element": "anemo",
    "cost": 1,
    "hp": 4,
    "art": "https://b.l3n.co/wE4mok.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Retorne esta carta para sua mão; depois, escolha outra unidade sua. Ela pode realizar um ataque imediatamente."
  },
  {
    "id": "016-pyro-ponto-do-palco",
    "name": "Ponto do Palco",
    "element": "pyro",
    "cost": 1,
    "hp": 4,
    "art": "https://d.l3n.co/wE4BBe.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Quando esta carta entra em cena: Escolha uma unidade sua; ela pode realizar um ataque imediatamente.\n(1-En) Ato: Retorne esta carta para sua mão; depois, uma unidade sua pode realizar um ataque imediatamente."
  },
  {
    "id": "017-cryo-figurinista",
    "name": "Figurinista",
    "element": "cryo",
    "cost": 1,
    "hp": 6,
    "art": "https://b.l3n.co/wE49FQ.png",
    "artPosition": "50% 35%",
    "effect": "(1-En) Ato: Escolha uma unidade sua; ela recupera 2 de vida.\n(1-En) Quando esta carta é enviada para o Backstage: Escolha uma unidade sua; ela recupera 1 de vida."
  },
  {
    "id": "018-electro-tecnica-de-palco",
    "name": "Técnica de Palco",
    "element": "electro",
    "cost": 1,
    "hp": 5,
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

    player_1_preview:[null],
    player_2_preview:[null]
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

function fitText(element, {
    max,
    min,
    precision = 0.05,
    mode = "height"
}) {
    let low = min;
    let high = max;
    let best = min;

    function fits(size) {
        element.style.fontSize = `${size}mm`;

        if (mode === "width") {
            return element.scrollWidth <= element.clientWidth;
        }

        return element.scrollHeight <= element.clientHeight;
    }

    // Nem o tamanho mínimo cabe.
    if (!fits(min)) {
        return false;
    }

    while (high - low > precision) {
        const mid = (low + high) / 2;

        if (fits(mid)) {
            best = mid;
            low = mid;
        } else {
            high = mid;
        }
    }

    element.style.fontSize = `${best}mm`;
    return true;
}
export function fitCardText(card) {
    const name = card.querySelector("card-name");
    const effect = card.querySelector("effect-text");

    if (name) {
        fitText(name, {
            max: 4,
            min: 2,
            mode: "width"
        });
    }

    if (effect) {
        fitText(effect, {
            max: 2.8,
            min: 1.5,
            mode: "height"
        });
    }
}

function fitCardName(card) {
    const name = card.querySelector("card-name");
    const text = name?.querySelector("span");

    if (!name || !text) return;

    const maxSize = 4;
    const minSize = 2;

    let low = minSize;
    let high = maxSize;

    // Começa no tamanho normal
    text.style.fontSize = `${maxSize}mm`;

    // Largura realmente disponível para o texto.
    // clientWidth já considera a caixa interna,
    // então descontamos o padding explicitamente.
    const style = getComputedStyle(name);

    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingRight = parseFloat(style.paddingRight);

    // 0.5mm extra de segurança para não encostar na borda.
    const safetyMargin = 0.5;

    const availableWidth =
        name.clientWidth -
        paddingLeft -
        paddingRight -
        (safetyMargin * name.clientWidth / 28);

    // Procura o maior tamanho que cabe.
    while (high - low > 0.01) {
        const mid = (low + high) / 2;

        text.style.fontSize = `${mid}mm`;

        if (text.scrollWidth <= availableWidth) {
            low = mid;
        } else {
            high = mid;
        }
    }

    text.style.fontSize = `${low}mm`;
}

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
    cardData.dataset.name = definition.name;

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

const nameElement = cardData.querySelector("card-name");
const effectElement = cardData.querySelector("effect-text");

if (nameElement) {
    const span = nameElement.querySelector("span");

    if (span) {
        span.textContent = definition.name;

        fitText(nameElement, {
            max: 4,
            min: 2,
            mode: "width"
        });
    }
}

if (effectElement) {
    effectElement.textContent = definition.effect;

    fitText(effectElement, {
        max: 2.8,
        min: 1.5,
        mode: "height"
    });
}


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
        const card = createCard(instanceId);
        slot.append(card);
        fitCardText(card);
        fitCardName(card);
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
        const card = createCard(instanceId);
        grid.append(card);
        fitCardText(card);
        fitCardName(card);
    }
}

export function renderHand(player) {
    const hand = document.querySelector("player-hand");

    const cardsInHand = gameState[
        `player_${player}_hand`
    ];

    hand.replaceChildren();

    for (const instanceId of cardsInHand) {
        const card = createCard(instanceId);
        hand.append(card);
        fitCardText(card);
        fitCardName(card);
    }
}

export function renderPreview(player) {
    const preview = document.querySelector("card-render");
    const previewText = document.querySelector("effect-read");

    const instanceId = gameState[`player_${player}_preview`];

    preview.replaceChildren();
    previewText.textContent = "";

    if (instanceId == null) {
        return;
    }

    const instance = cardState[instanceId];

    if (!instance) {
        throw new Error(
            `renderPreview: instância ${instanceId} não existe em cardState`
        );
    }

    const definition = cards[instance.card_id];

    if (!definition) {
        throw new Error(
            `renderPreview: card_id ${instance.card_id} não existe em cards`
        );
    }

    const card = createCard(instanceId);

    preview.append(card);
    previewText.textContent = definition.effect;
}

export function setPreview(instanceId, player) {
    if (!cardState[instanceId]) {
        throw new Error(
            `setPreview: instância ${instanceId} não existe`
        );
    }

    gameState[`player_${player}_preview`] = instanceId;

    renderPreview(player);
}


export function renderBackstage() {
    const backstage = document.querySelector("backstage-zone");

    backstage.replaceChildren();

    const topCard = gameState.backstage.at(-1);

    if (topCard === undefined)
        return;

    const card = createCard(instanceId);
        backstage.append(card);
        fitCardText(card);
        fitCardName(card);
}

export function renderBackstageModal() {
    const grid = document.querySelector("zone-grid");

    grid.replaceChildren();

    for (const instanceId of gameState.backstage) {
        const card = createCard(instanceId);
        grid.append(card);
        fitCardText(card);
        fitCardName(card);
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