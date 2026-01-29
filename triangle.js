function printTriangle() {
    let n = document.getElementById("rows").value;
    let stars = "";
    let output = "";
    for (let i = 1; i <= n; i++) {
        stars += "*";
        output += stars + "\n";
    }
    document.getElementById("pattern").innerText = output;
}
