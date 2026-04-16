const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");

// 💅 Fashion dataset (17 styles)
const fashionData = {
  y2k: { vibe: "Playful, nostalgic 2000s", color: "#ffb6c1" },
  chic: { vibe: "Stylish, polished", color: "#f8c8dc" },
  casual: { vibe: "Relaxed, everyday comfort", color: "#d3f8e2" },
  retro: { vibe: "Vintage throwback", color: "#f6bd60" },
  streetwear: { vibe: "Urban, bold", color: "#333333" },
  bohemian: { vibe: "Free-spirited, earthy", color: "#cdb4db" },
  elegant: { vibe: "Sophisticated, refined", color: "#eae2b7" },
  artsy: { vibe: "Creative, expressive", color: "#ffafcc" },
  romantic: { vibe: "Soft, dreamy", color: "#ffc8dd" },
  minimal: { vibe: "Clean, simple", color: "#f1f1f1" },
  professional: { vibe: "Formal, structured", color: "#ccd5ae" },
  girly: { vibe: "Cute, feminine", color: "#ff69b4" },
  edgy: { vibe: "Bold, rebellious", color: "#2b2d42" },
  grunge: { vibe: "Dark, rugged", color: "#6c757d" },
  sporty: { vibe: "Active, energetic", color: "#90dbf4" },
  preppy: { vibe: "Classic, neat", color: "#bde0fe" },
  sexy: { vibe: "Confident, bold", color: "#ff006e" }
};

// 🎯 Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const word = input.value.toLowerCase().trim();
  fetchWord(word);
});

// 🌐 Fetch API
function fetchWord(word) {
  resultDiv.innerHTML = "Loading... ⏳";

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.json();
    })
    .then(data => displayData(data[0], word))
    .catch(() => displayError(word));
}

// 📊 Display results
function displayData(data, word) {
  const definition = data.meanings[0].definitions[0].definition;
  const example = data.meanings[0].definitions[0].example || "No example available";
  const partOfSpeech = data.meanings[0].partOfSpeech;

  let html = `
    <h2>💖 ${word}</h2>
    <p><strong>✨ Part of Speech:</strong> ${partOfSpeech}</p>
    <p><strong>📖 Definition:</strong> ${definition}</p>
    <p><strong>📝 Example:</strong> ${example}</p>
  `;

  applyFashionStyle(word, html);
}

// 🎨 Apply fashion styling + dataset
function applyFashionStyle(word, html) {
  if (fashionData[word]) {
    const style = fashionData[word];

    html += `
      <h3>✨ Style Vibe</h3>
      <p>${style.vibe}</p>
    `;

    document.body.style.background = style.color;

    // Adjust text color for dark themes
    if (["edgy", "grunge", "streetwear"].includes(word)) {
      document.body.style.color = "white";
    } else {
      document.body.style.color = "#333";
    }
  }

  resultDiv.innerHTML = html;
}

// ❌ Error handling
function displayError(word) {
  let html = `<p>❌ Word not found in dictionary.</p>`;

  if (fashionData[word]) {
    const style = fashionData[word];

    html += `
      <h3>✨ Style Vibe</h3>
      <p>${style.vibe}</p>
    `;

    document.body.style.background = style.color;
  }

  resultDiv.innerHTML = html;
}