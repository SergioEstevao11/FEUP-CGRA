import {CGFobject, CGFappearance} from '../../lib/CGF.js';
import { MyQuad } from "../shapes/MyQuad.js";
/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyCubeMap extends CGFobject {
    
	constructor(scene, Imgs) {
		super(scene);
        this.cam = this.scene.camera.position; //Vector that holds the (x,y,z) coordinates of the camera
		this.init();
        this.textures = Imgs;
        this.initMaterials(this.textures[0], this.textures[1], this.textures[2], this.textures[3], this.textures[4], this.textures[5]);
	}

    /**
     * Initializes the CubeMap shape
     */
    init(){
        this.quad = new MyQuad(this.scene);
    }

    /**
     * Initializes the materials for each face of the cube
     */
    initMaterials(x, x_, y, y_, z, z_){ 
        this.positiveXMaterial = new CGFappearance(this.scene);
        this.positiveXMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.positiveXMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.positiveXMaterial.setSpecular(0, 0, 0, 1.0);
        this.positiveXMaterial.setEmission(1,1,1,1);
        this.positiveXMaterial.setShininess(10.0);
        this.positiveXMaterial.loadTexture(x);
        this.positiveXMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.negativeXMaterial = new CGFappearance(this.scene);
        this.negativeXMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.negativeXMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.negativeXMaterial.setSpecular(0, 0, 0, 1.0);
        this.negativeXMaterial.setEmission(1,1,1,1);
        this.negativeXMaterial.setShininess(10.0);
        this.negativeXMaterial.loadTexture(x_);
        this.negativeXMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.positiveYMaterial = new CGFappearance(this.scene);
        this.positiveYMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.positiveYMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.positiveYMaterial.setSpecular(0, 0, 0, 1.0);
        this.positiveYMaterial.setEmission(1,1,1,1);
        this.positiveYMaterial.setShininess(10.0);
        this.positiveYMaterial.loadTexture(y);
        this.positiveYMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.negativeYMaterial = new CGFappearance(this.scene);
        this.negativeYMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.negativeYMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.negativeYMaterial.setSpecular(0, 0, 0, 1.0);
        this.negativeYMaterial.setEmission(1,1,1,1);
        this.negativeYMaterial.setShininess(10.0);
        this.negativeYMaterial.loadTexture(y_);
        this.negativeYMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.positiveZMaterial = new CGFappearance(this.scene);
        this.positiveZMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.positiveZMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.positiveZMaterial.setSpecular(0, 0, 0, 1.0);
        this.positiveZMaterial.setEmission(1,1,1,1);
        this.positiveZMaterial.setShininess(10.0);
        this.positiveZMaterial.loadTexture(z);
        this.positiveZMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.negativeZMaterial = new CGFappearance(this.scene);
        this.negativeZMaterial.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.negativeZMaterial.setDiffuse(0.0, 0.0, 0.0, 1);
        this.negativeZMaterial.setSpecular(0, 0, 0, 1.0);
        this.negativeZMaterial.setEmission(1,1,1,1);
        this.negativeZMaterial.setShininess(10.0);
        this.negativeZMaterial.loadTexture(z_);
        this.negativeZMaterial.setTextureWrap('REPEAT', 'REPEAT');

    
    }
    

    display(){
        this.scene.pushMatrix();
        //this.scene.translate(this.cam[0], this.cam[1], this.cam[2]); //makes the CubeMap move with the camera

        this.positiveZMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 25);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();

        this.negativeYMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -25, 0);
        this.scene.rotate(Math.PI/2, 1.0, 0.0, 0);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();

        this.negativeZMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -25);
        this.scene.rotate(Math.PI, 0.0, 1.0, 0);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();

        this.positiveYMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 25, 0);
        this.scene.rotate(3*Math.PI/2, 1.0, 0.0, 0);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();

        this.positiveXMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(25, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1.0, 0);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();

        this.negativeXMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-25, 0, 0);
        this.scene.rotate(-Math.PI/2, 0.0, 1.0, 0);
        this.scene.scale(50, 50, 50);
        this.quad.display();
        this.scene.popMatrix();
    
        this.scene.popMatrix();
    }

}