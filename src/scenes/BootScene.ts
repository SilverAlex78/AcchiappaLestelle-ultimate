import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload(): void {

        console.log("====================================");
        console.log(" ACCHIAPPA LE STELLE ULTIMATE 3.0 ");
        console.log(" Boot Scene");
        console.log("====================================");

    }

    create(): void {

        // Colore iniziale della telecamera
        this.cameras.main.setBackgroundColor("#071420");

        // Breve dissolvenza
        this.cameras.main.fadeIn(500, 0, 0, 0);

        // Passa immediatamente al preload
        this.scene.start("PreloadScene");

    }

}
