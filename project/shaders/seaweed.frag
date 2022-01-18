#ifdef GL_ES
precision highp float;
#endif

uniform int color;


void main() {

    if(color == 1) gl_FragColor = vec4(0.32, 0.53, 0.26, 1);
    else if(color == 2) gl_FragColor = vec4(0.0, 0.71, 0.0, 1);
    else gl_FragColor = vec4(0.0, 0.502, 0.0, 1);
    
	
}