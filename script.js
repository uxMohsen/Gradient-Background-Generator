const h3 = document.querySelector("h3");
const bg = document.querySelector(".body");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");


const setBG = () => {
	bg.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	h3.textContent = bg.style.background
}


color1.addEventListener("input", setBG);
color2.addEventListener("input", setBG);