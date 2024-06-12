import { canvas, ctx } from "./canvas.ts";

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
		this.x = canvas.width / 2;
		this.y = canvas.height / 2;
		this.h = 50;
		this.w = 50;

		// doodle movement values
		this.dx = 5;
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
			this.drawDoodler();
		};
	}

	drawDoodler() {
		if (this.loaded)
			ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	}

	updateImage(imgsrc: string) {
		this.img.src = imgsrc;
		this.drawDoodler();
	}

	fall() {
		this.dy += this.gravity;
		this.y += this.dy;

        // Prevent the doodler from falling off the canvas
        if (this.y + this.h > canvas.height) {
            this.y = canvas.height - this.h;
            this.dy = 0;
        }
	}

	jump() {
		this.dy = this.jumpHeight;
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

        if(this.x + this.w < 0) this.x = canvas.width;
        if(this.x > canvas.width) this.x = 0;

        this.fall();
	}
}
