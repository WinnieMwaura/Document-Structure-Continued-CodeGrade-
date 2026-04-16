💖 Runway Codex

Runway Codex is a fashion-inspired Single Page Application (SPA) that combines a dictionary API with a custom fashion style engine. Users can search for words or fashion styles and receive definitions, style vibes, and dynamically changing UI themes based on their input.

✨ Features
🔎 Search for words or fashion styles
📖 Get definitions, parts of speech, and example usage
🎨 Dynamic UI theme changes based on fashion styles
💅 Custom fashion dataset (Y2K, chic, grunge, etc.)
❌ Error handling for invalid or missing words
⚡ Smooth single-page experience (no page reloads)
🎯 Supported Fashion Styles

Runway Codex responds to the following styles:

y2k, chic, casual, retro, streetwear, bohemian, elegant, artsy, romantic, minimal, professional, girly, edgy, grunge, sporty, preppy, sexy

Each style changes the background color and displays a unique fashion “vibe”.

🌐 Public API Used

This project uses the Free Dictionary API:

👉 https://dictionaryapi.dev/

It provides:

Word definitions
Parts of speech
Example usage
Pronunciation data (where available)
🧠 How It Works
User enters a word or fashion style
The app sends a request to the dictionary API using fetch()
The response is processed and displayed dynamically
If the word matches a fashion style in the custom dataset:
A style vibe is shown
The background color changes
If no result is found, a friendly error message is displayed
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
Fetch API
DOM Manipulation
📁 Project Structure
runway-codex/
│
├── index.html
├── style.css
├── script.js
└── README.md