import {CGFobject} from '../../lib/CGF.js';
import { MyTriangle } from "../shapes/MyTriangle.js";

export class MySideFin extends CGFobject {
    
	constructor(scene) {
		super(scene);
        this.angle = 0;
        this.init();
	}


    init(){
        this.triangle = new MyTriangle(this.scene);
    }


    display(){ //Correctly places the fin on the fish body

        this.scene.pushMatrix();
        this.scene.rotate(this.angle - Math.PI/ 4, 0.0, 0.0, 1.0);
        this.scene.translate(0.65, 0, 0);

        this.scene.rotate(  Math.PI / 4, 0.0, 1.0, 0.0); 
        this.scene.rotate(- Math.PI / 2, 0.0, 0.0, 1.0); 

        this.scene.scale(0.5,0.5,0.5);
        this.triangle.display();
        this.scene.popMatrix();
          
    }


    update(t){ //Updates the angle of a side fin allowing the movement of it

        this.angle = Math.sin(t) * Math.PI / 8;

    }

}