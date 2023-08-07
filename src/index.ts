let a: string = "apple";
console.log("ssss");

class Live2 {
    #name // 私有變數
    constructor (name: string) {
        this.#name = name
    }
}

const live2 = new Live2("apple")
// live2.#name