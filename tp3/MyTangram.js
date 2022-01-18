import {CGFobject} from '../lib/CGF.js';
import { CGFscene, CGFcamera, CGFaxis, CGFappearance } from "../lib/CGF.js";

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
        this.initMaterials();
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
    }

    initMaterials(){
        // Diamond
        this.material1 = new CGFappearance(this.scene);
        this.material1.setAmbient(0, 0, 0, 1.0);
        this.material1.setDiffuse(0, 0, 0, 1.0);
        this.material1.setSpecular(0, 1, 0, 1.0);
        this.material1.setShininess(10.0);

        // Parallelogram
        this.material2 = new CGFappearance(this.scene);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(0, 0, 0, 1.0);
        this.material2.setSpecular(1, 1, 0, 1.0);
        this.material2.setShininess(10.0);

        // Triangle
        this.material3 = new CGFappearance(this.scene);
        this.material3.setAmbient(0, 0, 0, 1.0);
        this.material3.setDiffuse(0, 0, 0, 1.0);
        this.material3.setSpecular(1, 0.7961, 0.8588, 1.0);
        this.material3.setShininess(10.0);

        // TriangleSmall
        this.material4 = new CGFappearance(this.scene);
        this.material4.setAmbient(0, 0, 0, 1.0);
        this.material4.setDiffuse(0, 0, 0, 1.0);
        this.material4.setSpecular(1, 0, 0, 1.0);
        this.material4.setShininess(10.0);

        // TriangleSmall2
        this.material5 = new CGFappearance(this.scene);
        this.material5.setAmbient(0, 0, 0, 1.0);
        this.material5.setDiffuse(0, 0, 0, 1.0);
        this.material5.setSpecular(0.6, 0.2, 0.6, 1.0);
        this.material5.setShininess(10.0);

        // TriangleBig
        this.material6 = new CGFappearance(this.scene);
        this.material6.setAmbient(0, 0, 0, 1.0);
        this.material6.setDiffuse(0, 0, 0, 1.0);
        this.material6.setSpecular(1, 0.6471, 0, 1.0);
        this.material6.setShininess(10.0);

        // TriangleBig2
        this.material7 = new CGFappearance(this.scene);
        this.material7.setAmbient(0, 0, 0, 1.0);
        this.material7.setDiffuse(0, 0, 0, 1.0);
        this.material7.setSpecular(0, 0, 1, 1.0);
        this.material7.setShininess(10.0);
    }
    
    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangle.enableNormalViz();
        this.trianglesmall.enableNormalViz();
        this.trianglebig.enableNormalViz();    
      }
      
      disableNormalViz() {
        this.diamond.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangle.disableNormalViz();
        this.trianglesmall.disableNormalViz();
        this.trianglebig.disableNormalViz();
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


        this.material2.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.1, -4, 0.0);
        this.scene.rotate(-3*Math.PI/2, 0.0, 0.0, 1.0);
        this.scene.scale(1, -1, 1);
        this.parallelogram.display();
        this.scene.popMatrix();
        
        this.material3.apply();
        this.scene.pushMatrix();
        this.scene.translate(2.3, 0.4, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();
        
        this.material5.apply();  
        this.scene.pushMatrix();
        this.scene.translate(-0.4, -4.3, 0.0);
        this.scene.rotate(-2*Math.PI/3-0.275, 0.0, 0.0, 1.0);
        this.trianglesmall.display();
        this.scene.popMatrix();


        this.material4.apply();
        this.scene.pushMatrix();
        this.scene.translate(3.4, 1.5, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.trianglesmall.display();
        this.scene.popMatrix();
        

        this.material7.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.3, -0.6, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.trianglebig.display();
        this.scene.popMatrix();

        this.material6.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 1.2, 0.0);
        this.scene.rotate(-2*Math.PI/3-0.275, 0.0, 0.0, 1.0);
        this.trianglebig.display();
        this.scene.popMatrix();
        
        this.scene.customMaterial.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.scene.multMatrix(rot);
        this.diamond.display();
        this.scene.popMatrix();

        
          
    }

}