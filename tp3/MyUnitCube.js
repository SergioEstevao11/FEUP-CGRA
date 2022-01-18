import {CGFobject} from '../lib/CGF.js';
/**
* MyCone
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyUnitCube extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0.5, -0.5, -0.5, // 0
            0.5, -0.5, -0.5, // 1
            0.5, -0.5, -0.5, // 2
            -0.5, -0.5, -0.5,// 3
            -0.5, -0.5, -0.5,// 4
            -0.5, -0.5, -0.5,// 5
            -0.5, 0.5, -0.5,// 6
            -0.5, 0.5, -0.5,// 7
            -0.5, 0.5, -0.5,// 8
            0.5, 0.5, -0.5, // 9
            0.5, 0.5, -0.5, // 10
            0.5, 0.5, -0.5, // 11
            0.5, -0.5, 0.5, // 12
            0.5, -0.5, 0.5, // 13
            0.5, -0.5, 0.5,  // 14
            -0.5, -0.5 , 0.5, // 15
            -0.5, -0.5 , 0.5, // 16
            -0.5, -0.5 , 0.5, //17
            -0.5, 0.5 , 0.5, //18
            -0.5, 0.5 , 0.5, //19
            -0.5, 0.5 , 0.5, //20
            0.5, 0.5 ,0.5,    //21
            0.5, 0.5 ,0.5,    //22
            0.5, 0.5 ,0.5,    //23
        ];


        this.indices = [
            9,0,3,
        	6,9,3,
            21,12,1,
            10,21,1,
            18,15,13,
            22,18,13,
            7,4,19,
            19,4,16,
            8,20,23,
            11,8,23,
            5,2,14,
            5,14,17,
        ];

        this.normals = [];

		this.normals.push(0,0,-1);
        this.normals.push(1,0,0);
        this.normals.push(0,-1,0);
        this.normals.push(0,0,-1);
        this.normals.push(-1,0,0);
        this.normals.push(0,-1,0);
        this.normals.push(0,0,-1);
        this.normals.push(-1,0,0);
        this.normals.push(0,1,0);
        this.normals.push(0,0,-1);
        this.normals.push(1,0,0);
        this.normals.push(0,1,0);
        this.normals.push(1,0,0);
        this.normals.push(0,0,1);
        this.normals.push(0,-1,0);
        this.normals.push(0,0,1);
        this.normals.push(-1,0,0);
        this.normals.push(0,-1,0);
        this.normals.push(0,0,1);
        this.normals.push(-1,0,0);
        this.normals.push(0,1,0);
        this.normals.push(1,0,0);
        this.normals.push(0,0,1);
        this.normals.push(0,1,0);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    /**
     * Called when user interacts with GUI to change object's complexity.
     * @param {integer} complexity - changes number of slices
     */
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


