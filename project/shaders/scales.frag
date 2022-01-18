#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

varying vec4 vFinalColor;

void main() {

	if (coords.z < 0.2){
		vec4 textureColor = texture2D(uSampler, vTextureCoord);
		gl_FragColor =  textureColor  * vFinalColor;
	}
	else
	{
		gl_FragColor =  vFinalColor;
	}

}

