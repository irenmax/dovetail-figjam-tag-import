import { createTitleNode } from "./createTitleNode";
import { createTagNode } from "./createTagNode";
import { getTagGroups } from "./getTagGroups";
import { getTags } from "./getTags";
import { ProjectTagsQueryResponse } from "./types";
import { initComponent } from "./tagComponent";

export const importTags = async (
  data: ProjectTagsQueryResponse,
  projectUrl: string
) => {
  const nodes: SceneNode[] = [];
  const tagComponent = await initComponent();

  if (!data) {
    figma.notify("No data found.");
    return;
  }

  const tags = getTags(data);
  const tagGroups = getTagGroups(data);

  if (tags.length === 0 || tagGroups.length === 0) {
    throw new Error("No tags or tag groups found.");
  }
  let xPosition = 0;
  let yPosition = 0;
  for (let i = 0; i < tagGroups.length; i++) {
    const tagGroup = tagGroups[i];
    let maxWidth = 0;
    const titleNode = await createTitleNode(tagGroup.title, xPosition, 0);
    nodes.push(titleNode);
    yPosition += titleNode.height + 50;
    const tagsInGroup = tags.filter((tag) => tag.tagGroupId === tagGroup.id);
    for (let j = 0; j < tagsInGroup.length; j++) {
      const tagNode = await createTagNode(
        tagComponent,
        tagsInGroup[j],
        tagGroup.title,
        xPosition,
        yPosition,
        projectUrl
      );
      nodes.push(tagNode);
      yPosition += tagNode.height + 25;
      maxWidth = Math.max(maxWidth, tagNode.width);
    }
    maxWidth = Math.max(maxWidth, titleNode.width);
    xPosition += maxWidth + 70;
    yPosition = 0;
  }
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
};
