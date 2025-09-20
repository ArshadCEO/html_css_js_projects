const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const random = Math.random()*50;

    const spanEl = document.createElement("SPAN");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    spanEl.style.width = random + "px";
    spanEl.style.height = random + "px";

    bodyEl.append(spanEl);

    setTimeout(()=>{
        spanEl.remove()
    },3000)
})