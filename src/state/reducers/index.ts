import {
  expandedNodesReducer,
  type ExpandedNodesState,
  type ExpandedNodesActions,
} from "./expandedNodesReducer";

export type RootState = {
  expandedNodes: ExpandedNodesState;
};

export type RootActions = ExpandedNodesActions;

export const initialState: RootState = {
  expandedNodes: new Set(),
};

export const rootReducer = (
  state: RootState,
  action: RootActions
): RootState => {
  return {
    expandedNodes: expandedNodesReducer(state.expandedNodes, action),
  };
};
