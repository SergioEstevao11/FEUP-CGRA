#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	vec4 color2 = texture2D(uSampler2, vTextureCoord+vec2(timeFactor, timeFactor)*0.002); //pier
	vec4 color1 = texture2D(uSampler, vTextureCoord + vec2(color2.r - 0.5, color2.g - 0.5)*0.5);

	gl_FragColor = color1;
}