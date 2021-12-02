const table = document.querySelector("#newWorld");

const inventory = [];
for (let i = 0; i < 20; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < 20; j++) {
    const td = document.createElement("td");
    const div = document.createElement("div");
    div.id = "x:" + j + "_" + "y:" + i;
    div.className = "block";
    td.appendChild(div);
    div.sy;
    div.addEventListener("click", () => {
      if (div.classList.value !== "block") {
        inventory.push(div.classList.value);
        console.log(div.classList.value);
        console.log(inventory);
        div.classList = "";
      }
    });
    tr.appendChild(td);
    if (i === 15) {
      div.className = "grass";
      div.style.cursor = "pointer";
    }
    if (i >= 16) {
      div.className = "dirt";
      div.style.cursor = "pointer";
    }
  }
}

// const matirials = {
//   let cloud = document.className = "cloud"
// }

// console.log(document.getElementById("x:8_y:3"));
document.getElementById("x:3_y:7").id = "cloud";
document.getElementById("x:4_y:6").id = "cloud";
document.getElementById("x:4_y:7").id = "cloud";
document.getElementById("x:5_y:6").id = "cloud";
document.getElementById("x:5_y:7").id = "cloud";
document.getElementById("x:6_y:5").id = "cloud";
document.getElementById("x:6_y:6").id = "cloud";
document.getElementById("x:6_y:7").id = "cloud";
document.getElementById("x:7_y:6").id = "cloud";
document.getElementById("x:7_y:7").id = "cloud";
document.getElementById("x:7_y:8").id = "cloud";
document.getElementById("x:8_y:7").id = "cloud";
document.getElementById("x:8_y:8").id = "cloud";
document.getElementById("x:9_y:6").id = "cloud";
document.getElementById("x:9_y:7").id = "cloud";
document.getElementById("x:10_y:6").id = "cloud";
document.getElementById("x:10_y:7").id = "cloud";

document.getElementById("x:16_y:14").className = "oak";
document.getElementById("x:16_y:13").className = "oak";
document.getElementById("x:16_y:12").className = "oak";

document.getElementById("x:16_y:11").className = "leaves";
document.getElementById("x:16_y:10").className = "leaves";
document.getElementById("x:16_y:9").className = "leaves";
document.getElementById("x:15_y:11").className = "leaves";
document.getElementById("x:15_y:10").className = "leaves";
document.getElementById("x:15_y:9").className = "leaves";
document.getElementById("x:17_y:11").className = "leaves";
document.getElementById("x:17_y:10").className = "leaves";
document.getElementById("x:17_y:9").className = "leaves";
document.getElementById("x:3_y:14").className = "leaves";
document.getElementById("x:2_y:14").className = "leaves";
document.getElementById("x:4_y:14").className = "leaves";
document.getElementById("x:3_y:13").className = "leaves";

document.getElementById("x:13_y:14").className = "cobble";
document.getElementById("x:14_y:14").className = "cobble";
document.getElementById("x:19_y:14").className = "cobble";
