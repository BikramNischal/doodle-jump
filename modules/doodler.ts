import { canvas, ctx } from "./canvas.ts";


export default class Doodler{
    x: number;
    y: number;
    h: number;
    w: number;
    img: HTMLImageElement;
    dx:number;
    dy:number;
    gravity:number;
    loaded: boolean;

    constructor(imgSrc: string) {
        //postion and size 
        this.x  = canvas.width/2;
        this.y = canvas.height/2;
        this.h = 50;
        this.w = 50;  

        //movement values 
        this.dx = 0;
        this.dy = 0;
        this.gravity = 0.1;

        // image setup
        this.img = new Image();
        this.img.src= imgSrc;
        this.loaded = false;
        this.img.onload = () => {
            this.loaded = true;
            this.drawDoodler();
        }
    }

    drawDoodler(){
        if(this.loaded)
            ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }

    updateImage(imgsrc:string){
       this.img.src = imgsrc; 
       this.drawDoodler();
    }

    update(){
        this.dy += this.gravity;
        this.y += this.dy;
    }

}