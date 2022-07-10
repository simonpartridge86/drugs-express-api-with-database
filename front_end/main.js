const getAllDrugs = document.querySelector(".get-all-drugs");
let displayContent = document.querySelector(".display-content");

getAllDrugs.addEventListener("click", async function () {
  let response = await fetch("http://localhost:3000/drugs");
  let data = await response.json();
  console.log(data.payload);
  displayContent.innerHTML = "";
  // let v = displayContent.appendChild("div");
  // console.log(v);
  // v.innerText = data.payload;
  data.payload.forEach(renderDrug);
})

function renderDrug(drug) {
  const createdDrug = createUserView(drug);
  displayContent.appendChild(createdDrug);
}

function createUserView(drug) {
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.innerText = `#${drug.id} ${drug.drug_name}`;
  const p1 = document.createElement("p");
  p1.innerText = `Brand name: ${drug.brand_name}`;
  const p2 = document.createElement("p");
  p2.innerText = `Company: ${drug.company}`;
  const p3 = document.createElement("p");
  p3.innerText = `Cat. number: ${drug.cat_number}`;
  const p4 = document.createElement("p");
  p4.innerText = `Dose cost: ${drug.dose_cost}`;
  article.appendChild(h2);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(p4);
  return article;
}