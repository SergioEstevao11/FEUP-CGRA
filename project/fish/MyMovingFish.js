import { MyMovingObject } from "./MyMovingObject.js";
import { MyFish} from "./MyFish.js";


const MAX_INT = Number.MAX_SAFE_INTEGER

export class MyMovingFish extends MyMovingObject  {
    
	constructor(scene) {
		super(scene);
        this.init();
        this.carryingRock = 0;
        this.rock;
        this.movingUpOrDown =  0; //Is not moving up or down
        this.posY = 3; //Begining position
	}


    init(){
        this.fish = new MyFish(this.scene);
    }

    display(velInc){  //Displays the moving fish
        this.velInc = velInc;
        this.scene.pushMatrix();
        this.scene.translate(this.posX, this.posY, this.posZ);
        this.scene.rotate(this.ori, 0.0, 1.0, 0.0);
        this.fish.display();
        if (this.carryingRock == 1)
            this.rock.show(0, -0.2, 0.4);
        this.scene.popMatrix();
    }  

    catch(rockset){ //Function that checks wether or not the fish can catch a stone when 'c' is pressed
        var distNest =  Math.pow(this.posX, 2) + Math.pow(this.posY, 2) + Math.pow(this.posZ, 2)
        if(this.carryingRock == 1 && Math.pow(2.5, 2) > distNest){
            this.rock.beingCarried = 0;
            this.rock.insideNest = 1;
            this.carryingRock = 0;
        }
        else{
            var minDist = MAX_INT; 
            var nextMinDist;
            var SelectedRockIndex = -1;
            for(var c = 0; c < 20; c++){
                nextMinDist = (this.posX - rockset.rocks[c].originalPosX)* (this.posX - rockset.rocks[c].originalPosX)+ (this.posY - rockset.rocks[c].originalPosY)  *  (this.posY - rockset.rocks[c].originalPosY) + (this.posZ - rockset.rocks[c].originalPosZ) * (this.posZ - rockset.rocks[c].originalPosZ) ;
                if(nextMinDist < minDist){
                    SelectedRockIndex = c;
                    minDist = nextMinDist;
                }
            } 
            if(minDist < Math.pow(1.5,2)){
                if(this.carryingRock == 0){
                    this.rock = rockset.rocks[SelectedRockIndex];
                    this.rock.beingCarried = 1;
                    this.carryingRock = 1;
                }
            }
        }
    }
    
    elevate(val){ 
        if(val < 0)
            this.movingUpOrDown = -1;  // if val < 0 means fish is moving down
        else this.movingUpOrDown = 1; // fish is moving up

    }

    resetFish(){ //Resets the moving fish
        this.reset();
        this.movingUpOrDown = 0;
        if(this.carryingRock == 1){
            this.rock.beingCarried = 0;
            this.carryingRock = 0;
        }
    }
    
    update(t){ //Updates moving fish's position
        this.fish.update(t,this.direction,this.vel);
        this.direction = '';
        this.posX = this.posX + Math.sin(this.ori) * (this.vel * this.velInc);

        if(this.movingUpOrDown == 1){
            if(this.posY + 0.2 <= 3) this.posY += 0.2;
        }
        else if(this.movingUpOrDown == -1){
            if(this.posY + 0.2 >= 0.6) this.posY -= 0.2;
        }
        this.posZ = this.posZ + Math.cos(this.ori) * (this.vel * this.velInc);
    }
}