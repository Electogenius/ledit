//eeeeeeeeeeeeeeeeee
var s = document.createElement("style")
s.innerHTML = `
div.leditthing{
	color: white;
	display: block;
	position: relative;
	overflow: scroll;
	white-space: nowrap;
	border-radius: 5px;
	background-color: #111;
	padding: 0px
}
textareakinda.leditthing{
	display: block;
	opacity: 0.11;
	color: rgba(0,0,0,0);
	color: #00f;
	z-index: 10;
	width: 95vw;
	white-space: nowrap;
	padding: 0px;
	caret-color: white;
	overflow: auto;
	outline: none;
	background: none;
	font-family: monospace;
	user-select: none;
}
.function{
	color: #07f
}
.basic-string{
	color: #af3
}
.basic-number{
	color: red
}
.math{
	color: #f50
}
span.tab{
	width: 300px;
}
span.tab:after{
	content: "aaa"
}
`
document.head.appendChild(s)
var Ledit = {}
Ledit.or = class {
	constructor(obj) {
		var defaults = {
			font: "monospace",
			source: document.body,
			value: "",
			fontSize: "15px",
			locked: false,
			language:"text"
		}
		for (var prop in obj) {
			defaults[prop] = obj[prop]
		}
		for (var prop in defaults) {
			this[prop] = defaults[prop]
		}
	}
	start() {
		var ta = document.createElement("textareakinda")
		var ol = document.createElement("div")
		ol.classList.add("leditthing")
		ta.classList.add("leditthing")
		ta.innerText = this.value
		this.textarea = ta
		this.overlay = ol
		this.source.appendChild(ta)
		this.source.appendChild(ol)
		ta.style.position = "absolute"
		ta.style.display = "block"
		ta.style.fontFamily = this.font
		ol.style.fontFamily = this.font
		//ta.style.padding = "0px"
		ta.style.fontSize = this.fontSize
		ol.style.fontSize = this.fontSize
		//ta.style.border = "none"
		ol.style.marginTop = "2px"
		ol.style.marginLeft = "2px"
		ta.style.height = this.height
		ol.style.height = this.height
		ta.autocapitalize = "off"
		ta.autocorrect = "off"
		ta.autocomplete = "off"
		ta.spellcheck = false
		ta.contentEditable = !this.locked
		//cursor
		var cursor = document.createElement("cursor")
		var latested = ta.innerText
		var addition = ""
		ta.oninput = (ev) => {
			Rainbow.color(ta.innerText, this.language, function(c) {
				ol.innerHTML = c.replace(/\n/g, "<br>")
			})
		}
		ta.onscroll = () => {
			ol.scrollTop = event.target.scrollTop
			ol.scrollLeft = event.target.scrollLeft
		}
		Rainbow.color(ta.innerText, this.language, function(c) {
			ol.innerHTML = c.replace(/\n/g, "<br>").replace(/\t/g, "<span class=tab>h</span>")
		})
	}
}