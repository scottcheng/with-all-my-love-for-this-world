import React from "react";

import Collection from "../components/collection";

const content = [
  "DSC09236.jpg",

  ["He adored New York City.", "✻"],

  ["DSC09790.jpg", "DSC09783.jpg"],
  ["DSC08676.jpg", "DSC09787-.jpg"],

  [
    "He romanticized it all out of proportion.",
    "To him, no matter what the season was, this was still a town that existed in black and white and pulsated to the great tunes of George Gershwin.",
    "✻",
  ],

  "DSC01132.jpg",
  "DSC00271.jpg",
  "DSC00262.jpg",
  "DSC09852.jpg",
  "DSC00214.jpg",

  ["This is New York. We'll find a place to dance.", "✻✻"],

  ["DSC09787.jpg", "DSC09780.jpg"],

  "DSC00586.jpg",

  ["DSC00303.jpg", "DSC00305.jpg"],
  ["DSC00310.jpg", "DSC00313.jpg"],

  ["DSC09356.jpg", "IMG_0369.jpg"],

  "DSC09654.jpg",

  "DSC08779.jpg",
  ["DSC08777.jpg", "DSC08812.jpg"],

  "DSC00342.jpg",
  "DSC00379.jpg",

  "DSC00364.jpg",
  ["DSC00372.jpg", "DSC00376.jpg"],

  "DSC00392.jpg",

  "DSC09278.jpg",
  "DSC09281.jpg",
  "DSC09290.jpg",

  "DSC09514.jpg",
  "DSC09599.jpg",

  "DSC09079.jpg",

  "DSC09389.jpg",

  "DSC09204.jpg",
  "DSC01083.jpg",

  ["DSC00763.jpg", "DSC00769.jpg"],

  "DSC00462.jpg",

  "DSC09012.jpg",
  ["DSC09013.jpg", "DSC09014.jpg"],

  [
    "He was as tough and romantic as the city he loved.",
    "New York was his town, and it always would be.",
    "✻",
  ],
  "DSC01045.jpg",
  "DSC01036.jpg",
];

const footnotes = ["✻ Woody Allen, Manhattan", "✻✻ John M. Ford, 110 Stories"];

export default () => (
  <Collection
    title="the city in my dreams"
    content={content}
    footnotes={footnotes}
  />
);
