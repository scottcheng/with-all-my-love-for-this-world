import React from "react";
import Link from "gatsby-link";

import Front from "../components/front";
import Section from "../components/section";
import Photo from "../components/photo";
import Text from "../components/text";
import { linkify } from "../util";

const DualPhotoFrame = Section.extend`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TextFrame = Section.extend`
  @media (max-width: 699px) {
    text-align: left;
  }
`;

const isImage = s => s.indexOf(".jpg") >= 0;

const Item = ({ data, title }) => {
  if (Array.isArray(data)) {
    if (data.every(isImage) && data.length === 2) {
      return (
        <DualPhotoFrame>
          {data.map((d, i) => (
            <Photo key={i} src={`${linkify(title)}/${d}`} small />
          ))}
        </DualPhotoFrame>
      );
    }
  }

  if (typeof data === "string" && isImage(data)) {
    return (
      <Section>
        <Photo src={`${linkify(title)}/${data}`} />
      </Section>
    );
  }

  return (
    <TextFrame fullPage>
      <Text>{data}</Text>
    </TextFrame>
  );
};

export default ({ title, content }) => (
  <div>
    <Front title={title} />

    {content.map((d, i) => <Item data={d} title={title} key={i} />)}

    <Section>
      <Link to="/">Back</Link>
    </Section>
  </div>
);
