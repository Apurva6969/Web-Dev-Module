let box = document.getElementById("colorBox");
let colorInput = document.getElementById("colorInput");
let resetBtn = document.getElementById("resetBtn");
colorInput.addEventListener("input", function () {
    box.style.backgroundColor = colorInput.value;
});
resetBtn.addEventListener("click", function () {
    box.style.backgroundColor = "lightgray";
});
