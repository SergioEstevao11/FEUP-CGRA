import { CGFappearance, CGFtexture, CGFshader, CGFobject} from "../../lib/CGF.js";
import { MyPlane } from '../shapes/MyPlane.js';
/**
* MySeaFloor
* @constructor
 * @param scene - Reference to MyScene object
 * @param nDivs - number of divisions in both directions of the surface
 * @param minS - minimum texture coordinate in S
 * @param maxS - maximum texture coordinate in S
 * @param minT - minimum texture coordinate in T
 * @param maxT - maximum texture coordinate in T
*/
export class MySeaFloor extends CGFobject {
	constructor(scene, nrDivs, minS, maxS, minT, maxT, offset) {
		super(scene);
		this.seafloor = new MyPlane(scene, nrDivs, minS, maxS, minT, maxT);
        this.offset = offset;
        this.initMaterials();
	}

    /**
     * Initializes the SeaFloor's texture
     */

    initMaterials(){

		this.sandTex = new CGFtexture(this.scene, "images/sandNice.png");

        this.floorAppearance = new CGFappearance(this.scene);
        this.floorAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.floorAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.floorAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.floorAppearance.setShininess(120);

		this.floorAppearance.setTexture(this.sandTex);
		this.floorAppearance.setTextureWrap('REPEAT', 'REPEAT');

		this.sandMap = new CGFtexture(this.scene, "images/sandMapNice.png");

        this.seafloorShader = new CGFshader(this.scene.gl, "shaders/seafloor.vert", "shaders/seafloor.frag");

        this.sandTex.bind(0);




        this.seafloorShader.setUniformsValues({ uSampler: 0 });
        this.seafloorShader.setUniformsValues({ uSampler2: 1 });


    }

    display(){


        this.scene.setActiveShader(this.seafloorShader);
        this.floorAppearance.apply();
        this.sandMap.bind(1);

        this.scene.pushMatrix();
        this.scene.translate(0, -4, 0);
    
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.scale(50, 50, 8);
        this.seafloor.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.defaultAppearance.apply();
    }

}
