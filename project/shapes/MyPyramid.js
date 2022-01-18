import {CGFobject} from '../../lib/CGF.js';
/**
* MyPyramid
* @constructor
 * @param scene - Reference to MyScene object
 * @param slices - number of divisions around the Y axis
 * @param stacks - number of divisions along the Y axis
*/
export class MyPyramid extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different
            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);
            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            this.vertices.push(0,2,0); 
            this.normals.push(...normal);

            for(var j = 1 ; j <= this.stacks; j++){ //Pushes new vertices, normals and indices for each stack of the pyramid in order to implement the shader (allows the sea weed stacks to move in differente directions)
                this.vertices.push(ca/4 * (j / this.stacks), 2 - 2 * (j / this.stacks), -sa/4 * (j / this.stacks));
                this.vertices.push(caa/4 * (j / this.stacks) , 2 - 2 * (j / this.stacks) , -saa/4 * (j / this.stacks));
                this.normals.push(...normal);
                this.normals.push(...normal);
                if(j == 1) this.indices.push((this.stacks * 2 + 1 ) * i , (this.stacks * 2 + 1 ) * i + 1  , (this.stacks * 2 + 1 ) * i + 2);

                else{
                    this.indices.push((this.stacks * 2 + 1 ) * i + 2*(j-1) - 1 , (this.stacks * 2 + 1 ) * i + 2*j-1 , (this.stacks * 2 + 1 ) * i + 2 *( j-1));
                    this.indices.push((this.stacks * 2 + 1 ) * i + 2*(j-1)  , (this.stacks * 2 + 1 ) * i + 2*j-1 , (this.stacks * 2 + 1 ) * i + 2 * j  );
                    
                }
                
            }
        

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}


