import {row, col} from "../scripts/utils.js"

class Block{
  constructor(type, data){
    this.type = type.data
    this.data = data
  }

  toHtml(){
    // Eaach extending class must implement toHTML - or else it will recive an error
    throw('toHTML function must be implemented')
  }
}


export class TitleBlock extends Block{
  constructor(data){
    super('title', data)
  }

  toHtml(){
    return row(col(`<h1>${this.data}</h1>`))
  }
}

export class TextBlock extends Block{
  constructor(data){
    super('text', data)
  }

  toHtml(){
    return row(col(`<p1>${this.data}</p1>`))
  }
}


export class columnsBlock extends Block{
  constructor(data){
    super('columns', data)
  }

  toHtml() {
    return row(this.data.map((item) => col(item)).join(""));
  }
}


export class imageBlock extends Block{
  constructor(data){
    super('image', data)
  }

  toHtml() {
    return row(col(`<img src="${this.data}" alt="braude" class="img-fluid">`));
  }
}
