<p align="center">
  <h1 align="center">Pixel Art 🎨</h1>

  <p align="center">
    A simple 25x25 grid pixel art canvas made with HTML5 canvas.
    <br />
    <a href="https://captainayan.github.io/pixelart/">View Demo</a>
    ·
    <a href="https://github.com/captainAyan/pixelart/issues">Report Bug 😓</a>
  </p>
</p>

[![Screenshot](https://captainayan.github.io/pixelart/screenshots/1.png)](https://captainayan.github.io/pixelart/)

## About
Pixel Art is a simple 25x25 grid based pixel art style editor. Although it is 
currently a 25x25 grid, the mechanism underneath is extensive and capable of 
displaying grids bigger than 25x25. 🎨 I'm not using any external libraries or 
bundler, so this project is easy for beginners 🚀.

## Getting Started
Just clone the repo and open the html file 😉👍. If you're having any trouble 
in understanding any part of the codebase, please feel free to message me 😊.

_If this repo gets enough traction then I'll create the github wiki pages_

🙏🥺 Consider starring this project.

👉👈 Also consider contribution, I could use some help.

## Contribution
Just send me a pull request. Mention your discord or instagram id.

In case you want to add your own art to the `gallery.js`, follow these steps:
- Draw in the canvas
- type `grid.export()` in the console
- copy the result (which is a stringified array)
- paste it in the `gallery.js` file (use the previous entries as a reference)
- go to the `index.html` file
- add `<a href="#" onclick="grid.import([art name used in gallery.js]); return false;">[Display name]</a> &nbsp;` 
inside `gallery-options` class div.

(if the instructions were unclear, please let me know)


## Contact
Send me a message on discord or instagram. Check out my [Profile Readme](https://github.com/captainAyan)