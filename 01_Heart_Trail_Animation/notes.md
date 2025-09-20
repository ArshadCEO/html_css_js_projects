🔙 [Go to Index](../readme.md)

# Heart Trail Animation 🫀✨

## 📌 Overview

The Heart Trail Animation is a fun and interactive project built with HTML, CSS, and JavaScript.
It tracks the mouse position and generates animated hearts that:

- Appear at the cursor’s location
- Grow in random sizes & colors
- Float upward
- Fade out smoothly

## 🗂 Project Structure

```bash
Heart-Trail-Animation/
│── index.html      # Main HTML file
│── style.css       # Styling for hearts and layout
│── main.js         # Animation logic with JavaScript
│── heart-icon.png  # (Optional) Store images, icons if needed
```

## ⚙️ How It Works

* **JavaScript**

   * Listens to **mousemove events**.
   * Creates a heart element dynamically at the cursor position.
   * Applies random color & size.
   * Uses CSS animations for movement & disappearance.
   * Removes the heart from DOM once animation ends (to prevent memory leaks).

## 📊 Key Learnings

* How to **track mouse position** using JavaScript events.
* How to **create DOM elements dynamically**.
* Combining **CSS animations + JS logic** for interactive effects.
* Importance of **clean-up (removing elements)** to avoid performance issues.

## 🚀 Future Improvements

* Add **different shapes** (stars, circles, emojis).
* Use **GSAP / Anime.js** for smoother animations.
* Add **toggle button** to enable/disable effect.
* Control **trail density** with settings (e.g., slider).

