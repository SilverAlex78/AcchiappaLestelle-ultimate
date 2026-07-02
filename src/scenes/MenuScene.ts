import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {

    private title!: Phaser.GameObjects.Text;

    private playButton!: Phaser.GameObjects.Text;

    private version!: Phaser.GameObjects.Text;

    constructor() {

        super("MenuScene");

    }

    create(): void {

        //------------------------------------

        // Sfondo

        //------------------------------------

        this.cameras.main.setBackgroundColor("#071420");

        //------------------------------------

        // Stelle

        //------------------------------------

        for(let i=0;i<120;i++){

            const star=this.add.circle(

                Phaser.Math.Between(0,1280),

                Phaser.Math.Between(0,720),

                Phaser.Math.Between(1,3),

                0xffffff

            );

            this.tweens.add({

                targets:star,

                alpha:0.2,

                duration:800,

                yoyo:true,

                repeat:-1,

                delay:Phaser.Math.Between(0,2000)

            });

        }

        //------------------------------------

        // Titolo

        //------------------------------------

        this.title=this.add.text(

            640,

            140,

            "ACCHIAPPA\nLE STELLE",

            {

                fontSize:"64px",

                fontFamily:"Arial",

                color:"#FFFFFF",

                align:"center",

                fontStyle:"bold"

            }

        ).setOrigin(.5);

        //------------------------------------

        // Animazione titolo

        //------------------------------------

        this.tweens.add({

            targets:this.title,

            y:155,

            duration:1800,

            yoyo:true,

            repeat:-1,

            ease:"Sine.easeInOut"

        });

        //------------------------------------

        // Pulsante GIOCA

        //------------------------------------

        this.playButton=this.add.text(

            640,

            420,

            "▶ GIOCA",

            {

                fontSize:"42px",

                fontFamily:"Arial",

                color:"#FFD93D",

                backgroundColor:"#204060",

                padding:{

                    left:25,

                    right:25,

                    top:12,

                    bottom:12

                }

            }

        )

        .setOrigin(.5)

        .setInteractive({useHandCursor:true});

        //------------------------------------

        // Hover

        //------------------------------------

        this.playButton.on("pointerover",()=>{

            this.playButton.setScale(1.1);

        });

        this.playButton.on("pointerout",()=>{

            this.playButton.setScale(1);

        });

        //------------------------------------

        // Click

        //------------------------------------

        this.playButton.on("pointerdown",()=>{

            this.cameras.main.fadeOut(

                500,

                0,

                0,

                0

            );

            this.time.delayedCall(

                550,

                ()=>{

                    this.scene.start("GameScene");

                }

            );

        });

        //------------------------------------

        // Versione

        //------------------------------------

        this.version=this.add.text(

            10,

            690,

            "Ultimate Edition 3.0 - Alpha",

            {

                fontSize:"18px",

                color:"#88AACC"

            }

        );

    }

}
