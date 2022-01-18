import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0.5, -0.5, -0.5, // 1
			-0.5, -0.5, -0.5,//2
            -0.5, 0.5, -0.5,//3
			0.5, 0.5, -0.5, //4
            0.5, -0.5, 0.5, // 1
			-0.5, -0.5 , 0.5,//2
            -0.5, 0.5 , 0.5,//3
			0.5, 0.5 ,0.5,	//8
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			3,0,1,
            3,1,2,
            5,4,7,
            6,5,7,
            4,5,0,
            5,1,0,
            7,3,2,
            6,7,2,
            4,0,3,
            7,4,3,
            1,5,6,
            2,1,6,
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
