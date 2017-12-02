import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Front from "../components/front";
import Section from "../components/section";
import Photo from "../components/photo";
import Text from "../components/text";
import { linkify } from "../util";

const SmallPhotoFrame = Section.extend`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TextFrame = Section.extend`
  max-width: 750px;
  text-align: left;
`;

const isText = s => typeof s === "string" && s.indexOf(".jpg") === -1;

const isImage = s => typeof s === "string" && s.indexOf(".jpg") >= 0;

const isAsterisk = s => typeof s === "string" && s.indexOf("✻") === 0;

const Item = ({ data, title }) => {
  if (Array.isArray(data) && data.every(isImage)) {
    return (
      <SmallPhotoFrame>
        {data.map((d, i) => (
          <Photo key={i} src={`${linkify(title)}/${d}`} small />
        ))}
      </SmallPhotoFrame>
    );
  }

  if (isImage(data)) {
    return (
      <Section>
        <Photo src={`${linkify(title)}/${data}`} center />
      </Section>
    );
  }

  if (Array.isArray(data) && data.every(isText)) {
    return (
      <TextFrame fullPage>
        {data.map((d, i) => (
          <Text key={i} isAsterisk={isAsterisk(d)}>
            {d}
          </Text>
        ))}
      </TextFrame>
    );
  }

  return (
    <TextFrame fullPage>
      <Text>{data}</Text>
    </TextFrame>
  );
};

export default ({ title, content, footnotes }) => (
  <div>
    <Helmet>
      <title>{title} | with all my love for this world</title>
    </Helmet>

    <Front title={title} />

    {content.map((d, i) => <Item data={d} title={title} key={i} />)}

    <div style={{ height: "24em" }} />

    {footnotes ? (
      <Section>{footnotes.map((n, i) => <div key={i}>{n}</div>)}</Section>
    ) : null}

    <Section>
      <Link to="/">Back</Link>
    </Section>
  </div>
);
