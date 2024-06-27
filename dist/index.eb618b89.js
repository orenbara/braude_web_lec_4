const $content = document.querySelector(".content");
// Function to Generate the HTML segments for the index.html web page
// const renderBlock = (data, type) => {
//   switch (type) {
//     case "title":
//       return row(col(`<h1>${data}</h1>`))
//       //return `<div class=row><div class="col-md"><h1>${data}</h1></div></div>`
//     case "text":
//       return row(col(`<p>${data}</p>`))
//       //return `<div class="row"><div class="col-md"><p>${data}</p></div></div>`
//     case "columns":
//       return row(data.map(item=>col(item)).join(""))
//       // return `<div class="row">${data.map(item => `<div class="col-md">${item}</div>`).join("")}</div>`
//     case "image":
//       return row(col(`<img src="${data}" alt="braude">`))
//       //return `<div class="row"><div class="col-md"><img src="${data}" alt="braude"></div></div>`
//   }
// }
const contentHtml = model.map((b)=>b.toHtml()).join("");
// Execute the block generation and add it to the DOM
$content.insertAdjacentHTML("beforeend", contentHtml);

