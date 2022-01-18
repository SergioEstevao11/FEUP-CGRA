import {CGFobject} from '../lib/CGF.js';
import { MyQuad } from "./MyQuad.js";
import {CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {
    
	constructor(scene, x, x_, y, y_, z, z_) {
		super(scene);
		this.init();
        this.initMaterials(x, x_, y, y_, z, z_);
	}

    init(){
        this.quad = new MyQuad(this.scene);
        
    }

    initMaterials(x, x_, y, y_, z, z_){
        this.material1 = new CGFappearance(this.scene);
        this.material1.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material1.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material1.setSpecular(0, 0, 0, 1.0);
        this.material1.setShininess(10.0);
        this.material1.loadTexture(x);
        this.material1.setTextureWrap('REPEAT', 'REPEAT');
        
        this.material2 = new CGFappearance(this.scene);
        this.material2.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material2.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material2.setSpecular(0, 0, 0, 1.0);
        this.material2.setShininess(10.0);
        this.material2.loadTexture(x_);
        this.material2.setTextureWrap('REPEAT', 'REPEAT');
        
        this.material3 = new CGFappearance(this.scene);
        this.material3.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material3.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material3.setSpecular(0, 0, 0, 1.0);
        this.material3.setShininess(10.0);
        this.material3.loadTexture(z);
        this.material3.setTextureWrap('REPEAT', 'REPEAT');

        this.material4 = new CGFappearance(this.scene);
        this.material4.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material4.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material4.setSpecular(0, 0, 0, 1.0);
        this.material4.setShininess(10.0);
        this.material4.loadTexture(z_);
        this.material4.setTextureWrap('REPEAT', 'REPEAT');

        this.material5 = new CGFappearance(this.scene);
        this.material5.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material5.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material5.setSpecular(0, 0, 0, 1.0);
        this.material5.setShininess(10.0);
        this.material5.loadTexture(y);
        this.material5.setTextureWrap('REPEAT', 'REPEAT');

        this.material6 = new CGFappearance(this.scene);
        this.material6.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.material6.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material6.setSpecular(0, 0, 0, 1.0);
        this.material6.setShininess(10.0);
        this.material6.loadTexture(y_);
        this.material6.setTextureWrap('REPEAT', 'REPEAT');
    }
	
    display(){

        this.material3.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        this.material6.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1.0, 0.0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.material4.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.material5.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(3*Math.PI/2, 1.0, 0.0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.material1.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();

        this.material2.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
          
    }

}