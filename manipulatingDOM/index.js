        // // 1. We store a reference to the element in the variable
        // const headingElement = document.querySelector("h1");

        // // 2. We can now interact with the element, e.g. modify its text content
        // headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";

// document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

// const body = document.querySelector("body");
// const recipeListEl = document.createElement("ol"); // Create an ordered list element

// const stepOneEl = document.createElement("li"); //Creat a new list item element
// stepOneEl.innerText = "Toast sone bread"; //Update the test of the list item
// recipeListEl.appendChild(stepOneEl); //Add the item as a child of the recipe list

// const stepTwoEl = document.createElement("li"); //repeat for the second
// stepTwoEl.innerText = "Spread butter on the toast";
// recipeListEl.appendChild(stepTwoEl);

// body.appendChild(recipeListEl); //Add the recipe list onto the body of the page

// // document.querySelector("p").textContent = "Your button click worked!", //this would create a button to click to apply your changes

// // --- Second recipe ---

// //Create a paragraph for the recipe title
// const recipe2Title = document.createElement("p");
// recipe2Title.innerText = "Simple Pancakes";

// //Create an ordered list for the steps
// const recipe2List = document.createElement("ol");

// const recipe2Step1 = document.createElement("li");
// recipe2Step1.innerText = "Sift flour into a large bowl";
// recipe2List.appendChild(recipe2Step1);

// const recipe2Step2 = document.createElement("li");
// recipe2Step2.innerText = "Make a well in the flour and add your eggs and milk. Whisk your foulr into the wet mix slowly"
// recipe2List.appendChild(recipe2Step2);

// const recipe2Step3 = document.createElement("li");
// recipe2Step3.innerText = "Gently heat oil in a large non-stick frying pan";
// recipe2List.appendChild(recipe2Step3);

// const recipe2Step4 = document.createElement("li");
// recipe2Step4.innerText = "Pour half a ladel of batter onto the hot pan";
// recipe2List.appendChild(recipe2Step4);

// const recipe2Step5 = document.createElement("li");
// recipe2Step5.innerText = "When bubbles start to appear on the surface of the pancake, flip to cook the other side";
// recipe2List.appendChild(recipe2Step5);

// const recipe2Step6 = document.createElement("li");
// recipe2Step6.innerText = "The second side should take approximately 1 minute to cook, then remove your pancake and start the next until your batter us used up!";
// recipe2List.appendChild(recipe2Step6);

// body.appendChild(recipe2Title);
// body.appendChild(recipe2List);

        // Refactored
        
document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

const body = document.querySelector("body");

function addRecipeToPage(title, steps) {
  // Create and set the recipe title
  const recipeTitle = document.createElement("p");
  recipeTitle.innerText = title;

  // Create the ordered list for the steps
  const recipeList = document.createElement("ol");

  // Loop through the steps array and add each as a list item
  steps.forEach(step => {
    const stepEl = document.createElement("li");
    stepEl.innerText = step;
    recipeList.appendChild(stepEl);
  });

  // Append the title and the list to the page
  body.appendChild(recipeTitle);
  body.appendChild(recipeList);
}

// Example usage:
addRecipeToPage("Buttered Toast", [
  "Toast some bread",
  "Spread butter on the toast"
]);

addRecipeToPage("Simple Pancakes", [
  "Sift flour into a large bowl",
  "Make a well in the flour and add your eggs and milk. Whisk your flour into the wet mix slowly",
  "Gently heat oil in a large non-stick frying pan",
  "Pour half a ladle of batter onto the hot pan",
  "When bubbles start to appear on the surface of the pancake, flip to cook the other side",
  "The second side should take approximately 1 minute to cook, then remove your pancake and start the next until your batter is used up!"
]);
    

// Add a joke (Fetch and .then practice)
const URL = "https://official-joke-api.appspot.com/random_joke";

fetch(URL)
    .then((response) => response.json()) //get JSON data from response
    .then((jokeData) => {
      const jokeText = document.createElement("p"); //new paragraph for joke
      jokeText.textContent = jokeData.setup + " " + jokeData.punchline; //format the joke text
      body.appendChild(jokeText); //add joke to page body
    });