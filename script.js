class Scroll {
    constructor(obj){
        if (typeof obj.el == "string") {
            this.el = document.querySelector(obj.el);
        } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие класса в предках
            this.el = obj.el
        }
        this.el.style.position = "fixed"
        this.top = obj.top;
        this.el.style.top = this.top + "px"
        this.unit = obj.unit
        window.addEventListener("scroll", ()=>{this.scroll()})
    }
    scroll(){
        // window.pageYOffset - хранит расстояние смещения от верхнего края страницы
        console.log(window.pageYOffset);
        if (this.top - window.pageYOffset > 0) {
            this.el.style.top = this.top - window.pageYOffset + "px"
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber(){
        if (this.unit == "px") {
            return this.top >= 0 ? this.top : 0;
        }
    }
}

const myScroll = new Scroll({
    el: ".header__nav",
    top: 0,
    unit: "px"
})
console.log(myScroll);


class Jump {
    constructor(object){
        if (typeof object.element == "string") {
            this.element = document.querySelector(object.element);
        } else if (object.element instanceof HTMLElement) {
            this.element = object.element
        }
        this.element.addEventListener("mouseover", ()=>{
            this.parent = this.element.closest(".header");
            this.height = this.parent.clientHeight - this.element.clientHeight;
            this.width = this.parent.clientWidth - this.element.clientWidth;
            this.element.style.marginTop = Math.floor(Math.random() * this.height) + "px";
            this.element.style.marginLeft = Math.floor(Math.random() * this.width) + "px";
        })
    }
}

const myJump = new Jump({
    element: ".header__content"
})
console.log(element);

