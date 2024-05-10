/**
 * @license MIT
 * @copyright 2023 codewithrehman
 * @author codewithrehman <abdulrehman034551@gmail.com>
 */


"use strict";


/**
 * 
 * @param {Number} minute Cooking Time
 * @returns {string}
 */


export const getTime = minute => {
    const /**Number */ hour = Math.floor(minute / 60);
    const /**Number */ day = Math.floor(hour / 24);

const /**{Number} */ time = day || hour || minute;
const /**{Number} */ unitIndex = [day , hour , minute].lastIndexOf(time);
const /**{string} */ timeUnit = ["day" , "hour" , "minutes"][unitIndex];
return {time , timeUnit};

}