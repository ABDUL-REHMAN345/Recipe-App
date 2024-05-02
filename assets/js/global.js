/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type String
 * @param {Function*} callback callback function
 */


window.addEventOnElements = ($elements , eventType , callback) => {
    for(const $element of $elements){
$element.addEventListener(eventType,callback);
    }
}