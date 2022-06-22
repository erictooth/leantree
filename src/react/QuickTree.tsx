import * as React from "react";
import { useQuickTreeStore } from "./useQuickTreeStore";
import { quickTreeStoreContext } from "./quickTreeStoreContext";
import { QuickTreeNode } from "./QuickTreeNode";
import type { Node } from "./quickTree.types";

export type QuickTreeProps = {
  rootNodes: Node[];
  store: ReturnType<typeof useQuickTreeStore>;
};

export const QuickTree = (props: QuickTreeProps): React.ReactElement => {
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
    <quickTreeStoreContext.Provider value={props.store}>
      <quicktree-group ref={elemRef}>
        {props.rootNodes.map((node) => (
          <QuickTreeNode key={node.id} node={node} />
        ))}
      </quicktree-group>
    </quickTreeStoreContext.Provider>
  );
};
