import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	PLATFORM_GAP,
	PLATFORM_HEIGHT,
	PLATFORM_WIDTH,
    TOTAL_PLATFORM,
} from "../utils/constants.ts";
import { ctx } from "./canvas";
import random  from "../utils/random.ts";

export default class Platform {
	x: number;
	y: number;
	h: number;
	w: number;
	img: HTMLImageElement;

	constructor(posX: number, posY: number) {
		this.x = posX;
		this.y = posY;
		this.w = PLATFORM_WIDTH;
		this.h = PLATFORM_HEIGHT;
		this.img = new Image();
		this.img.src = "./platform.png";
	}

	draw() {
		ctx.drawImage(this.img, this.x, this.y,this.w,this.h);
	}

	// place platform at top after it goes out of canvas
    update(){
        if(this.y > CANVAS_HEIGHT){
            this.y = 0;
            this.x = random(CANVAS_WIDTH - this.w);
        }
    }

}

// genereate TOTAL_TLATFORM number of platform 
function generatePlateforms() {
	const platforms = [];

	for (let i = 0; i < TOTAL_PLATFORM; ++i) {
		platforms.push(
			new Platform(
				random(CANVAS_WIDTH - PLATFORM_WIDTH),
				CANVAS_HEIGHT - ((i+1) * PLATFORM_GAP)
			)
		);
	}

	return platforms;
}

export { generatePlateforms };
