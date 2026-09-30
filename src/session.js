import { cardState, render } from "./game.js"

export const session = {
    mode: "solo",
    player: 1
}

export function switchPerspective() {
    if (session.mode !== "solo")
        return;

    session.player = session.player === 1 ? 2 : 1;
    console.log(`Session player: PLAYER_${session.player}`)

    render();
}

function isOwnCard(instanceId){
    return cardState[instanceId]?.owner === session.player;
}

function canViewDeck(player) {
    return player === session.player;
}

function canViewHand(player) {
    return player === session.player;
}

function canControlCard(instanceId) {
    return cardState[instanceId].owner === session.player;
}