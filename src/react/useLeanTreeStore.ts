import { useReducer } from "react";
import {
  rootReducer,
  initialState as initialRootState,
  type RootState,
} from "../state";
export const useLeanTreeStore = (initialState: RootState = initialRootState) =>
  useReducer(rootReducer, initialState);
