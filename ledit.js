//eeeeeeeeeeeeeeeeee
var s = document.createElement("style")
s.innerHTML = `
div.leditthing{
	color: black;
	display: block;
	position: relative;
	overflow: scroll;
	white-space: nowrap;
}
textarea.leditthing{
	opacity: 0.1;
	color: red;
	z-index: 10;
	width: 98vw;
	white-space: nowrap;
	color: white;
}
`
document.head.appendChild(s)
class Leditor {
	constructor(obj) {
		var defaults = {
			font: "menlo, monospace",
			source: document.body,
			value: "{}",
			fontSize: "15px"
		}
		for (var prop in obj) {
			defaults[prop]=obj[prop]
		}
		for (var prop in defaults) {
			this[prop]=defaults[prop]
		}
	}
	start(){
		var ta = document.createElement("textarea")
		var ol = document.createElement("div")
		ol.classList.add("leditthing")
		ta.classList.add("leditthing")
		ta.value = this.value
		ol.innerText = this.value
		this.source.appendChild(ta)
		this.source.appendChild(ol)
		ta.style.position = "absolute"
		ta.style.display = "block"
		ta.style.fontFamily = this.font
		ol.style.fontFamily = this.font
		ta.style.padding = "0px"
		ta.style.fontSize = this.fontSize
		ol.style.fontSize = this.fontSize
		ta.style.border = "none"
		ol.style.marginTop = "2px"
		ol.style.marginLeft = "2px"
		ta.style.height = this.height
		ol.style.height = this.height
		ta.oninput = ()=>{
			ol.innerText = event.target.value
		}
		ta.onscroll = ()=>{
			ol.scrollTop = event.target.scrollTop
			ol.scrollLeft = event.target.scrollLeft
		}
	}
}
//test
var ee = new Leditor({
	source: document.getElementById("demo"),
	value: "hello world",
	height: "100px",
})
ee.start()