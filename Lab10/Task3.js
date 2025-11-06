function addNewClass() {
  let para = document.getElementById("myPara");
  const style = document.createElement("style");
  style.innerHTML = `
    .secondClass {
      background-color: lightgreen;
      font-weight: bold;
      border: 2px solid black;
      padding: 5px;
    }
  `;
  document.head.append(style);
  para.classList.add("secondClass");
  console.log("New class added!");
}