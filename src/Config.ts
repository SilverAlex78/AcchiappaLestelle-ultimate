import Phaser from "phaser";

import BootScene from "./scenes/BootScene";

import MenuScene from "./scenes/MenuScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {

    type: Phaser.AUTO,

    parent: "game",

    width: 1280,

    height: 720,

    backgroundColor: "#071420",

    pixelArt: false,

    physics: {

        default: "arcade",

        arcade: {

            debug: false

        }

    },

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },

    scene:[
    BootScene,
    PreloadScene,
    MenuScene
]
};
