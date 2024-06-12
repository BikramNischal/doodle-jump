import Doodler from "../modules/doodler";

function handleMovement(event: KeyboardEvent, doodler: Doodler) {
	if (event.key === " ") {
		doodler.jump();
	} else if (event.key === "ArrowRight") {
        doodler.moveingRight = true;
	} else if (event.key === "ArrowLeft") {
        doodler.moveingLeft = true;
	}
}

function stopMovement(event: KeyboardEvent, doodler: Doodler) {
    if (event.key === "ArrowRight") {
        doodler.moveingRight = false;
    } else if (event.key === "ArrowLeft") {
        doodler.moveingLeft = false;
    }
}


export { handleMovement, stopMovement };
