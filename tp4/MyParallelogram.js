import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			2, 0, 0,	//1
			3, 1, 0,	//2
			1, 1, 0,	//3
			0, 0, 0,	//4
			2, 0, 0,	//5
			3, 1, 0,	//6
			1, 1, 0,	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			3, 0, 2,
			2, 0, 1,
			6, 4, 7,
			5, 4, 6,
			
		];

		this.normals = [];

		for(var i = 0; i< 4; i++){
			this.normals.push(0,0,-1);
		}
		
		for(var i = 0; i< 4; i++){
			this.normals.push(0,0,1);
		}

		this.texCoords = [
			
			0.5, 1,
			1, 1,
			0.75, 0.75,
			0.25, 0.75,
			0.5, 1,
			1, 1,
			0.75, 0.75,
			0.25, 0.75,
			
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

