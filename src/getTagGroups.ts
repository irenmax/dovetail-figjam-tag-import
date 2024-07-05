import { ProjectTagsQueryResponse, TagGroup } from "./types";

export const getTagGroups = (data: ProjectTagsQueryResponse): TagGroup[] => {
  try {
    return data.data.tagBoard.tagGroups.nodes;
  } catch (error) {
    return [];
  }
};
