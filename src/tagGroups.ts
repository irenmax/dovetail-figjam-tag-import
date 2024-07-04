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
const tagGroups: TagGroup[] = [
  {
    id: "045a45fa-4546-4e15-ad8e-8571e78d3eaa",
    createdAt: "2024-06-07T06:17:56.653675+00:00",
    deleted: false,
    deletedCascade: false,
    title: "organization on TT",
    color: null,
    authorId: "ff94236d-cfce-41cf-b9fb-49642cb648a3",
    rank: 458752,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "38fbd874-c47b-4450-9388-1af2e9280a6d",
    createdAt: "2024-06-06T16:50:20.928115+00:00",
    deleted: false,
    deletedCascade: false,
    title: "CM hierarchy",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 327680,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "4450749c-2eae-4ad1-956c-6bac64d2163e",
    createdAt: "2024-07-04T05:53:35.383077+00:00",
    deleted: false,
    deletedCascade: false,
    title: "CM content",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 524288,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "6066b6b6-1631-4b34-a8cb-93e089896af3",
    createdAt: "2024-07-04T06:25:12.22295+00:00",
    deleted: false,
    deletedCascade: false,
    title: "CM structure",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 655360,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "827b0f52-42bb-43c9-82fb-df2a4e472146",
    createdAt: "2024-06-06T16:52:12.02427+00:00",
    deleted: false,
    deletedCascade: false,
    title: "externalization",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 393216,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "9425f1bd-a77b-493d-b881-1872fb233ba0",
    createdAt: "2024-06-06T12:28:48.750054+00:00",
    deleted: false,
    deletedCascade: false,
    title: "Strategy / Workflow",
    color: null,
    authorId: "ff94236d-cfce-41cf-b9fb-49642cb648a3",
    rank: 65536,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "a26e2f30-aeda-4d52-b379-c91997725e28",
    createdAt: "2024-06-06T12:29:19.330622+00:00",
    deleted: false,
    deletedCascade: false,
    title: "difficulty with the task",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 131072,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "c8100ad7-ca86-4478-99be-892ee78f9a93",
    createdAt: "2024-06-06T12:43:52.097855+00:00",
    deleted: false,
    deletedCascade: false,
    title: "difficulties in externalization",
    color: null,
    authorId: "ff94236d-cfce-41cf-b9fb-49642cb648a3",
    rank: 262144,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "dc142973-78ee-4d42-9726-ab08d58b9127",
    createdAt: "2024-07-04T06:25:00.692744+00:00",
    deleted: false,
    deletedCascade: false,
    title: "level of detail",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 589824,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "e0548fc9-3281-4548-a2a7-fea9199ca00e",
    createdAt: "2024-06-06T12:27:21.410307+00:00",
    deleted: false,
    deletedCascade: false,
    title: "General",
    color: null,
    authorId: "ff94236d-cfce-41cf-b9fb-49642cb648a3",
    rank: 0,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
  {
    id: "eafbab70-349e-425b-91cb-fe6f07ef3606",
    createdAt: "2024-06-06T12:41:30.846773+00:00",
    deleted: false,
    deletedCascade: false,
    title: "relationship CM <> TT",
    color: null,
    authorId: "4c7ef49c-3e2e-447b-bb2f-e3643378e891",
    rank: 196608,
    tagBoardId: "bcd412b6-1ac2-48f8-84f5-41b2e4e19548",
    __typename: "TagGroup",
  },
];

export default tagGroups;
