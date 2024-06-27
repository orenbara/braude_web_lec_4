class Block {
    constructor(type, data){
        this.type = type.data;
        this.data = data;
    }
    toHtml() {
        // Eaach extending class must implement toHTML - or else it will recive an error
        throw "toHTML function must be implemented";
    }
}
class TitleBlock extends Block {
    constructor(data){
        super("title", data);
    }
    toHtml() {
        return row(col(`<h1>${this.data}</h1>`));
    }
}
class TextBlock extends Block {
    constructor(data){
        super("text", data);
    }
    toHtml() {
        return row(col(`<p1>${this.data}</p1>`));
    }
}
class columnsBlock extends Block {
    constructor(data){
        super("columns", data);
    }
    toHtml() {
        return row(this.data.map((item)=>col(item)).join(""));
    }
}
class imageBlock extends Block {
    constructor(data){
        super("image", data);
    }
    toHtml() {
        return row(col(`<img src="${this.data}" alt="braude"></img>`));
    }
}

