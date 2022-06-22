import * as React from "react";
import { useLeanTreeStore } from "./useLeanTreeStore";
import { leanTreeStoreContext } from "./leanTreeStoreContext";
import { LeanTreeNode } from "./LeanTreeNode";
import type { Node } from "./leanTree.types";

export type LeanTreeProps = {
  rootNodes: Node[];
  store: ReturnType<typeof useLeanTreeStore>;
};

export const LeanTree = (props: LeanTreeProps): React.ReactElement => {
  const elemRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const handleExpand = (e: any) => {
      e.stopPropagation();
    };
    const handleCollapse = (e: any) => {
      e.stopPropagation();
    };
    elemRef.current?.addEventListener("onExpand", handleExpand);
    elemRef.current?.addEventListener("onCollapse", handleCollapse);

    return () => {
      elemRef.current?.removeEventListener("onExpand", handleExpand);
      elemRef.current?.addEventListener("onCollapse", handleCollapse);
    };
  }, []);

  return (
    <leanTreeStoreContext.Provider value={props.store}>
      <leantree-group ref={elemRef}>
        {props.rootNodes.map((node) => (
          <LeanTreeNode key={node.id} node={node} />
        ))}
      </leantree-group>
    </leanTreeStoreContext.Provider>
  );
};
