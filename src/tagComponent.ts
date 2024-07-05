const TAG_COMPONENT_KEY = "componentKey";

export const initComponent = async () => {
  const tagComponent = await figma.importComponentByKeyAsync(TAG_COMPONENT_KEY);
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  return tagComponent;
};
