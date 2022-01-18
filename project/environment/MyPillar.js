import { CGFobject} from '../../lib/CGF.js';
import { CGFappearance, CGFtexture} from "../../lib/CGF.js";
import { MyCylinder } from "../shapes/MyCylinder.js";

export class MyPillar extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init()
        this.initMaterial();
    }

    /**
     * Initializes the Pillar's shape
     */
    init() {
        this.cylinder = new MyCylinder(this.scene, 100, 12);
    }


    /**
     * Initializes the Pillar's texture
     */
    initMaterial() {
        this.pillarAppearance = new CGFappearance(this.scene);
        this.pillarTex = new CGFtexture(this.scene, "images/pillar.jpg");
        this.pillarAppearance.setTexture(this.pillarTex);
		this.pillarAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display() {
        this.pillarAppearance.apply();
        this.scene.pushMatrix();
        this.scene.translate(17.5,-2,0);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(17.5,-2,-4);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,-2,0);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(5,-2,-4);
        this.cylinder.display();
        this.scene.popMatrix();
        this.scene.defaultAppearance.apply();
    }
        
    
}