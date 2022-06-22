export type NodeId = string;

export type Node = {
  id: NodeId;
  content: JSX.Element | string;
  children: () => Node[];
  childrenSize: number;
  childrenLoading?: boolean;
  childrenError?: boolean;
  props?: Record<string, any>;
};
