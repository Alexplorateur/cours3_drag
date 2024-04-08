// Déclarer la classe

class Drag{

    // Propriétés
    balise = null
    dragStarted = false
    decalageX = 0
    decalageY = 0


    // Construteur
    constructor(balise){
        this.balise = balise

        this.balise.addEventListener("mousedown", e => {
            e.preventDefault()
            this.startDrag()
        })
        
        document.addEventListener("mouseup", e => {
            e.preventDefault()
            this.endDrag()
        })

        document.addEventListener("mousemove", e => {
            this.dragEnCours(e.movementX, e.movementY)
        })

    }

    // Méthodes

    startDrag() {
        console.log("Drag commencé!")
        this.dragStarted = true
    }

    endDrag() {
        console.log("Drag terminé!!")
        this.dragStarted = false
    }

    dragEnCours(x,y) {
        if(this.dragStarted === true){
            this.decalageX += x
            this.decalageY += y
            this.balise.style.transform = `translate(${this.decalageX}px, ${this.decalageY}px)`
        }
    }

}