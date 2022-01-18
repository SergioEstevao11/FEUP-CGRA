import {CGFobject} from '../lib/CGF.js';
import {CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";

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
    
	constructor(scene, coords) {
		super(scene);
		this.init();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}

    init(){
        
        this.initMaterials();
        this.diamond = new MyDiamond(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
        this.trianglesmall1 = new MyTriangleSmall(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglebig1 = new MyTriangleBig(this.scene);
    }

    initMaterials(){
        
        // Diamond
        this.material1 = new CGFappearance(this.scene);
        this.material1.setAmbient(0.1, 0.1, 0.1, 1);
        this.material1.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material1.setSpecular(0.1, 0.1, 0.1, 1);
        this.material1.setShininess(10.0);
        this.material1.loadTexture('images/tangram.png');
        this.material1.setTextureWrap('REPEAT', 'REPEAT');

        // Parallelogram
        this.material2 = new CGFappearance(this.scene);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material2.setSpecular(0, 0, 0, 1.0);
        this.material2.setShininess(10.0);
        this.material2.loadTexture('images/tangram.png');
        this.material2.setTextureWrap('REPEAT', 'REPEAT');

        // Triangle
        this.material3 = new CGFappearance(this.scene);
        this.material3.setAmbient(0, 0, 0, 1.0);
        this.material3.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material3.setSpecular(0, 0, 0, 1.0);
        this.material3.setShininess(10.0);
        this.material3.loadTexture('images/tangram.png');
        this.material3.setTextureWrap('REPEAT', 'REPEAT');

        // TriangleSmall
        this.material4 = new CGFappearance(this.scene);
        this.material4.setAmbient(0, 0, 0, 1.0);
        this.material4.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material4.setSpecular(1, 0, 0, 1.0);
        this.material4.setShininess(10.0);
        this.material4.loadTexture('images/tangram.png');
        this.material4.setTextureWrap('REPEAT', 'REPEAT');

        // TriangleSmall2
        this.material5 = new CGFappearance(this.scene);
        this.material5.setAmbient(0, 0, 0, 1.0);
        this.material5.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material5.setSpecular(0.6, 0.2, 0.6, 1.0);
        this.material5.setShininess(10.0);
        this.material5.loadTexture('images/tangram.png');
        this.material5.setTextureWrap('REPEAT', 'REPEAT');

        // TriangleBig
        this.material6 = new CGFappearance(this.scene);
        this.material6.setAmbient(0, 0, 0, 1.0);
        this.material6.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material6.setSpecular(1, 0.6471, 0, 1.0);
        this.material6.setShininess(10.0);
        this.material6.loadTexture('images/tangram.png');
        this.material6.setTextureWrap('REPEAT', 'REPEAT');

        // TriangleBig2
        this.material7 = new CGFappearance(this.scene);
        this.material7.setAmbient(0, 0, 0, 1.0);
        this.material7.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material7.setSpecular(0, 0, 1, 1.0);
        this.material7.setShininess(10.0);
        this.material7.loadTexture('images/tangram.png');
        this.material7.setTextureWrap('REPEAT', 'REPEAT');
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

        this.trianglesmall1.updateTexCoords([0, 0, 0, 0.5, 0.25, 0.25]);


        this.material4.apply();
        this.scene.pushMatrix();
        this.scene.translate(3.4, 1.5, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.trianglesmall1.display();
        this.scene.popMatrix();

        this.material7.apply();
        this.scene.pushMatrix();
        this.scene.translate(1.3, -0.6, 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
        this.trianglebig.display();
        this.scene.popMatrix();

        

        this.trianglebig1.updateTexCoords([1, 0, 0.5, 0.5, 1, 1])

        this.material6.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.5, 1.2, 0.0);
        this.scene.rotate(-2*Math.PI/3-0.275, 0.0, 0.0, 1.0);
        this.trianglebig1.display();
        this.scene.popMatrix();
        
        this.material1.apply();
        this.scene.pushMatrix();
        this.scene.multMatrix(trans);
        this.scene.multMatrix(rot);
        this.diamond.display();
        this.scene.popMatrix();

        
          
    }

    updateTexCoords(coords) {
		  this.diamond.updateTexCoords(coords);
      this.parallelogram.updateTexCoords(coords);
	}

}