window.onload = function() {
    document.getElementById("memo-input").onkeyup = e => {
        if (e.key == 'Enter') {
            let nouvelElement = document.createElement('div')
            let texteNode = document.createTextNode(document.getElementById("memo-input").value)
            let maListe = document.getElementById("memo-list")
            maListe.appendChild(nouvelElement)
            nouvelElement.appendChild(texteNode) // ajouter un element fils avec la valuer de texte Node
            nouvelElement.setAttribute("class", "memo-entry")  // pouyr ajouter une classe ou id 

            this.value=""
        }
	}
}