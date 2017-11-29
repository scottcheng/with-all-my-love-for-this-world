import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import Front from "../components/front";
import Section from "../components/section";
import Photo from "../components/photo";
import Text from "../components/text";

const CollectionLink = Text.extend`
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;

const collections = [
  "with all my love for this world",
  "why don't we dance",
  "long island",
  "tree portraits",
];

const linkify = name => `/${name.replace(/ /g, "-").replace(/'/g, "")}`;

const pad2Digit = i => (i < 10 ? `0${i}` : i);

export default () => (
  <div>
    <Front title="with all my love for this world" isIndex />

    <Section>
      <Photo src="cover.jpg" small />
    </Section>

    <Section>
      {collections.map((c, i) => (
        <CollectionLink key={i}>
          <Link to={linkify(c)}>
            {pad2Digit(i + 1)}. {c}
          </Link>
        </CollectionLink>
      ))}
    </Section>
  </div>
);
