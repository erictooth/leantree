export type NodeId = string;

export type Node = {
  id: NodeId;
  content: JSX.Element | string;
  children: () => Node[];
  childrenLoading?: boolean;
  childrenError?: boolean;
};
