attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float timeFactor;
varying vec4 coords;

varying vec2 vTextureCoord;


void main() {
    coords = vec4(aVertexPosition+aVertexNormal*0.1, 1.0);

	vec3 offset = vec3(1.0,0.0,1.0);
    vec3 offset2 = vec3(1.0,0.0,1.0);
	
	vTextureCoord = aTextureCoord;

    offset *= 0.03*sin(timeFactor);
    offset2 *= 0.03*sin(-timeFactor);

    if(coords.y < 0.8) gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
	else if((coords.y < 2.0 && coords.y > 1.9) || (coords.y < 1.8 && coords.y > 1.7) || (coords.y < 1.6 && coords.y > 1.5) || (coords.y < 1.4 && coords.y > 1.3) ) 
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
    else  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset2, 1.0);
}
