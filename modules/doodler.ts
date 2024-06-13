import { ctx } from "./canvas.ts";
import {
	DOODLER_HEIGHT,
	DOODLER_WIDTH,
	CANVAS_WIDTH,
	CANVAS_HEIGHT,
} from "../utils/constants.js";
import Platform from "./platform.ts";

export default class Doodler {
	x: number;
	y: number;
	h: number;
	w: number;
	img: HTMLImageElement;
	dx: number;
	dy: number;
	gravity: number;
	loaded: boolean;
	jumpHeight: number;
	moveingRight: boolean;
	moveingLeft: boolean;

	constructor(imgSrc: string) {
		// doodle postion and size
		this.x = CANVAS_WIDTH / 2;
		this.y = CANVAS_HEIGHT / 2;
		this.h = DOODLER_HEIGHT;
		this.w = DOODLER_WIDTH;

		// doodle movement values
		this.dx = 8;
		this.dy = 0;
		this.gravity = 0.1;
		this.jumpHeight = -4;

		// movement flags
		this.moveingRight = false;
		this.moveingLeft = false;

		// doodle image setup
		this.img = new Image();
		this.img.src = imgSrc;
		this.loaded = false;
		this.img.onload = () => {
			this.loaded = true;
			this.draw();
		};
	}

	draw() {
		if (this.loaded)
			ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	}

	updateImage(imgsrc: string) {
		this.img.src = imgsrc;
		this.draw();
	}

	// drag doodler down over time with gravity
	fall() {
		this.dy += this.gravity;
		this.y += this.dy;
	}

	jump() {
		this.dy = this.jumpHeight;
	}

	//check collision with platform
	//on collision jump 
	onPlatform(platform: Platform) {
		if (
			this.y + this.h >= platform.y &&
			this.y + this.h <= platform.y + platform.h
		) {
			let minX = platform.x - this.w;
			let maxX = platform.x + platform.w;

			if (this.x >= minX && this.x <= maxX) {
				this.jump();
			}
		}
	}

	//updates x position of doodler
	update() {
		if (this.moveingLeft) {
			// updates image to left facing
			this.updateImage("./doodler-left.png");
			this.x -= this.dx;
		} else if (this.moveingRight) {
			//updates image to  right facing
			this.updateImage("./doodler-right.png");
			this.x += this.dx;
		}

		// wrap doodler if it goes out of the screen
		if (this.x + this.w < 0) this.x = CANVAS_WIDTH;
		if (this.x > CANVAS_WIDTH) this.x = 0;

		//place doodler at the center of y-axis if it goes above center
        if(this.y < CANVAS_HEIGHT/2) this.y = CANVAS_HEIGHT/2;

		this.fall();
	}
}
