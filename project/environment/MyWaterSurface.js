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
export class MyWaterSurface extends CGFobject {
	constructor(scene, nrDivs, minS, maxS, minT, maxT) {
		super(scene);
		this.watersurface = new MyPlane(scene, nrDivs, minS, maxS, minT, maxT);
        this.initMaterials();
	}

    initMaterials(){ //Initializes water surface's texture 
		this.pierTex = new CGFtexture(this.scene, "images/pier.jpg");

        this.waterAppearance = new CGFappearance(this.scene);
        this.waterAppearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.waterAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.waterAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.waterAppearance.setShininess(120);

		this.waterAppearance.setTexture(this.pierTex);
		this.waterAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		this.distortionMap = new CGFtexture(this.scene, "images/distortionmap.png");

        this.watersurfaceShader = new CGFshader(this.scene.gl, "shaders/watersurface.vert", "shaders/watersurface.frag");

        this.watersurfaceShader.setUniformsValues({ uSampler: 0 });
        this.watersurfaceShader.setUniformsValues({ uSampler2: 1 });
        this.watersurfaceShader.setUniformsValues({ timefactor: 2 });


        this.pierTex.bind(0);
    }

    display(){ // Displays the water surface
        this.scene.setActiveShader(this.watersurfaceShader);
        this.waterAppearance.apply();
        this.distortionMap.bind(1);

        this.scene.pushMatrix();
        this.scene.translate(0, 10, 0);
        
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.scale(50, 50, 8);
        this.watersurface.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.defaultAppearance.apply();
    }

    update(t){ //Allow the motion of the water
        this.watersurfaceShader.setUniformsValues({ timeFactor: t / 100 % 10000});
    }


}
