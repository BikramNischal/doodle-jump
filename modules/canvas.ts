
const gameContainer = document.querySelector(".game-container") as HTMLDivElement;
const canvas = document.querySelector(".canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.height =  gameContainer.getBoundingClientRect().height;
canvas.width =  gameContainer.getBoundingClientRect().width;


export {canvas, ctx};
