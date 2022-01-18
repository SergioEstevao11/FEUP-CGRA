import { CGFappearance, CGFtexture, CGFobject} from "../../lib/CGF.js";

import { MySphere } from "../shapes/MySphere.js";
import { MyFin } from "./MyFin.js";
import { MySideFin } from "./MySideFin.js";
import { MyTriangle } from "../shapes/MyTriangle.js";

export class MyFish extends CGFobject {
    
	constructor(scene) {
		super(scene);

        //
        
        this.posX = 0;
        this.posY = 0;
        this.posZ = 0;
        this.init();
	}

    init(){
        //Initializes all materials and objects
        this.initMaterials();
        this.sphere = new MySphere(this.scene, 50, 8); //used to represent the eyes and the body of the fish
        this.fin = new MyFin(this.scene);
        this.leftsidefin = new MySideFin(this.scene);
        this.rigthsidefin = new MySideFin(this.scene);
        this.TopFin = new MyTriangle(this.scene);


        // Materials and textures initialization

		this.fishBodyAppearance = new CGFappearance(this.scene);
		this.fishBodyAppearance.setAmbient(0.8, 0.8, 1, 1);
		this.fishBodyAppearance.setDiffuse(0.8, 0.8, 1, 1);
		this.fishBodyAppearance.setSpecular(0.8, 0.8, 1, 1);
		this.fishBodyAppearance.setShininess(120);

        this.EyeAppearance = new CGFappearance(this.scene);
		this.EyeAppearance.setAmbient(0.8, 0.8, 1, 1);
		this.EyeAppearance.setDiffuse(0.8, 0.8, 1, 5551);
		this.EyeAppearance.setSpecular(0.8, 0.8, 1, 1);
		this.EyeAppearance.setShininess(120);

        this.fishBodyTexture = new CGFtexture(this.scene, "images/fishBody.png");
		this.fishBodyAppearance.setTexture(this.fishBodyTexture);
		this.fishBodyAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.EyeTexture = new CGFtexture(this.scene, "images/FishEye.PNG");
        this.EyeAppearance.setTexture(this.EyeTexture);
		this.EyeAppearance.setTextureWrap('REPEAT', 'REPEAT');

    }

    initMaterials(){
    
        this.blueMaterial = new CGFappearance(this.scene);
        this.blueMaterial.setAmbient(0.8, 0.8, 1, 1);
        this.blueMaterial.setDiffuse(0.8, 0.8, 1, 1);
        this.blueMaterial.setSpecular(0.8, 0.8, 1, 1);
        this.blueMaterial.setShininess(10.0);
    }

    

    display(){

        this.fishBodyAppearance.apply();
        this.scene.setActiveShader(this.scene.testShaders[1]);
        this.scene.pushMatrix();
        this.scene.translate(this.posX, this.posY, this.posZ); 
        this.scene.scale(0.33, 0.41, 0.5);
        this.sphere.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();


        this.blueMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.posX, this.posY, this.posZ - 0.5 ); 
        this.scene.scale(0.4, 0.4, 0.4); 
        this.fin.display();
        this.scene.popMatrix();


        this.blueMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.posX + 0.3, this.posY - 0.2  , this.posZ ); 
        this.scene.scale(0.4, 0.4, 0.4); 
        this.leftsidefin.display();
        this.scene.popMatrix();

        this.blueMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.posX - 0.3, this.posY - 0.2  , this.posZ ); 
        this.scene.scale(0.4, 0.4, 0.4); 
        this.scene.scale(-1, 1, 1); 
        this.rigthsidefin.display();
        this.scene.popMatrix();

        this.blueMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(this.posX, this.posY + 0.35, this.posZ - 0.2); 
        this.scene.rotate(3*Math.PI/4, 1, 0, 0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.scale(0.4, 0.4, 0.4);  
        this.TopFin.display();
        this.scene.popMatrix();

        this.EyeAppearance.apply();
        this.scene.setActiveShader(this.scene.testShaders[2]);
        this.scene.pushMatrix();
        this.scene.translate(this.posX + 0.25, this.posY+0.1, this.posZ +0.25); 
        this.scene.rotate(-Math.PI/9, 0, 1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.scale(0.4, 0.4, 0.4);  
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(this.posX - 0.25, this.posY+0.1, this.posZ +0.25); 
        this.scene.rotate(Math.PI/9, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 0, 0, 1);
        this.scene.scale(0.2, 0.2, 0.2);
        this.scene.scale(0.4, 0.4, 0.4);  
        this.sphere.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
        this.scene.defaultAppearance.apply();

    } 


    update(t,dir,vel){ //Updates the fin's movement

        this.fin.update(t / 300 % 300, vel); 

        switch(dir){
            case 'L': //If it is moving to the right only left fin moves
                this.leftsidefin.update(t / 50 );
                break;
            case 'R': //If it is moving to the left only right fin moves
                this.rigthsidefin.update(t / 50);
                break;
            default: //Else, both fins move
                this.leftsidefin.update(t / 200);
                this.rigthsidefin.update(t / 200 );
                break;
        }
    }

}