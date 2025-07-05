function displayRecipe(response) {
  let markdown = response.data.answer;
  let html = marked.parse(markdown);
  new Typewriter("#recipe-text", {
    strings: html,
    autoStart: true,
    cursor: null,
    delay: 5,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "b3ec35b0cd4d44ft6c3d0oaf1862e31d";
  let prompt = document.getElementById("user-instructions").value;
  let language = navigator.language || "en";
  let elementHeight = document.getElementById("recipe-text").clientHeight;
  let context = `You are a helpful assistant. You can provide explanations, and assist only with various cooking recipes. Please make your answer fit in 1400 characters in any language, give an ingredient list, and a short step by step, lastly some tips if necessary. Respond in the language of the web browser: ${language}.Use some emojis to make it more engaging. Do not include any other information and do not speak to the user.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeText = document.getElementById("recipe-text");
  recipeText.innerHTML = "Generating recipe...";

  axios.get(apiUrl).then(displayRecipe);
}

let form = document.getElementById("recipe-generator-form");
form.addEventListener("submit", generateRecipe);
