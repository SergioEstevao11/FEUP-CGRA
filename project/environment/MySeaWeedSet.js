import {CGFobject} from '../../lib/CGF.js';
import { MySeaWeed } from "./MySeaWeed.js";

export class MySeaWeedSet extends CGFobject {
    constructor(scene) {
        super(scene);
        this.init()
    }


    /**
     * Initializes all the SeaWeeds
     */
    init() {
        
        this.seaWeeds = [];
        this.x_offset = [];
        this.z_offset = [];
        this.rand_scale = [];
        for(var c = 0; c < 15; c++){
            this.seaWeeds.push(new MySeaWeed(this.scene));
            this.x_offset.push((Math.random()-0.5)*2); //Generates a random X coordinate for each SeaWeed
            this.z_offset.push((Math.random()-0.5)*2); //Generates a random Z coordinate for each SeaWeed
            this.rand_scale.push(Math.random() * 0.4);
        }
        
    }
    
    display() {
        this.scene.setActiveShader(this.scene.testShaders[0]);
        for (var c = 0; c < 15; c++){
            this.scene.testShaders[0].setUniformsValues({ color: c % 3 });
            this.scene.pushMatrix();
            this.scene.translate(this.x_offset[c] * 20, 0, this.z_offset[c] * 20);
            this.scene.scale(1+this.rand_scale[c],1+this.rand_scale[c],1+this.rand_scale[c]);
            this.seaWeeds[c].display();
            this.scene.popMatrix();
        }
        this.scene.setActiveShader(this.scene.defaultShader);
    }
    
}