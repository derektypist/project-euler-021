// Set Up Global Array
const DIVISOR_SUMS = Array(10000).fill(0);

// Function to Display Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if input is valid
    if (isNaN(num) || num.toString().length == 0 || num<2 || num>10000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 10000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of all the amicable numbers less than ${num} is ${sumAmicableNum(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Return the Sum of Divisors
function sumDivisors(n) {
    if (DIVISOR_SUMS[n]) return DIVISOR_SUMS[n];
    let sum = 1;
    let sqrt = Math.floor(Math.sqrt(n));
    for (let i=2;i<sqrt;i++) {
        if (n%i===0) sum += i + n/i;
    }
    if (n%sqrt===0) sum += sqrt;
    return DIVISOR_SUMS[n] = sum;
}