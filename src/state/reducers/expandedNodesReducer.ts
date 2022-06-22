export type ExpandedNodesState = Set<string>;
export type ExpandedNodesActions =
  | {
      type: "NODE_EXPAND";
      id: string;
    }
  | {
      type: "NODE_COLLAPSE";
      id: string;
    }
  | {
      type: "NODE_TOGGLE";
      id: string;
    };

export const expandedNodesReducer = (
  state: ExpandedNodesState,
  action: ExpandedNodesActions
): ExpandedNodesState => {
  switch (action.type) {
    default:
      return state;
  }
};
