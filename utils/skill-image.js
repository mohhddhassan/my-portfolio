// @flow strict

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  return `public/images/skills/${skillID}.svg`;
};
