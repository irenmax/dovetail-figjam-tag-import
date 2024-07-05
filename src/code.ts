import { ProjectTagsQueryResponse } from "./types";
import { importTags } from "./importTags";

figma.showUI(__html__, {
  width: 800,
  height: 1000,
  themeColors: true,
});

figma.ui.onmessage = (e: {
  type: string;
  projectUrl: string;
  tagData: string;
}) => {
  console.log("code received message", e);
  if (e.type === "IMPORT") {
    if (!e.tagData) {
      figma.notify("Please provide the data of 'ProjectTagsPageQuery", {
        error: true,
      });
      return;
    }
    const tagData = JSON.parse(e.tagData) as ProjectTagsQueryResponse;
    importTags(tagData, e.projectUrl)
      .then(() => {
        figma.closePlugin();
      })
      .catch((error) => {
        figma.notify(error.message, { error: true });
      });
  }
};
