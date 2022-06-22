import { createContext } from "react";
import { initialState } from "../state";
import { useLeanTreeStore } from "./useLeanTreeStore";

export const leanTreeStoreContext = createContext<
  ReturnType<typeof useLeanTreeStore>
>([initialState, () => undefined]);
