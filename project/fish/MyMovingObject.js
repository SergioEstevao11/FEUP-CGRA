import {CGFobject} from '../../lib/CGF.js';

import { MyPyramid } from "../shapes/MyPyramid.js";
/**
 * MyMovingObject
 * @constructor
 * @param scene - Reference to MyScene object
 * @param posX
 * @param posY  
 * @param posZ  
 * @param vel
 * @param ori
 */
export class MyMovingObject extends CGFobject {

    constructor(scene) {
        super(scene);
        this.posX = 0;
        this.posY = 0;
        this.posZ = 0;
        this.vel = 0;
        this.ori = 0;
        this.direction = '';
        this.velInc = 1;
        this.init();
    }

    init(){
        this.pyramid = new MyPyramid(this.scene,3,1);
    }

    turn(val){ //Turns the moving object
        if(val > 0)
            this.direction = 'R';
        else this.direction = 'L';
        this.ori += val;
    }

    accelerate(val){ //Increments or decrements its velocity
        this.vel += val;
        if(this.vel <= 0)
            this.vel = 0;
    }

    reset(){ //Resets the moving object
        this.posX = 0;
        this.posY = 0;
        this.posZ = 0;
        this.vel = 0;
        this.ori = 0;
    }

    display(scaleFactor, velInc){ //Displays the moving object
        this.velInc = velInc;
        this.scene.pushMatrix();
        this.scene.translate(this.posX, this.posY, this.posZ);  
        this.scene.rotate(this.ori, 0.0, 1.0, 0.0);
        this.scene.rotate(Math.PI/2, 1, 0.0, 0.0);
        this.scene.scale(scaleFactor,scaleFactor,scaleFactor);
        this.pyramid.display(); 
        this.scene.popMatrix();
    }

    update(){  //Updates moving object's position

        this.posX = this.posX + Math.sin(this.ori) * this.vel * this.velInc;
        this.posZ = this.posZ + Math.cos(this.ori) * this.vel * this.velInc;
    }
}