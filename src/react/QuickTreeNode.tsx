import * as React from "react";
import { useContext } from "react";
import type { Node } from "./quickTree.types";
import { quickTreeStoreContext } from "./quickTreeStoreContext";

export type QuickTreeNodeProps = {
  node: Node;
};

export const QuickTreeNode = (props: QuickTreeNodeProps) => {
  const [state, dispatch] = useContext(quickTreeStoreContext);
  const { node } = props;
  const children = node.children();
  const hasChildren = children.length !== 0;
  return (
    <quicktree-node hasChildren={children.length !== 0}>
      <span slot="label">{node.content}</span>

      {hasChildren && (
        <quicktree-group>
          {children.map((node: any) => (
            <QuickTreeNode key={node.id} node={node} />
          ))}
        </quicktree-group>
      )}
    </quicktree-node>
  );
};
