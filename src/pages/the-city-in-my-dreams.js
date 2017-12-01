import React from "react";
import Link from "gatsby-link";

import Collection from "../components/collection";

const content = [
  "DSC09236.jpg",
  "DSC01132.jpg",

  "This is New York. We'll find a place to dance.",

  "DSC00214.jpg",
  "DSC00271.jpg",
  "DSC00262.jpg",
  ["DSC00303.jpg", "DSC00305.jpg"],
  ["DSC00310.jpg", "DSC00313.jpg"],

  "DSC09852.jpg",

  "DSC08779.jpg",
  ["DSC08777.jpg", "DSC08812.jpg"],

  "DSC00364.jpg",
  ["DSC00372.jpg", "DSC00376.jpg"],

  "DSC00392.jpg",
  "DSC00462.jpg",

  "DSC00763.jpg",
  "DSC00769.jpg",

  "DSC09012.jpg",
  ["DSC09013.jpg", "DSC09014.jpg"],

  "DSC01004.jpg",
  "DSC01045.jpg",
  [
    "He was as tough and romantic as the city he loved.",
    <br />,
    "New York was his town, and it always would be.",
  ],
  "DSC01036.jpg",
];

export default () => (
  <Collection title="the city in my dreams" content={content} />
);
