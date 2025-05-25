// document.addEventListener("DOMContentLoaded", () => {

// // 1. We store a reference to the element in the variable
//   const headingElement = document.querySelector("h1");

//   // 2. We can now interact with the element, e.g. modify its text content
//   headingElement.textContent = "🥗 Zoe's Cooking Blog! 🥙";

// const body = document.querySelector("body");
// const recipeListEl = document.createElement("ol"); // Create an ordered list element

// const stepOneEl = document.createElement("li"); //Creat a new list item element
// stepOneEl.innerText = "Toast some bread"; //Update the test of the list item
// recipeListEl.appendChild(stepOneEl); //Add the item as a child of the recipe list

// const stepTwoEl = document.createElement("li"); //repeat for the second
// stepTwoEl.innerText = "Spread butter on the toast";
// recipeListEl.appendChild(stepTwoEl);

// body.appendChild(recipeListEl); //Add the recipe list onto the body of the page

// // --- Second recipe ---

// //Create a paragraph for the recipe title
// const recipe2Title = document.createElement("p");
// recipe2Title.innerText = "Simple Pancakes";

// //Create an ordered list for the recipe 2 steps
// const recipe2List = document.createElement("ol");

// //add recipe2 steps
// const recipe2Step1 = document.createElement("li");
// recipe2Step1.innerText = "Sift flour into a large bowl";
// recipe2List.appendChild(recipe2Step1);

// const recipe2Step2 = document.createElement("li");
// recipe2Step2.innerText = "Make a well in the flour and add your eggs and milk. Whisk your flour into the wet mix slowly"
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
// recipe2Step6.innerText = "The second side should take approximately 1 minute to cook, then remove your pancake and start the next until your batter is used up!";
// recipe2List.appendChild(recipe2Step6);

// body.appendChild(recipe2Title);
// body.appendChild(recipe2List);


// // Add joke
// const URL = "https://official-joke-api.appspot.com/random_joke";
// const buttonEl = document.querySelector('#my-button');

// fetch(URL)
//     .then((response) => response.json()) //get JSON data from response
//     .then((jokeData) => {
//       const setupText = document.createElement("p");
//       setupText.textContent = jokeData.setup

//       const punchlineText = document.createElement("p");
//       punchlineText.textContent = jokeData.punchline;
//       punchlineText.style.display = "none";

//       buttonEl.addEventListener('click', () => {
//         punchlineText.style.display = "block";
//       });

//       body.appendChild(setupText);
//       body.appendChild(buttonEl);
//       body.appendChild(punchlineText);
//     });
// });

//         // Refactored
        
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Update the blog title
  document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

  // ✅ Function to add a recipe to the bottom of the page
  function addRecipeToPage(title, steps) {
    const recipeTitle = document.createElement("p");
    recipeTitle.innerText = title;

    const recipeList = document.createElement("ol");

    steps.map((stepText) => {
      const li = document.createElement("li");
      li.innerText = stepText;
      recipeList.appendChild(li);
    });

    body.appendChild(recipeTitle);
    body.appendChild(recipeList);
  }

  // ✅ Add recipes
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

  // ✅ Add a joke using Fetch and .then
  const URL = "https://official-joke-api.appspot.com/random_joke";
  const buttonEl = document.querySelector('#my-button');

  fetch(URL)
    .then((response) => response.json())
    .then((jokeData) => {
      const setupText = document.createElement("p");
      setupText.textContent = `${jokeData.setup}`;

      const punchlineText = document.createElement("p");
      punchlineText.textContent = `${jokeData.punchline}`;
      punchlineText.style.display = "none";

      buttonEl.textContent = "Answer";
      buttonEl.addEventListener("click", () => {
        punchlineText.style.display = "block";
      });

      body.appendChild(setupText);
      body.appendChild(buttonEl);
      body.appendChild(punchlineText);
    });
});
