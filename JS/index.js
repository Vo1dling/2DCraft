const table = document.querySelector("#newWorld");
const pickaxe = document.querySelector(".pickaxe");
const axe = document.querySelector(".axe");
const shovel = document.querySelector(".shovel");
const storage = document.querySelector(".inside-inventory");
const invButton = document.querySelector(".inventory");
const landingPage = document.querySelector(".landing-page");
const materials = {
  wood: "oak",
  clouds: "cloud",
  dirt: "dirt",
  grass: "grass",
  cloud: "cloud",
  leaves: "leaves",
  cobble: "cobble",
};
const inventory = [];

let pickIsSelected = false;
pickaxe.addEventListener("click", () => {
  pickIsSelected = true;
  axeIsSelected = false;
  shovelIsSelected = false;
  InventoryIsSelected = false;
});
let axeIsSelected = false;
axe.addEventListener("click", () => {
  axeIsSelected = true;
  pickIsSelected = false;
  shovelIsSelected = false;
  InventoryIsSelected = false;
});
let shovelIsSelected = false;
shovel.addEventListener("click", () => {
  shovelIsSelected = true;
  pickIsSelected = false;
  axeIsSelected = false;
  InventoryIsSelected = false;
});
let InventoryIsSelected = false;
invButton.addEventListener("click", () => {
  InventoryIsSelected = true;
  shovelIsSelected = false;
  pickIsSelected = false;
  axeIsSelected = false;
});

const mineBlock = (e) => {
  if (e.target.classList.value !== "block") {
    if (pickIsSelected && e.target.classList[1] == materials.cobble) {
      inventory.push(e.target.classList.value);
      console.log(inventory);
      e.target.classList = "";
      storage.classList = "";
      storage.classList.add(
        "inside-inventory",
        inventory[inventory.length - 1].split(" ")[1]
      );
    } else if (
      axeIsSelected &&
      (e.target.classList[1] == materials.wood ||
        e.target.classList[1] == materials.leaves)
    ) {
      inventory.push(e.target.classList.value);
      e.target.classList = "";
      storage.classList = "";
      storage.classList.add(
        "inside-inventory",
        inventory[inventory.length - 1].split(" ")[1]
      );
    } else if (
      shovelIsSelected &&
      (e.target.classList[1] == materials.dirt ||
        e.target.classList[1] == materials.grass)
    ) {
      inventory.push(e.target.classList.value);
      e.target.classList = "";
      storage.classList = "";
      storage.classList.add(
        "inside-inventory",
        inventory[inventory.length - 1].split(" ")[1]
      );
    }
  }
};

const generateWorld = () => {
  inventory.length = 0;
  table.innerHTML = "";
  landingPage.style.display = "none";
  for (let i = 0; i < 20; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < 20; j++) {
      const td = document.createElement("td");
      const div = document.createElement("div");
      div.id = j + "," + i;
      div.className = "block";
      td.appendChild(div);
      div.addEventListener("click", mineBlock);
      tr.appendChild(td);
      if (i === 15) {
        div.className = "block grass";
      }
      if (i >= 16) {
        div.className = "block dirt";
      }
    }
  }
  // cobble
  create(13, 14, "cobble");
  create(14, 14, "cobble");
  create(19, 14, "cobble");
  // wood
  create(16, 14, "wood");
  create(16, 13, "wood");
  create(16, 12, "wood");
  create(4, 14, "wood");
  // leaves
  create(16, 11, "leaves");
  create(16, 10, "leaves");
  create(16, 9, "leaves");
  create(15, 11, "leaves");
  create(15, 10, "leaves");
  create(15, 9, "leaves");
  create(17, 11, "leaves");
  create(17, 10, "leaves");
  create(17, 9, "leaves");
  create(4, 14, "leaves");
  create(3, 14, "leaves");
  create(5, 14, "leaves");
  create(4, 13, "leaves");
  //cloud
  create(3, 7, "cloud");
  create(4, 6, "cloud");
  create(4, 7, "cloud");
  create(5, 6, "cloud");
  create(5, 7, "cloud");
  create(6, 5, "cloud");
  create(6, 6, "cloud");
  create(6, 7, "cloud");
  create(7, 6, "cloud");
  create(7, 7, "cloud");
  create(7, 8, "cloud");
  create(8, 7, "cloud");
  create(8, 8, "cloud");
  create(9, 6, "cloud");
  create(9, 7, "cloud");
  create(10, 6, "cloud");
  create(10, 7, "cloud");
};

const create = (x, y, type) => {
  if (type === "cobble") {
    document.getElementById(`${x},${y}`).classList.add(materials.cobble);
  } else if (type === "wood") {
    document.getElementById(`${x},${y}`).classList.add(materials.wood);
  } else if (type === "leaves") {
    document.getElementById(`${x},${y}`).classList.add(materials.leaves);
  } else if (type === "cloud") {
    document.getElementById(`${x},${y}`).id = materials.cloud;
  } else if (type === "dirt") {
    document.getElementById(`${x},${y}`).classList.add(materials.dirt);
  } else if (type === "grass") {
    document.getElementById(`${x},${y}`).classList.add(materials.grass);
  }
};

const toolButtons = document.querySelectorAll("nav div");
toolButtons.forEach((tool) => {
  tool.addEventListener("click", (e) => {
    toolButtons.forEach((tool) => {
      tool.id = "";
    });
    tool.id = "selected";
  });
});

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", generateWorld);

const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", generateWorld);

const placeBlock = (e) => {
  if (InventoryIsSelected) {
    let input = e.target.id;
    let [x, y] = input.split(",");
    const currBlock = inventory[inventory.length - 1];
    if (currBlock == "block cobble") {
      create(x, y, "cobble");
      console.log("placed");
      inventory.pop();
    }
    if (currBlock == "block dirt") {
      create(x, y, "dirt");
      console.log("placed");
      inventory.pop();
    }
    if (currBlock == "block oak") {
      create(x, y, "wood");
      console.log("placed");
      inventory.pop();
    }
    if (currBlock == "block leaves") {
      create(x, y, "leaves");
      console.log("placed");
      inventory.pop();
    }
    if (currBlock == "block grass") {
      create(x, y, "grass");
      console.log("placed");
      inventory.pop();
    }
  }
};
table.addEventListener("click", placeBlock);
