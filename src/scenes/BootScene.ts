import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {

        super("BootScene");

    }

    preload(): void {

        console.log("Boot Scene");

    }

    create(): void {

        this.add.text(

            640,

            360,

            "Acchiappa le Stelle\nUltimate Edition 3.0",

            {

                fontSize: "42px",

                color: "#ffffff",

                align: "center"

            }

        ).setOrigin(0.5);

    }

}
