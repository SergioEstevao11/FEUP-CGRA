import {CGFobject} from '../../lib/CGF.js';
/**
* MyCylinder
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyCylinder extends CGFobject {
    constructor(scene, slices, height) {
        super(scene);
        this.slices = slices;
        this.height = height;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.normals = [];
        this.texCoords = [];
        this.indices = [];

        // Vertices and normals
        const angle = 2*Math.PI;
        
        for (var i = 0; i <= this.slices; i++) {
            var ang = i*angle/this.slices
            var x =  Math.cos(ang);
            var z = -Math.sin(ang);
            this.vertices.push(x, 0, z); 
            this.normals.push(x, 0, z); 
            this.texCoords.push(i/this.slices, 1);
            this.vertices.push(x, this.height, z); 
            this.normals.push(x, 0, z); 
            this.texCoords.push(i/this.slices, 0);
        }
        //Triangles
        for(let i = 0; i < this.slices; i++){
            this.indices.push(2*i+1, 2*i, 2*i+2);
            this.indices.push(2*i+1, 2*i+2, 2*i+3);            
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();

    }
}
