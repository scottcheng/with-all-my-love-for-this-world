import React from "react";
import Link from "gatsby-link";

import Collection from "../components/collection";

const content = [
  "DSC05344.jpg", // ocean, calm, point reyes
  "DSC05348.jpg", // ocean, flickering, point reyes

  // human habitat
  "DSC09084.jpg", // cows on route 1, calif
  "DSC09127.jpg", // town on route 1, calif
  "DSC09993.jpg", // man watching sea, calif
  "DSC09875.jpg", // flowers from the window, palo alto
  "DSC09032.jpg", // jellyfish, monterey aquarium
  "DSC08290.jpg", // sunset, mississippi river, new orleans
  "DSC07722.jpg", // lovers on bench, central park
  "DSC08337.jpg", // dusk, barcelona
  "DSC07898.jpg", // the reservoir in winter afternoon, central park
  "DSC08216.jpg", // snowstorm, the high line
  "DSC07568.jpg", // field and audience desk through window, dia beacon
  "DSC07521.jpg", // road and man biking, beacon
  "DSC07487.jpg", // mont saint michel
  "DSC08259.jpg", // world in crystal pebbles, centre pompidou
  "DSC08810.jpg", // birds, williamsburg
  "032619072.jpg", // island and yachts, cannes
  "DSC05725.jpg", // mt tam, overwatching san francisco

  // mountains
  "DSC00371.jpg", // layers of mountains, mt baldy
  "DSC00415.jpg", // snow in gold, mt baldy
  "DSC05682.jpg", // mountains in gold, mt baldy
  "DSC04143.jpg", // deers, tioga rd, yosemite
  "DSC00449.jpg", // full moon over devil's backbone, mt baldy
  "DSC08584.jpg", // the poll and the pacific, mt tam
  "DSC08568.jpg", // pink bay, mt tam
  "DSC08571.jpg", // pacific over mt tam
  "DSC05699.jpg", // dusk, mt tam
  "DSC06887.jpg", // dusk, redwood park

  // flowers and other living things
  "DSC00532.jpg", // joshua trees and sun, joshua tree park
  "DSC02828.jpg", // clouds, yellowstone
  "DSC01103.jpg", // tree, washington park arboretum, seattle
  "DSC06723.jpg", // trees in the black forest, germany
  "DSC01065.jpg", // pine and cherry blossom, washington park arboretum, seattle
  "DSC00709.jpg", // yellow tulips and a red, skagit county, washington
  "DSC08812.jpg", // 'Look up, the sky is blue.', // birds in blue sky, williamsburg

  // lakes and oceans
  "IMG_6943.jpg", // seashore in gold, big sur
  "DSC05413.jpg", // sea and mountain, point reyes
  "DSC04290.jpg", // road, south mono lake
  "DSC04216.jpg", // bush and salt lake, west mono lake
  "DSC06626.jpg", // thick fog over sea, calif
  "DSC02974.jpg", // misted lake, yellowstone
  "DSC02986.jpg", // waterfall, yellowstone
  "DSC02892.jpg",
  "DSC02926.jpg",
  "DSC02933.jpg",
  "DSC06618.jpg", // milky way, crater lake

  // dream is over
  "DSC05290.jpg", // ocean through window, point reyes lighthouse
  "Despite all the suffering and despair, this world is still the most beautiful thing I know.",
  "DSC08665.jpg", // love from the moon, mt tam
];

export default () => (
  <Collection title="with all my love for this world" content={content} />
);
