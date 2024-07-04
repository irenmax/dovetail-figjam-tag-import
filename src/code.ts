import tags, { Tag } from "./tags";
import tagGroups from "./tagGroups";
import { hexToRgb } from "./hexToRgb";

const nodes: SceneNode[] = [];

const getGroupNameById = (id: string) => {
  const group = tagGroups.find((group) => group.id === id);
  return group ? group.title : "";
};

const component = await figma.importComponentByKeyAsync(
  "54b42eafcbb46533da89d4593762d94ec25067e9"
);

const createTitleNode = async (title: string, x: number, y: number) => {
  const titleNode = figma.createShapeWithText();
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  titleNode.shapeType = "ROUNDED_RECTANGLE";
  titleNode.text.characters = title;
  titleNode.text.fontSize = 24;
  titleNode.resize(title.length * 18, 70);
  titleNode.x = x;
  titleNode.y = y;
  figma.currentPage.appendChild(titleNode);
  nodes.push(titleNode);
  return titleNode;
};

const addHyperlink = (tagInstance: InstanceNode, tagId: string) => {
  const row2 = tagInstance.findChild(
    (child) => child.name === "row2"
  ) as FrameNode;
  const link = row2.findChild((child) => child.name === "Link") as FrameNode;
  const linkTarget = link.findChild(
    (child) => child.name === "linkTarget"
  ) as TextNode;
  linkTarget.hyperlink = {
    type: "URL",
    value: `https://jde-wp-1-x5dt.dovetail.com/tags/${tagId}`,
  };
};

const createTagNode = async (tag: Tag, x: number, y: number) => {
  const tagInstance = component.createInstance();
  tagInstance.setProperties({
    ["count#1:1"]: tag.highlightCount.toString(),
    ["title#1:0"]: tag.title,
    ["group#1:2"]: getGroupNameById(tag.tagGroupId),
  });
  tagInstance.fills = [{ type: "SOLID", color: hexToRgb(tag.color) }];
  tagInstance.x = x;
  tagInstance.y = y;
  addHyperlink(tagInstance, tag.id);
  figma.currentPage.appendChild(tagInstance);
  nodes.push(tagInstance);
  return tagInstance;
};

let xPosition = 0;
let yPosition = 0;
for (let i = 0; i < tagGroups.length; i++) {
  let maxWidth = 0;
  const titleNode = await createTitleNode(tagGroups[i].title, xPosition, 0);
  yPosition += titleNode.height + 50;
  const tagsInGroup = tags.filter((tag) => tag.tagGroupId === tagGroups[i].id);
  for (let j = 0; j < tagsInGroup.length; j++) {
    const tagNode = await createTagNode(tagsInGroup[j], xPosition, yPosition);
    yPosition += tagNode.height + 25;
    maxWidth = Math.max(maxWidth, tagNode.width);
  }
  maxWidth = Math.max(maxWidth, titleNode.width);
  xPosition += maxWidth + 70;
  yPosition = 0;
}

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

figma.closePlugin();
