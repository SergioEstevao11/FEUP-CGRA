import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader } from "../lib/CGF.js";
import { MyCubeMap } from "./environment/MyCubeMap.js";
import { MyMovingFish } from "./fish/MyMovingFish.js";
import { MySeaFloor } from "./environment/MySeaFloor.js";
import { MyWaterSurface } from "./environment/MyWaterSurface.js";
import { MyRockSet } from "./environment/MyRockSet.js";
import { MyPillar } from "./environment/MyPillar.js";
import { MySeaWeedSet } from "./environment/MySeaWeedSet.js"

/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
		this.appearance = null;
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        this.ocean = ['images/underwater_cubemap/right.jpg', 'images/underwater_cubemap/left.jpg', 'images/underwater_cubemap/top.jpg', 'images/underwater_cubemap/bottom.jpg', 'images/underwater_cubemap/front.jpg', 'images/underwater_cubemap/back.jpg'];
        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(10);
        
        this.enableTextures(true);

        //Initializes scene objects
        this.axis = new CGFaxis(this);
        this.cubemap = new MyCubeMap(this, this.ocean)
        this.movingfish = new MyMovingFish(this);
        this.seafloor = new MySeaFloor(this, 25);
        this.watersurface = new MyWaterSurface(this, 25);
        this.rockset = new MyRockSet(this);
        this.pillar = new MyPillar(this);
        this.seaweedset = new MySeaWeedSet(this);

        //Initializes default appearance
        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0,0,0,1);
		this.defaultAppearance.setShininess(120);

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayCubeMap = true;
        this.displayMovingFish = true;
        this.displaySeaFloor = true;
        this.displayWaterSurface = true;
        this.displayRockSet = true;
        this.displaySeaWeedSet = true;
        this.displayPillar = true;
        this.scaleFactor = 1;
        this.size = 1;
        this.speedFactor = 1;

        //Shaders used on the fish and sea weed
        this.testShaders = [
			new CGFshader(this.gl, "shaders/seaweed.vert", "shaders/seaweed.frag"),
            new CGFshader(this.gl, "shaders/scales.vert", "shaders/scales.frag"),
            new CGFshader(this.gl, "shaders/fisheye.vert", "shaders/fisheye.frag")

		];
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(1.75, 0.1, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
    }

    checkKeys()  {
        var text="Keys pressed: ";

        var keysPressed=false;

        if (this.gui.isKeyPressed("KeyW")) {
                this.movingfish.accelerate(0.01);
                text+=" W ";
                keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyS")) {
                this.movingfish.accelerate(-0.01);
                text+=" S ";
                keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            this.movingfish.turn(-Math.PI/15);
            text+= " A ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyD")) {
            this.movingfish.turn(Math.PI/15);
            text+= " D ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
                this.movingfish.resetFish();
                text+= " R ";
                keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyP")) {
            this.movingfish.elevate(1);
            text+= " P ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyL")) {
            this.movingfish.elevate(-1);
            text+= " L ";
            keysPressed=true;
        }

        if (this.gui.isKeyPressed("KeyC")) {
            this.movingfish.catch(this.rockset);
            text+= " C ";
            keysPressed=true;
        }

        if (keysPressed)
            console.log(text);
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    update(t){  
        this.checkKeys();
        this.movingfish.update(t);
        this.watersurface.update(t);
        this.testShaders[0].setUniformsValues({ timeFactor: t / 100 % 100});
    }

    display() {
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        this.defaultAppearance.apply();

        this.scale(this.size, this.size, this.size);

        if (this.displayAxis)
            this.axis.display();

        if (this.displayCubeMap){
            this.cubemap.display();
        }

        if (this.displayMovingFish){
            this.movingfish.display(this.speedFactor);
        }

        if(this.displaySeaFloor){
            this.seafloor.display();
        }

        if(this.displayWaterSurface){
            this.watersurface.display();
        }

        if(this.displayRockSet){
            this.rockset.display();
        }

        if(this.displayPillar){
            this.pillar.display();
        }

        if(this.displaySeaWeedSet){
            this.seaweedset.display();
        }
    }
}