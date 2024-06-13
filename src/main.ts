import { CANVAS_HEIGHT, CANVAS_WIDTH} from "../utils/constants.ts";
import { ctx } from "../modules/canvas.ts";
import Doodler from "../modules/doodler.ts";
import { generatePlateforms } from "../modules/platform.ts";
import { handleMovement, stopMovement } from "./inputHandler.ts";

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const restartBtn = document.querySelector(".btn--restart") as HTMLButtonElement;
const mainMenu = document.querySelector(".main-menu") as HTMLDivElement;
const restartMenu = document.querySelector(".restart-menu") as HTMLDivElement;
const yourscore = document.querySelector(".score") as HTMLHeadingElement;

//initialize doodle and get platforms 
let doodler = new Doodler("./doodler-right.png");
let platforms = generatePlateforms();


//game score and gameflag
let score = 0;
let gameover = false;

//game score set up 
function displayScore() {
	ctx.fillStyle = "black";
	ctx.font = "32px Gloria Hallelujah";
	ctx.fillText("Score: " + score, 20, 50);
}


// reset game datas
function resetGame(){
    doodler = new Doodler("./doodler-right.png");
    platforms = generatePlateforms();
    score = 0;
    gameover= false;
}


//main game function
function Game() {
    if(gameover) return;
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let platformDy = doodler.dy * -1;

	//draw platforms on canvas
	platforms.forEach((platform) => {        
        const tempPlatformHeight = platform.y + platformDy;
        if(tempPlatformHeight > platform.y){
            platform.y = tempPlatformHeight;
        }
		if (platform.y > CANVAS_HEIGHT) score++;
		platform.update();
		platform.draw();

        //checks platform collision 
		doodler.onPlatform(platform);

	});

	//draw doodle on canvas
	doodler.draw();
	doodler.update();
    displayScore();

    //check if doodler falls off the canvas
    if(doodler.y > CANVAS_HEIGHT){ 
        gameover = true;
    }

	requestAnimationFrame(Game);

}


// game loop for game windows management
function gameloop(){
    
    //display and start game window on start button event
    startBtn.onclick = () => {
        mainMenu.style.display = "none";
        Game();
    };

    //display and restart game on restart button event
    restartBtn.onclick = () =>{
        restartMenu.style.display = "none";
        resetGame();
        Game();
    }

    //display end game screen
    if(gameover){
        restartMenu.style.display = "flex" ;
        yourscore.innerHTML = `Score ${score} points`;
    }
    requestAnimationFrame(gameloop);
}

gameloop();


document.addEventListener("keydown", (event) => handleMovement(event, doodler));
document.addEventListener("keyup", (event) => stopMovement(event, doodler));
