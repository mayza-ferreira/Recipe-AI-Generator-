function displayRecipe(response) {
  new Typewriter("#recipe-text", {
    strings: response.data.answer.replace(/\n/g, "<br>"),
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "b3ec35b0cd4d44ft6c3d0oaf1862e31d";
  let prompt = document.getElementById("user-instructions").value;
  let context =
    "You are a helpful assistant. You can provide explanations, and assist only with various cooking recipes. Please respond with a formated recipe, an ingredient list, and the step by step, lastly some tips. Respond in the language of the prompt.Use emojis to make it more engaging. Do not include any other information.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeText = document.getElementById("recipe-text");
  recipeText.innerHTML = "Generating recipe...";

  axios.get(apiUrl).then(displayRecipe);
}

let form = document.getElementById("recipe-generator-form");
form.addEventListener("submit", generateRecipe);
