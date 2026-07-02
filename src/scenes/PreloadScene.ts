import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {

    private progressBar!: Phaser.GameObjects.Graphics;
    private progressBox!: Phaser.GameObjects.Graphics;

    private loadingText!: Phaser.GameObjects.Text;
    private percentText!: Phaser.GameObjects.Text;

    constructor() {
        super("PreloadScene");
    }

    preload(): void {

        //--------------------------------------
        // Sfondo
        //--------------------------------------

        this.cameras.main.setBackgroundColor("#071420");

        //--------------------------------------
        // Titolo
        //--------------------------------------

        this.loadingText = this.add.text(

            640,
            210,

            "ACCHIAPPA LE STELLE",

            {

                fontFamily: "Arial",

                fontSize: "42px",

                color: "#FFFFFF",

                fontStyle: "bold"

            }

        ).setOrigin(0.5);

        //--------------------------------------
        // Testo caricamento
        //--------------------------------------

        this.add.text(

            640,
            260,

            "Preparazione Galassia...",

            {

                fontFamily: "Arial",

                fontSize: "22px",

                color: "#A0D8FF"

            }

        ).setOrigin(0.5);

        //--------------------------------------
        // Box barra
        //--------------------------------------

        this.progressBox = this.add.graphics();

        this.progressBox.fillStyle(0x222222, 0.9);

        this.progressBox.fillRoundedRect(

            340,

            340,

            600,

            40,

            12

        );

        //--------------------------------------
        // Barra
        //--------------------------------------

        this.progressBar = this.add.graphics();

        //--------------------------------------
        // Percentuale
        //--------------------------------------

        this.percentText = this.add.text(

            640,

            395,

            "0 %",

            {

                fontFamily: "Arial",

                fontSize: "28px",

                color: "#FFFFFF"

            }

        ).setOrigin(0.5);

        //--------------------------------------
        // Evento caricamento
        //--------------------------------------

        this.load.on(

            Phaser.Loader.Events.PROGRESS,

            (value: number) => {

                this.progressBar.clear();

                this.progressBar.fillStyle(

                    0x42E8F5,

                    1

                );

                this.progressBar.fillRoundedRect(

                    345,

                    345,

                    590 * value,

                    30,

                    10

                );

                this.percentText.setText(

                    Math.floor(value * 100) + " %"

                );

            }

        );

        //--------------------------------------
        // Caricamento completato
        //--------------------------------------

        this.load.on(

            Phaser.Loader.Events.COMPLETE,

            () => {

                this.progressBar.destroy();

                this.progressBox.destroy();

                this.percentText.destroy();

                this.time.delayedCall(

                    600,

                    () => {

                        this.scene.start("MenuScene");

                    }

                );

            }

        );

        //--------------------------------------
        // Asset placeholder
        //--------------------------------------

        this.load.image(

            "player",

            "assets/images/player.png"

        );

        this.load.image(

            "star",

            "assets/images/star.png"

        );

        this.load.image(

            "asteroid",

            "assets/images/asteroid.png"

        );

        this.load.image(

            "background",

            "assets/images/background.png"

        );

        this.load.audio(

            "music",

            "assets/audio/menu.mp3"

        );

    }

}
