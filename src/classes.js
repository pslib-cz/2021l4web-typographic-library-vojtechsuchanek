
class content {
    constructor(selector, selectors) {
        this.selector = selector
        this.selectors = selectors
    }
    run() {
        for (let i = 0; i < this.selectors.length; i++) {
            const selector = this.selectors[i];
            const level = i
            for (let i = 0; i < selector.length; i++) {
                console.log(selector[i])
                let text = selector[i].innerText;
                let id = "";
                let heigh = selector[i].getBoundingClientRect().top;
                list.push({ text, id, heigh, level, selector: selector[i] })
            }
        }
        list = list.slice(0);
        list.sort(function (a, b) {
            return a.heigh - b.heigh;
        });
        console.log(list);
    }
    create() {
        let li = "";
        for (let i = 0; i < list.length; i++) {
            li += `<li class="content--${list[i].level}">${list[i].text}</li>`
        }
        let out = `<ul class="content__list">${li}</ul>`;
        console.log(this.selector)
        this.selector.innerHTML += out
        for (let i = 0; i < list.length; i++) {
            this.selector.getElementsByTagName("li")[i].addEventListener("click", e => {
                //console.log("cs")
                let oldId = list[i].selector.id
                list[i].selector.id = `content--scroll${i}`
                location.href = "#";
                location.href = `#content--scroll${i}`;
                list[i].selector.id = oldId
            })

        }
    }
}



window.addEventListener('DOMContentLoaded', () => {
    let contentWindow = new content(document.getElementById("content"), [document.getElementsByTagName("h1"), document.getElementsByTagName("h2"), document.getElementsByTagName("h3")])
    contentWindow.run()
    contentWindow.create()
});
let list = []