let body = document.querySelector("body");
let result = document.getElementById("result-selected");
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
 

/* TO UPDATE THE BACKGROUD */
function setBackground() {

	body.style.background = 'linear-gradient(to right, '+color1.value+', '+color2.value+')';
	result.textContent = body.style.background;
} 


/* INITIALIZATION FUNCTION (TO SET DEFAULT COLOR)  */
function initialize(firstColor, secondColor) {

	color1.value = firstColor;
	
	color2.value = secondColor; 
	
	setBackground();
}





/****************************************  PROCESSING ***********************************************/
initialize('#ff8000', '#008080');


color1.addEventListener('input' , (event) => { 

	setBackground();
});

 

color2.addEventListener('input' , (event) => { 

	setBackground();
});
