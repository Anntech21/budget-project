let person = '';
let budget = 0;
let needs = 0;
let savings = 0;
let wants = 0;
let output = ''
let outputNeeds = ''
let outputWants = ''
let outputSavings = ''
let food = ""
let mortgage = ''
let utility = ''
let insurance = ''
let travel = ''
let miscellaneous = ''
let funds = ''

// button variable
let beginButton = document.getElementById("begin-button")
let inputNeedsButton = document.getElementById('inputNeedsButton')
let emergencyButton = document.getElementById('emergencyFundsButton')
let startOverButton = document.getElementById('startOver')

// buttons 
beginButton.addEventListener("click", mybudget);
inputNeedsButton.addEventListener('click', inputNeeds);
emergencyButton.addEventListener("click", emergencyFunds);
startOverButton.addEventListener('click', startOver);

function mybudget() {
    person = prompt('Enter your Login ID:')
    budget = prompt('Enter your monthly salary:')
    console.log(budget)
    needs = budget * 0.5
    savings = budget * 0.2
    wants = budget * 0.3

    outputNeeds += `Needs: $ ${needs}`
    outputSavings += `savings: $ ${savings}`
    outputWants += `wants: $ ${wants}`
    
    document.getElementById('part1').textContent = `Hello ${person}, your monthly budget for this month is:`
    document.getElementById('p1').textContent =  `Needs: $ ${needs},`
    document.getElementById('p2').textContent = `Savings: $ ${savings},`
    document.getElementById('p3').textContent = `Wants: $ ${wants}`
}

function inputNeeds() {
    food = prompt("Budget for food?")
    mortgage = prompt("How much is your Mortgage?")
    utility = prompt('What is your total Utility come upto?')
    insurance = prompt('How much does you insurance cost?')
    travel = prompt('How much do you spend on travel')
    miscellaneous = prompt('Miscellaneous Expenses?')

    needs = needs - food - mortgage - utility - insurance - travel - miscellaneous

    document.getElementById('part2').textContent = `Remaining amount for need:${needs}`
    if (needs < 0) {
        document.getElementById('part2').textContent = `you are $${needs} over budget `
        needs = wants - needs

    } else {
        document.getElementById('part2').textContent = `Budget spent on:`
    document.getElementById('p4').textContent =  `Needs: $ ${needs},`
    document.getElementById('p5').textContent = `Savings: $ ${savings},`
    document.getElementById('p6').textContent = `Wants: $ ${wants}`
    document.getElementById('p7').textContent = `You are within your Budget.`
    }

}
function emergencyFunds() {
    document.getElementById('part3_B').textContent = ""
    funds = prompt('how much would you like to put in your emergency funds?');
    if (funds > savings) {
        funds = prompt('You will have more than 3 months of emergency funds.');
        savings = savings - funds
        document.getElementById('part3').textContent = `Funds:$${funds}`
        document.getElementById('p8').textContent =  `Needs: $ ${needs},`
        document.getElementById('p9').textContent = `Savings: $ ${savings},`
        document.getElementById('p10').textContent = `Wants: $ ${wants}`
    } else {

        savings = savings - funds
        document.getElementById('part3').textContent = `Funds:$${funds}`
        document.getElementById('p11').textContent =  `Needs: $ ${needs},`
        document.getElementById('p12').textContent = `Savings: $ ${savings},`
        document.getElementById('p13').textContent = `Wants: $ ${wants}`

    }
}

function startOver() {
    person = '';
    budget = 0;
    needs = 0;
    savings = 0;
    wants = 0;
    output = ''
    outputNeeds = ''
    outputWants = ''
    outputSavings = ''
    food = ""
    mortgage = ''
    utility = ''
    insurance = ''
    travel = ''
    essentials = ''
    funds = ''
    document.getElementById('part1').textContent =""
    document.getElementById('part2').textContent =""
    document.getElementById('part3_B').textContent ="It's important to put money towards your emergency funds.This will come from the savings portion"
    document.getElementById('part3').textContent =""

}

// 1. How many child nodes does the body element have in this document?

// 2. What is the relationship between the div with the class of todo-section and the list element with the text of "Reading"?

// 3. What is the relationship between the div with the class of image-gallery and the html element?