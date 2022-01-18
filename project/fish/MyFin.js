import {CGFobject} from '../../lib/CGF.js';

import { MyTriangle } from "../shapes/MyTriangle.js";

export class MyFin extends CGFobject {
    
	constructor(scene) {
		super(scene);
        this.angle = 0;
        this.init();
	}

    init(){
        this.triangle = new MyTriangle(this.scene);
    }

    display(){

        this.scene.pushMatrix();
        this.scene.rotate(this.angle, 0.0, 1.0, 0.0); 
        this.triangle.display();
        this.scene.popMatrix();
          
    }

    update(t,vel){ //Updates the fish's tail movement
        this.angle = Math.sin(t * (vel* 10+1)) * Math.PI / 8;

    }

}