const saida=document.querySelector("#saida");
const ol=document.querySelector(".ol");
for (let i=0;i<=5;i++){
  saida.innerHTML+=`${i} `;
  ol.innerHTML+=`<li>Outro Item - ${i}</li>`
}
