window.addEventListener('DOMContentLoaded', e => {
    let domElements = document.getElementsByTagName("body")[0].getElementsByTagName("*");
    for (let i = 0; i < domElements.length; i++) {
        //const element = domElements[i];
        let element = new Element(domElements[i])
        element.scan()
    }
});

class Element {
    constructor(element) {
        this.element = element;
        this.classes = element.classList;
    }
    scan() {
        console.log(this.classes)
        for (let i = 0; i < this.classes.length; i++) {
            const elementClass = this.classes[i];
            if (elementClass.includes("w-"))
                this.width(elementClass)
        }
    }
    width(elementClass) {
        console.log(elementClass)
    }
}

let classes = [];