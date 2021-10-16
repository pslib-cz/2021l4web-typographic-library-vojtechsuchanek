class content {
    constructor(selector, selectors) {
        this.selector = selector
        this.selectors = selectors
        this.list = []
        this.run()
        this.create()
    }
    run() {
        for (let i = 0; i < this.selectors.length; i++) {
            const selector = this.selectors[i];
            const level = i
            for (let i = 0; i < selector.length; i++) {
                //console.log(selector[i])
                let text = selector[i].innerText;
                let id = "";
                let heigh = selector[i].getBoundingClientRect().top;
                this.list.push({ text, id, heigh, level, selector: selector[i] })
            }
        }
        this.list = this.list.slice(0);
        this.list.sort(function (a, b) {
            return a.heigh - b.heigh;
        });
        //console.log(this.list);
    }
    create() {
        let li = "";
        for (let i = 0; i < this.list.length; i++) {
            li += `<li class="content--${this.list[i].level}"><a>${this.list[i].text}</a></li>`
        }
        let out = `<ul class="content__list">${li}</ul>`;
        //console.log(this.selector)
        this.selector.innerHTML += out
        for (let i = 0; i < this.list.length; i++) {
            this.selector.getElementsByTagName("li")[i].addEventListener("click", e => {
                //console.log("cs")
                let oldId = this.list[i].selector.id
                this.list[i].selector.id = `content--scroll${i}`
                location.href = "#";
                location.href = `#content--scroll${i}`;
                this.list[i].selector.id = oldId
            })

        }
    }
}