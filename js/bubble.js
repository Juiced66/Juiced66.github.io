// Générateur de bulles


let surprise = document.getElementById('surprise')
let bblCount=50

function createBubble(){
	const body = document.querySelector('body')
	const createElement = document.createElement('span')
	let size = Math.random()*60

	createElement.style.width =  size + "px"
	createElement.style.height =  size + "px"
	createElement.style.left = Math.random()* (innerWidth-90) + "px"
	body.appendChild(createElement)
	
	let t=setTimeout(() =>{
	createElement.remove()
	clearTimeout(t)
},5000)
}


surprise.addEventListener('click', function()
    {
	for (let bbl = 0; bbl < bblCount; bbl++)
	{
		createBubble()
	}})
