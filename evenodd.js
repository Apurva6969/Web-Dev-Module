function checkEvenOdd() {
    let n = document.getElementById("num").value;
    if (n % 2 === 0) {
        document.getElementById("result").innerText = n + " is an even number.";
    } else {
        document.getElementById("result").innerText = n + " is an odd number.";
    }
}
