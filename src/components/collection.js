import React from "react";
import Link from "gatsby-link";

import Front from "../components/front";
import Section from "../components/section";
import Photo from "../components/photo";
import Text from "../components/text";
import { linkify } from "../util";

const TextFrame = Section.extend`
  @media (max-width: 699px) {
    text-align: left;
  }
`;

export default ({ title, content }) => (
  <div>
    <Front title={title} />

    {content.map(
      (s, i) =>
        s.indexOf(".jpg") >= 0 ? (
          <Section key={i}>
            <Photo src={`${linkify(title)}/${s}`} />
          </Section>
        ) : (
          <TextFrame key={i} fullPage>
            <Text>{s}</Text>
          </TextFrame>
        ),
    )}

    <Section>
      <Link to="/">Back</Link>
    </Section>
  </div>
);
