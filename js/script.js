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