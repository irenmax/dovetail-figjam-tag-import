export const createTitleNode = async (title: string, x: number, y: number) => {
  const titleNode = figma.createShapeWithText();
  titleNode.shapeType = "ROUNDED_RECTANGLE";
  titleNode.text.characters = title;
  titleNode.text.fontSize = 24;
  titleNode.resize(title.length * 18, 70);
  titleNode.x = x;
  titleNode.y = y;
  figma.currentPage.appendChild(titleNode);
  return titleNode;
};
