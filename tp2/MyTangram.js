import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";
import { MyTriangleSmall } from "./MyTriangleSmall.js";
import { MyTriangleBig } from "./MyTriangleBig.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
    
	constructor(scene) {
		super(scene);
		this.init();
	}

    init(){
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
    }
	
    display(){
        var rot = [
        0.9659,
        0.2588,
        0.0,
        0.0,

        -0.2588,
        0.9659,
        0.0,
        0.0,

        0.0,
        0.0,
        1.0,
        0.0,

        0.0,
        0.0,
        0.0,
        1.0,
        ];

        var trans = [
        1.0,
        0.0,
        0.0,
        0.0,

        0.0,
        1.0,
        0.0,
        0.0,

        0.0,
        0.0,
        1.0,
        0.0,

        -2.0,
        1.9,
        0.0,
        1.0,
        ];

        this.scene.pushMatrix();
        this.scene.translate(-0.1, -4, 0.0);
        this.scene.rotate(-3*Math.PI/2, 0.0, 0.0, 1.0);
        this.scene.scale(1, -1, 1);
        this.parallelogram.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.translate(2.3, 0.4, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();
        
        
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -4.3, 0.0);
        this.scene.rotate(-2*Math.PI/3-0.275, 0.0, 0.0, 1.0);
        this.trianglesmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(3.4, 1.5, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
       // this.scene.setRedAppearance();
        this.trianglesmall.display();
       // this.scene.setDefaultAppearance();
        this.scene.popMatrix();
        

        
        this.scene.pushMatrix();
        this.scene.translate(1.3, -0.6, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.trianglebig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.5, 1.2, 0.0);
        this.scene.rotate(-2*Math.PI/3-0.275, 0.0, 0.0, 1.0);
        this.trianglebig.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.scene.multMatrix(rot);
       // this.scene.setGreenAppearance();
        this.diamond.display();
        this.scene.popMatrix();

        
          
    }

}