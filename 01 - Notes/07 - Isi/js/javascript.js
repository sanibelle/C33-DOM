window.onload = function() {
	document.getElementById("memo-input").onkeyup = function(e) {
		if (e.key == 'Enter') {
			let node = document.createElement('div') // anciennement appelé nouvelElement
			let textContent = document.createTextNode(this.value)// anciennement appelé textNode
			node.appendChild(textContent)
			node.setAttribute("class", "memo-entry")
			
			document.getElementById('memo-list').appendChild(node)
			this.value = ""

			
			// fonctionne
			node.onclick = () => {
				node.remove()
			}
			
			// Fonctionne aussi
			// node.onclick = function() {
			// 	node.remove()
			// 	// ou this.remove()
			// }
			
			// XXXXXXX Supprime le input
			// node.onclick = () => {
			// 	this.remove()
			// }
		}
	}
}