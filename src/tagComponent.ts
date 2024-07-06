const TAG_COMPONENT_KEY = "54b42eafcbb46533da89d4593762d94ec25067e9";

export const initComponent = async () => {
  const tagComponent = await figma.importComponentByKeyAsync(TAG_COMPONENT_KEY);
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  return tagComponent;
};
