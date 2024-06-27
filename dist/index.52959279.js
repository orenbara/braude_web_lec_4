//  import { TextBlock, TitleBlock, columnsBlock, imageBlock } from "../classes/block"
const tmpStr = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// Model for defining html block
// const model = [
//   {
//     type: "title",
//     data: "Hello Braude!"
//   },
//   {
//     type: "text",
//     data: tmpStr,
//   },
//   {
//     type: "columns",
//     data: [tmpStr, tmpStr, tmpStr]
//   },
//   {
//     type: "image",
//     data: "./assets/braude.jpg"
//   }
// ]
const model = [
    new TitleBlock("Hello Braude!!"),
    new TextBlock(tmpStr),
    new columnsBlock([
        tmpStr,
        tmpStr,
        tmpStr
    ]),
    new imageBlock("./assets/braude.jpg")
];

