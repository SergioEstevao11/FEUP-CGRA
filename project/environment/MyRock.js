import {CGFobject, CGFappearance} from '../../lib/CGF.js';

export class MyRock extends CGFobject {
/**
 * @method constructor
 * @param  {CGFscene} scene - MyScene object
 * @param  {integer} slices - number of slices around Y axis
 * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
 */
    constructor(scene, slices, stacks) {
        super(scene);
        this.latDivs = stacks * 2;
        this.longDivs = slices;

        this.x_scale = Math.random() * 0.4;
        this.y_scale = Math.random() * 0.2;
        this.z_scale = Math.random() * 0.4;

        this.originalPosX;
        this.originalPosY = 0.05;
        this.originalPosZ;
        this.beingCarried = 0; //bool variable
        this.insideNest = 0; //bool variable

        this.initBuffers();
        this.initMaterial();
    }

/**
 * @method initBuffers
 * Initializes the sphere buffers
 */
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var randnum;
        
        //Generates a random position for the rock that is outside of the nest

        //X coordinate
        while(true){
            randnum =  (Math.random()-0.5)*45;
            if(randnum > 2.5 || randnum < -2.5){
                this.originalPosX = randnum;
                break;
            }
        }

        //Y coordinate
        while(true){
            randnum =  (Math.random()-0.5)*45;
            if(randnum > 2.5 || randnum < -2.5){
                this.originalPosZ = randnum;
                break;
            }
        }

        var phi = 0;
        var theta = 0;
        var phiInc = Math.PI / this.latDivs;
        var thetaInc = (2 * Math.PI) / this.longDivs;
        var latVertices = this.longDivs + 1;


        var incLon = 1/this.longDivs;
        var incLat = 1/this.latDivs;

        // build an all-around stack at a time, starting on "north pole" and proceeding "south"
        for (let latitude = 0; latitude <= this.latDivs; latitude++) {
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            // in each stack, build all the slices around, starting on longitude 0
            theta = 0;
            for (let longitude = 0; longitude <= this.longDivs; longitude++) {
                var x = Math.cos(theta) * sinPhi;
                var y = cosPhi;
                var z = Math.sin(-theta) * sinPhi;
                
                if(longitude == this.longDivs){
                    var offset = off_first;
                } else{
                    //--- Vertices coordinates
                    var offset = 0.10 * Math.random() + 0.5;
                }

                if(longitude == 0){
                    var off_first = offset;
                } 
                
                this.vertices.push(x * offset, y * offset, z * offset);

                //Indices
                if (latitude < this.latDivs && longitude < this.longDivs) {
                    var current = latitude * latVertices + longitude;
                    var next = current + latVertices;
                    
                    
                    this.indices.push( current + 1, current, next);
                    this.indices.push( current + 1, next, next +1);
                }

                this.normals.push(x, y, z);
                theta += thetaInc;

                this.texCoords.push(0 + longitude*incLat, 0+latitude*incLon);
            }
            phi += phiInc;
        }


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    }

    initMaterial() {
        this.rockAppearance = new CGFappearance(this.scene);
        this.rockAppearance.setAmbient(0.5, 0.5, 0.5, 1);
        this.rockAppearance.setDiffuse(0.5, 0.5, 0.5, 1);
        this.rockAppearance.setSpecular(0.5, 0.5, 0.5, 1);
        this.rockAppearance.setEmission(0,0,0,1);
        this.rockAppearance.setShininess(500);
    }

    //Function that display the position of the rock
    show(posX, posY, posZ){
        this.rockAppearance.apply();
        this.scene.pushMatrix();
        if(this.beingCarried == 0 && this.insideNest == 0){ //If the rock is in the sand:
            this.scene.translate(this.originalPosX, this.originalPosY, this.originalPosZ);
        }else{//If the rock is being carried by the fish
            this.scene.translate(posX, posY, posZ);
        }
        this.scene.scale(0.2+this.x_scale,0.2+this.y_scale,0.2+this.z_scale);
        this.display();
        this.scene.popMatrix();        
        this.scene.defaultAppearance.apply();
    }
}
