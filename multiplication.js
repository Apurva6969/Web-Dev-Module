function printTable() {
    let n = document.getElementById("tableNum").value;
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + (n * i) + "\n";
    }
    document.getElementById("output").innerText = result;
}
