document.addEventListener("DOMContentLoaded", ()=>{
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("ertekek");
    const rajzfelulet = rajzlap.getContext("2d");
   
 
 
    let kordinata = 500;
    let ertek = 0;
    for (let index = 0; index < 11; index += 1) {
        rajzfelulet.moveTo(10, kordinata);
        rajzfelulet.lineTo(0,kordinata);
        rajzfelulet.stroke();
        rajzfelulet.font = "20px Arial";
        rajzfelulet.fillText(ertek, 10, kordinata+5);
        kordinata -= 50;
        ertek += 50;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "green";
    rajzfelulet.fillRect(50, 500, 50, -500);


})
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap2");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "red";
    rajzfelulet.fillRect(50, 500, 50, -325);


})
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap3");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "blue";
    rajzfelulet.fillRect(50, 500, 50, -120);


})
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap4");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "orange";
    rajzfelulet.fillRect(50, 500, 50, -5);


})
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap5");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "yellow";
    rajzfelulet.fillRect(50, 500, 50, -413);


})
document.addEventListener("DOMContentLoaded", () => {
    /**
     * @type {HTMLCanvasElement}
     */
    const rajzlap = document.getElementById("rajzlap6");
    const rajzfelulet = rajzlap.getContext("2d");
    rajzfelulet.fillStyle = "purple";
    rajzfelulet.fillRect(50, 500, 50, -237);


})