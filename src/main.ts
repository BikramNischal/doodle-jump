import Doodler from "../modules/doodler.ts";
import { canvas, ctx } from "../modules/canvas.ts";

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
// const restartBtn = document.querySelector(".btn--restart") as HTMLButtonElement;
const mainMenu = document.querySelector(".main-menu") as HTMLDivElement;



let doodler = new Doodler("./doodler-right.png");
doodler.drawDoodler();


function Game() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	doodler.drawDoodler();
	doodler.update();
	requestAnimationFrame(Game);
}

startBtn.onclick = () => {
	mainMenu.style.display = "none";
    Game();
};

