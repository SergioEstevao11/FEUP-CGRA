import {CGFobject} from '../../lib/CGF.js';
import { MyPyramid } from "../shapes/MyPyramid.js";

export class MySeaWeed extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init()
    }

    init() {
        this.pyramid = new MyPyramid(this.scene, 4, 8);
    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.translate(0.2, -0.5, 0.2);
        this.scene.scale(0.9, 0.9, 0.9);
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, -0.5, 0.5);
        this.scene.scale(0.75, 0.75, 0.75);
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, -0.5, -0.5);
        this.pyramid.display();
        this.scene.popMatrix();
    }
        
}