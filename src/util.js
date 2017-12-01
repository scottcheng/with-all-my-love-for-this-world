export const linkify = name => `/${name.replace(/ /g, "-").replace(/'/g, "")}`;

export const pad2Digit = i => (i < 10 ? `0${i}` : i);
