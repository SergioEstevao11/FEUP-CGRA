#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {
	vec4 color1 = texture2D(uSampler, vTextureCoord);
	vec4 color2 = texture2D(uSampler2, vTextureCoord) + vec4(0.2, 0.2, 0.2, 1);

	gl_FragColor = color1*color2;

}