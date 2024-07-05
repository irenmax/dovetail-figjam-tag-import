import { ProjectTagsQueryResponse, Tag } from "./types";

export const getTags = (data: ProjectTagsQueryResponse): Tag[] => {
  try {
    return data.data.tagBoard.tags.nodes;
  } catch (error) {
    return [];
  }
};
