import {CGFobject} from '../../lib/CGF.js';
import { MyRock } from "./MyRock.js";

export class MyRockSet extends CGFobject {
    constructor(scene) {
        super(scene);
        this.rocks = [];
        this.init()
    }

    /**
     * Initializes all the rocks of the scene
     */
    init() {
        
        for(var c = 0; c < 20; c++){
            this.rocks.push(new MyRock(this.scene, 50, 8));
        }

    }

    /**
     * Displays all the individual rocks of the scene
     */
    display() {
        var angle = 0;
        var angleInc = Math.PI*2/20;
        for (var c = 0; c < 20; c++){
            if(this.rocks[c].insideNest == 1){
                this.scene.pushMatrix();
                this.scene.rotate(angle, 0, 1, 0);
                this.scene.translate(1.6, -0.3 , 0);
                this.rocks[c].show(0, 0, 0);
                this.scene.popMatrix();
            }
            else if(this.rocks[c].beingCarried == 0){
                this.rocks[c].show();
            }
            angle += angleInc;
        }
    }  
}