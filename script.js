const items = [];
const list = document.getElementById("list");
const count = document.getElementById("count");
const input = document.getElementById("item");
const warning = document.getElementById("warning");

function renderList() {
  list.innerHTML = "";

  items.forEach(function (item, index) {
    const li = document.createElement("li");
    li.textContent = item + " ";

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click", function () {
      items.splice(index, 1);
      warning.textContent = "";
      renderList();
    });

    li.appendChild(remove);
    list.appendChild(li);
  });

  count.textContent = "Total items: " + items.length;
}

document.getElementById("add").addEventListener("click", function () {
  const value = input.value.trim();

  if (!value) {
    warning.textContent = "Please enter an item.";
    return;
  }

  const alreadyExists = items.some(function (item) {
    return item.toLowerCase() === value.toLowerCase();
  });

  if (alreadyExists) {
    warning.textContent = "This item already exists in the list.";
    return;
  }

  items.push(value);
  input.value = "";
  warning.textContent = "";
  renderList();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("add").click();
  }
});

renderList();
