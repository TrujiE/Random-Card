//console.log("Random Card");
function randomCard(){
	let numero = Math.floor((Math.random() * 13));
	switch(numero){
		case 0:
			return "K";
		case 12:
			return "Q";
		case 11:
			return "J";
		case 1:
			return "A";
		default:
			break;
	}
    return numero;
}

function random(){


	let element = document.getElementById("num");
	element.innerHTML= randomCard();


	let element2 = document.getElementById("pinta");
	element2.innerHTML= randomPintas();


}

function randomPintas(){
    let pintas = Math.floor((Math.random() * 4));
	switch(pintas){
		case 0:
			document.getElementById("pinta").style.color = "red";
			document.getElementById("pinta2").style.color = "red";
			document.getElementById("pinta2").innerHTML = "♥";
			return "♥";
		case 1:
			document.getElementById("pinta").style.color = "black";
			document.getElementById("pinta2").style.color = "black";
			document.getElementById("pinta2").innerHTML = "♠";			
			return "♠";
		case 2:
			document.getElementById("pinta").style.color = "red";
			document.getElementById("pinta2").style.color = "red";
			document.getElementById("pinta2").innerHTML = "♦";
			return "♦";
		case 3:
			document.getElementById("pinta").style.color = "black";
			document.getElementById("pinta2").style.color = "black";
			document.getElementById("pinta2").innerHTML = "♣";
			return "♣";
		default:
			document.getElementById("pinta").style.color = "red";
			document.getElementById("pinta2").style.color = "red";
			document.getElementById("pinta2").innerHTML = "♥";
			return "♥";
	}
	return pintas;
}

let element = document.getElementById("num");
element.innerHTML= randomCard();


let element2 = document.getElementById("pinta");
element2.innerHTML= randomPintas();
