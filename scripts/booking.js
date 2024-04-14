/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let chosenDays = new Set();
let dayElements = document.querySelectorAll(".day-selector li");
let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");
let costDisplay = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayElements.forEach(day => {
    day.addEventListener("click", function() {
        if (chosenDays.has(day.id)) {
            chosenDays.delete(day.id); 
            day.classList.remove("clicked"); 
        } else {
            chosenDays.add(day.id); 
            day.classList.add("clicked"); 
        }
        updateCost(); 
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener("click", function() {
    chosenDays.clear();
    dayElements.forEach(day => day.classList.remove("clicked"));
    updateCost()
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener("click", function() {
    costPerDay = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    updateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", function() {
    costPerDay = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    updateCost()
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function updateCost() {
    let totalCost = chosenDays.size * costPerDay; 
    costDisplay.textContent = `${totalCost}`; 
}
