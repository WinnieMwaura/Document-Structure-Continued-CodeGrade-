# 💖 Runway Codex

## 📌 Project Overview

Runway Codex is a **fashion search engine web application** that allows users to explore different fashion styles such as *Y2K, grunge, chic, and streetwear*.

Users can search for a style and instantly get:

* ✨ Style vibe description
* 👗 Outfit ideas
* 🛍️ Key clothing items
* 📸 Visual inspiration (real images from API)

---

## 🚀 Features

* 🔍 Search for fashion styles
* 🎨 Dynamic background styling based on the selected aesthetic
* 👗 Outfit recommendations for each style
* 🛍️ Suggested clothing items
* 📸 Real-time fashion images using the Unsplash API
* ⚡ Fast and responsive user interface

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript 
* Unsplash API

---

## 🌐 How It Works

1. User enters a fashion style (e.g. *grunge*)
2. The app:

   * Checks a local fashion dataset
   * Fetches related images from the Unsplash API
3. Results are displayed dynamically on the page



## 📂 Project Structure

* `index.html` → Main structure
* `style.css` → Styling and layout
* `script.js` → Logic, API calls, and rendering



## ⚙️ Setup Instructions

1. Clone or download the project

2. Open the project folder

3. Get a free API key from Unsplash: https://unsplash.com/developers

4. Open `script.js` and replace:

   ```js
   const UNSPLASH_KEY = "PASTE_YOUR_ACCESS_KEY_HERE";
   

   with your actual key

5. Open `index.html` in your browser



## ⚠️ Limitations

* Only predefined styles (e.g. y2k, grunge, chic, streetwear) include detailed outfit data
* Requires internet connection for image fetching
* Limited dataset (can be expanded further)


