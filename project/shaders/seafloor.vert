attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;


void main() {

	vec4 color = texture2D(uSampler2,aTextureCoord);

    float height_increase =  color.r;

    vec3 inc_vec = vec3(0.0,0.0,height_increase);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+inc_vec, 1.0);

    vTextureCoord = aTextureCoord;
}