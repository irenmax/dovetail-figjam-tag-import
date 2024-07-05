import { hexToRgb } from "./hexToRgb";
import { Tag } from "./types";

const addHyperlink = (
  tagInstance: InstanceNode,
  tagId: string,
  projectUrl: string
) => {
  if (!projectUrl) {
    return;
  }
  const row2 = tagInstance.findChild(
    (child) => child.name === "row2"
  ) as FrameNode;
  const link = row2.findChild((child) => child.name === "Link") as FrameNode;
  const linkTarget = link.findChild(
    (child) => child.name === "linkTarget"
  ) as TextNode;
  const url = projectUrl.replace(/\/$/, "");
  linkTarget.hyperlink = {
    type: "URL",
    value: `${url}/tags/${tagId}`,
  };
};

export const createTagNode = async (
  tagComponent: ComponentNode,
  tag: Tag,
  groupName: string,
  x: number,
  y: number,
  projectUrl: string
): Promise<InstanceNode> => {
  const tagInstance = tagComponent.createInstance();
  tagInstance.setProperties({
    ["count#1:1"]: tag.highlightCount.toString(),
    ["title#1:0"]: tag.title,
    ["group#1:2"]: groupName,
  });
  tagInstance.fills = [{ type: "SOLID", color: hexToRgb(tag.color) }];
  tagInstance.x = x;
  tagInstance.y = y;
  addHyperlink(tagInstance, tag.id, projectUrl);
  figma.currentPage.appendChild(tagInstance);
  return tagInstance;
};
