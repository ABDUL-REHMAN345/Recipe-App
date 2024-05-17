/**
 * @license MIT
 * @copyright 2023 codewithrehman
 * @author codewithrehman <abdulrehman034551@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { getTime } from "./module.js";

const /**{Array}*/ savedRecipes = Object.keys(window.localStorage).filter(
    (item) => {
      return item.startsWith("cookio-recipe");
    }
  );

// console.log(savedRecipes);

const /**{NodeElement} */ $savedRecipeContainer = document.querySelector(
    "[data-saved-recipe-container]"
  );
$savedRecipeContainer.innerHTML = `
<h2 class="headline-small section-title">
    All Saved Recipes
</h2>
`;

const /**{NodeElement} */ $gridList = document.createElement("div");

