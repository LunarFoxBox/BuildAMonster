class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        // Position of Arms
        {
        this.leftArmX = 225;
        this.leftArmY = 400;
        this.rightArmX = 375;
        this.rightArmY = 400;
        }

        // Position of Legs
        {
        this.leftLegX = 225;
        this.leftLegY = 475;
        this.rightLegX = 375;
        this.rightLegY = 475;
        }

        // Position of Head features
        {
        this.smileX = 300;
        this.smileY = 350;
        this.fangsX = 300;
        this.fangsY = 350;
        this.eyeX = 300;
        this.eyeY = 300;
        }
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        let shiftAmount = 10;

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // Create body
        {
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        }

        // Create smile
        {
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.smile.visible = true;
        }

        // Create eye
        {
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");
        }

        // Create fangs
        {
        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        }

        // Create legs
        {
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redC.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueC.png");
        }
        
        // Create arms
        {
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueE.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_redE.png");
        }

        
        
        // Get input from keyboard and affect the monster based on input
        this.input.keyboard.on("keydown", function(event) {
            // Changes fang and smile visibility
            let changeVisible = (smile, fangs) => {
                my.sprite.smile.visible = smile;
                my.sprite.fangs.visible = fangs;
            };

            let shift = 0; // The amount to shift the monster right and left
            // Determine effect based on what key was pressed
            switch(event.code){
                case("KeyS"):
                    changeVisible(true, false);
                    break;
                case("KeyF"):
                    changeVisible(false, true);
                    break;
                case("KeyA"):
                    shift = -shiftAmount;
                    break;
                case("KeyD"):
                    shift = shiftAmount;
                    break;
            }
            
            // Shifts all the monster parts by the value of <shift>
            for (let part in my.sprite){
                my.sprite[part].x += shift;
            }
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        

       
    }

}