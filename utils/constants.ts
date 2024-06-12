// all constant values used throughout the program
import { canvas } from "../modules/canvas";

const CANVAS_HEIGHT: number = canvas.height;
const CANVAS_WIDTH: number = canvas.width;

const DOODLER_WIDTH: number = 50;
const DOODLER_HEIGHT: number = 50;

const PLATFORM_WIDTH: number = 50;
const PLATFORM_HEIGHT: number = 10;
const TOTAL_PLATFORM: number = 12;
const PLATFORM_GAP : number = CANVAS_HEIGHT / 8;


export {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	DOODLER_WIDTH,
	DOODLER_HEIGHT,
	PLATFORM_HEIGHT,
	PLATFORM_WIDTH,
    PLATFORM_GAP,
    TOTAL_PLATFORM
};
