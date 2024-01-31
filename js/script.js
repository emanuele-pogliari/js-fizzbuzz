const gridElement = document.querySelector("#grid");

for (let i = 1; i <= 100; i++) {
    setTimeout(function () {
        const newElement = document.createElement("div");
        gridElement.append(newElement);
        newElement.className = "square";
        newElement.innerHTML = i;
        newElement.style.fontSize = "20px";
        newElement.style.backgroundColor = "#1389B2";

        if (i % 3 === 0) {
            newElement.innerText = "Fizz";
            newElement.style.backgroundColor = "#0CD6A1";
        }
        else if (i % 5 === 0) {
            newElement.innerText = "Buzz";
            newElement.style.backgroundColor = "#FFD166";
        }
        if (i % 5 === 0 && i % 3 === 0) {
            newElement.innerText = "FizzBuzz";
            newElement.style.backgroundColor = "#F0466F";
        }
    }, i * 250) //this calculation delays every single cicle by 100ms. So, every square will appears after that time.
}