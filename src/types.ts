export type Tag = {
  id: string;
  cachedAclByCachedAclId: {
    id: string;
    permissions: string;
    teamId: string;
    __typename: string;
  };
  color: string;
  deleted: boolean;
  deletedCascade: boolean;
  title: string;
  authorId: string;
  tagGroupId: string;
  updatedAt: string;
  projectId: string;
  highlightCount: number;
  rank: number;
  tagBoardId: string;
  __typename: string;
};
export type TagGroup = {
  id: string;
  createdAt: string;
  deleted: boolean;
  deletedCascade: boolean;
  title: string;
  color: string | null;
  authorId: string;
  rank: number;
  tagBoardId: string;
  __typename: string;
};

export type ProjectTagsQueryResponse = {
  data: {
    project: {
      archived: boolean;
      authorId: string;
      contributingUserIds2: string[];
      deleted: boolean;
      workspaceTemplate: null;
      id: string;
      title: string;
      color: string;
      icon: string;
      extensionType: null;
      tagBoardsByProjectId: {
        nodes: {
          id: string;
          __typename: string;
        }[];
        __typename: string;
      };
      extensionLinks: {
        nodes: unknown[];
        __typename: string;
      };
      __typename: string;
    };
    tagBoard: {
      id: string;
      createdAt: string;
      deleted: boolean;
      deletedCascade: boolean;
      project: {
        extensionType: null;
        title: string;
        workspaceTemplate: null;
        id: string;
        linkedExtensions: {
          totalCount: number;
          __typename: string;
        };
        __typename: string;
      };
      tags: {
        nodes: Tag[];
        __typename: string;
      };
      tagGroups: {
        nodes: TagGroup[];
        __typename: string;
        totalCount: 11;
      };
    };
    __typename: string;
  };
};
