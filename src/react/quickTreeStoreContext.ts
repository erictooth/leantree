import { createContext } from "react";
import { initialState } from "../state";
import { useQuickTreeStore } from "./useQuickTreeStore";

export const quickTreeStoreContext = createContext<
  ReturnType<typeof useQuickTreeStore>
>([initialState, () => undefined]);
