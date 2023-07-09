export const getOrganizedProperties = (properties) => {
  const organizedProperties = {};

  properties.forEach((property) => {
    const firstLetter = property.charAt(0);

    if (!organizedProperties[firstLetter]) {
      organizedProperties[firstLetter] = [];
    }

    organizedProperties[firstLetter].push(property);
  });

  return organizedProperties;
};
