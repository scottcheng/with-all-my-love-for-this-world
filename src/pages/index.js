import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Front from "../components/front";
import Section from "../components/section";
import Photo from "../components/photo";
import Text from "../components/text";
import { linkify, pad2Digit } from "../util";

const collections = [
  "with all my love for this world",
  "the city in my dreams",
  "why don't we dance",
  "silently",
  // "tree portraits",
];

export default () => (
  <div>
    <Front title="with all my love for this world" isIndex />

    <Section>
      <Photo src="cover.jpg" small center />
    </Section>

    <Section>
      {collections.map((c, i) => (
        <Text key={i}>
          <Link to={linkify(c)}>
            {pad2Digit(i + 1)}. {c}
          </Link>
        </Text>
      ))}
    </Section>
  </div>
);
