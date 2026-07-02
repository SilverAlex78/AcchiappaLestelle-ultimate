import Phaser from "phaser";

import { GameConfig } from "./Config";

export default class Game {

    private game: Phaser.Game;

    constructor() {

        this.game = new Phaser.Game(GameConfig);

    }

}
