import Doodler from "../modules/doodler.ts";
import { canvas, ctx } from "../modules/canvas.ts";

import { handleMovement, stopMovement } from "./inputHandler.ts";

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

document.addEventListener("keydown", (event) => handleMovement(event, doodler));
document.addEventListener("keyup", (event) => stopMovement(event, doodler));
