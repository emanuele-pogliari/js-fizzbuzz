const gridElement = document.querySelector("#grid");

for (let i = 1; i <= 100; i++) {
    const newElement = document.createElement("div");
    gridElement.append(newElement);
    newElement.className = "square";
    newElement.innerHTML = i;
    console.log(i)
    if (i % 3 === 0) {
        newElement.innerText = "fizz";
        newElement.className += " cass";
        newElement.style.color = "blue";

    }
    else if (i % 5 === 0) {
        newElement.innerText = "buzz";
        newElement.style.color = "yellow";
    }
    if (i % 5 === 0 && i % 3 === 0) {
        newElement.innerText = "s. francisco";
        newElement.style.color = "red";
    }
}