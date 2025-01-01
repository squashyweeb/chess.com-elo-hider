// ==UserScript==
// @name         Hide All Elo Ratings on Chess Sites
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide Elo ratings on chess websites.
// @author       weeb#0003
// @match        https://psyyke.github.io/A.C.A.S/*
// @match        http://localhost/*
// @match        https://www.chess.com/*
// @match        https://lichess.org/*
// @match        https://playstrategy.org/*
// @match        https://www.pychess.org/*
// @match        https://chess.org/*
// @match        https://papergames.io/*
// @match        https://vole.wtf/kilobytes-gambit/
// @match        https://chess.coolmathgames.com/*
// @match        https://www.coolmathgames.com/0-chess/*
// @match        https://immortal.game/*
// @match        https://chessarena.com/*
// @match        http://chess.net/*
// @match        https://chess.net/*
// @match        https://www.freechess.club/*
// @match        https://*chessclub.com/*
// @match        https://gameknot.com/*
// @match        https://chesstempo.com/*
// @match        https://www.redhotpawn.com/*
// @match        https://www.chessanytime.com/*
// @match        https://www.simplechess.com/*
// @match        https://chessworld.net/*
// @match        https://app.edchess.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const css = `
        .user-tagline-rating, 
        .rating, 
        .rating-number, 
        .user-rating, 
        .profile-rating,
        .elo-rating,
        .user-rating-number,
        .player-rating,
        .game-start-message-component strong + a + span,
        .game-start-message-component strong + a + a + span {
            display: none !important;
        }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();
