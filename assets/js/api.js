/**
 * @license MIT
 * @copyright 2023 codewithrehman
 * @author codewithrehman <abdulrehman034551@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";

const APP_ID = "7fd6d74a";
const API_KEY = "f527e3ef8e254f871cfdb3f0da8b17fd";
const TYPE = "public";

/**
 * @param {Array} queries Query Array
 * @param {Function} successCallback Success Callback Function
 */
export const fetchData = async function (queries, successCallback) {
  const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }

};

