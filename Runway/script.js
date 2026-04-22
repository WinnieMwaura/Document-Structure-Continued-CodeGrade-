const form = document.getElementById("searchForm");
const input = document.getElementById("wordInput");
const resultDiv = document.getElementById("result");

const UNSPLASH_KEY = "HoVN7sGKMotEKOf_S1lAPTbHCakp_pxecZT1N8s98yA";

// 💅 Expanded Fashion Dataset
const fashionData = {
  y2k: {
    vibe: "Playful, nostalgic 2000s",
    color: "#ffb6c1",
    outfits: [
      "Baby tee + low-rise jeans",
      "Mini skirt + crop top",
      "Tracksuit + chunky sneakers"
    ],
    items: ["Crop tops", "Mini skirts", "Platform shoes", "Tiny handbags"]
  },
  grunge: {
    vibe: "Dark, rebellious, 90s inspired",
    color: "#6c757d",
    outfits: [
      "Flannel shirt + ripped jeans",
      "Band tee + combat boots",
      "Oversized sweater + docs"
    ],
    items: ["Flannel", "Ripped jeans", "Combat boots", "Band tees"]
  },
  chic: {
    vibe: "Polished and stylish",
    color: "#f8c8dc",
    outfits: [
      "Blazer + tailored pants",
      "Midi dress + heels",
      "Silk blouse + skirt"
    ],
    items: ["Blazers", "Heels", "Structured bags"]
  },
  streetwear: {
    vibe: "Urban, bold, expressive",
    color: "#333333",
    outfits: [
      "Hoodie + cargo pants",
      "Graphic tee + sneakers",
      "Oversized fit + cap"
    ],
    items: ["Hoodies", "Sneakers", "Caps", "Cargo pants"]
  }
};

// 🎯 Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const word = input.value.toLowerCase().trim();
  searchFashion(word);
});

// 🔍 Main search function
function searchFashion(word) {
  resultDiv.innerHTML = "Loading fashion results... ⏳";

  const localData = fashionData[word];

  // Fetch images from Unsplash
  fetch(`https://api.unsplash.com/search/photos?query=${word}+fashion&per_page=6&client_id=${UNSPLASH_KEY}`)
    .then(res => res.json())
    .then(data => {
      displayResults(word, localData, data.results);
    })
    .catch(() => {
      displayResults(word, localData, []);
    });
}

// 🎨 Display results
function displayResults(word, localData, images) {
  let html = `<h2>💖 ${word}</h2>`;

  if (!localData && images.length === 0) {
    resultDiv.innerHTML = `
      <p>❌ No fashion results found.</p>
      <p>Try: y2k, grunge, chic, streetwear</p>
    `;
    return;
  }

  // 🌈 Apply background if style exists
  if (localData) {
    document.body.style.background = localData.color;
    document.body.style.color =
      ["grunge", "streetwear"].includes(word) ? "white" : "#333";

    html += `
      <h3>✨ Style Vibe</h3>
      <p>${localData.vibe}</p>

      <h3>👗 Outfit Ideas</h3>
      <ul>
        ${localData.outfits.map(o => `<li>${o}</li>`).join("")}
      </ul>

      <h3>🛍️ Key Items</h3>
      <ul>
        ${localData.items.map(i => `<li>${i}</li>`).join("")}
      </ul>
    `;
  }

  // 🖼️ Images section
  if (images.length > 0) {
    html += `<h3>📸 Style Inspiration</h3><div class="image-grid">`;

    images.forEach(img => {
      html += `
        <img src="${img.urls.small}" alt="fashion image" class="fashion-img">
      `;
    });

    html += `</div>`;
  }

  resultDiv.innerHTML = html;
}
