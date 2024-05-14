/**
 * @license MIT
 * @copyright 2023 codewithrehman
 * @author codewithrehman <abdulrehman034551@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { fetchData } from "./api.js";
import { $skeletonCard, cardQueries } from "./global.js";
import { getTime } from "./module.js";

/**
 * Accordion
 */

const /**{NodeList} */ $accordions =
    document.querySelectorAll("[data-accordion]");

/**
 *
 * @param {*} $element Accordion node
 */

const initAccordion = function ($element) {
  const /**{NodeElement} */ $button = $element.querySelector(
      "[data-accordion-btn]"
    );
  let isExpanded = false;

  $button.addEventListener("click", function () {
    isExpanded = isExpanded ? false : true;
    this.setAttribute("aria-expanded", isExpanded);
  });
};

for (const $accordion of $accordions) initAccordion($accordion);




/**
 * Filter bar toggle for mobile screen
 */


const /**{NodeElement} */ $filterBar = document.querySelector("[data-filter-bar]");
