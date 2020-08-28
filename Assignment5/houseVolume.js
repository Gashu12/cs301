'use strict';
const prompt = require('prompt-sync')();

let width = prompt("Please enter the width of the house: ");
let height = prompt("Please enter the height of the house: ");
let depth = prompt("Please enter the depth of the house: ");
let sweep = prompt("Please enter the sweep of the house: ");

width = parseFloat(width);
height = parseFloat(height);
depth = parseFloat(depth);
sweep = parseFloat(sweep);

function houseVolume(width, height, depth, sweep){
  let liveVolume = livingVolume(width, height, depth);
  let volueOfRoof = roofVolume(width, depth, sweep);
  let totalHouseVolume = liveVolume + volueOfRoof;
  console.log(totalHouseVolume);
}

houseVolume(width, height, depth, sweep);

function livingVolume(width, height, depth){
  let liveVolume;
  liveVolume = width * height * depth;
  return liveVolume;
}
livingVolume(width, height, depth);
function roofVolume(width, depth, sweep){
  let areaOfTriangle = triangleArea(sweep, sweep, depth);
  let volueOfRoof = areaOfTriangle * width;
  return volueOfRoof;

}
roofVolume(width, depth, sweep);

function triangleArea(a, b, c){
  a = sweep;
  b = sweep;
  c = depth;
  let s = (a + b + c) / 2;
  let areaOfTriangle;
  areaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return areaOfTriangle;
}
triangleArea(sweep, sweep, depth);
