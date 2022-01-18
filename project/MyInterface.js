import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }
    initKeys() {

        // create reference from the scene to the GUI

        this.scene.gui=this;

        

    // disable the processKeyboard function

        this.processKeyboard=function(){};

        

        // create a named array to store which keys are being pressed

        this.activeKeys={};

    }


    processKeyDown(event) {

        // called when a key is pressed down

        // mark it as active in the array

        this.activeKeys[event.code]=true;

    };


    processKeyUp(event) {

        // called when a key is released, mark it as inactive in the array

        this.activeKeys[event.code]=false;

    };


    isKeyPressed(keyCode) {

    if( this.activeKeys[keyCode] === true &&

            (keyCode == "keyL" || keyCode == "keyP")) {

              this.activeKeys[keyCode] = false;

              return true;

    }  

    return this.activeKeys[keyCode] || false;

    }
    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;


        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayCubeMap').name('Display CubeMap');
        this.gui.add(this.scene, 'displayMovingFish').name('Display Fish');
        this.gui.add(this.scene, 'displaySeaFloor').name('Display SeaFloor');
        this.gui.add(this.scene, 'displayWaterSurface').name('Display Water');
        this.gui.add(this.scene, 'displayRockSet').name('Display Rocks');
        this.gui.add(this.scene, 'displayPillar').name('Display Pillars');
        this.gui.add(this.scene, 'displaySeaWeedSet').name('Display SeaWeed');


        //Dropdown for textures        
        this.gui.add(this.scene, 'size', 0.1, 5).name('Size');
        this.gui.add(this.scene, 'scaleFactor', 0.5, 3).name('Scale Factor');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3).name('Speed Factor');
    
        this.initKeys();
        return true;
    }
}