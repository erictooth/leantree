import * as React from "react";
import { useContext } from "react";
import type { Node } from "./leanTree.types";
import { leanTreeStoreContext } from "./leanTreeStoreContext";

export type LeanTreeNodeProps = {
  node: Node;
};

export const LeanTreeNode = (props: LeanTreeNodeProps) => {
  const [state, dispatch] = useContext(leanTreeStoreContext);
  const { node } = props;
  const children = node.children();
  const hasChildren = children.length !== 0;
  return (
    <leantree-node hasChildren={children.length !== 0}>
      <span slot="label">{node.content}</span>

      {hasChildren && (
        <leantree-group>
          {children.map((node: any) => (
            <LeanTreeNode key={node.id} node={node} />
          ))}
        </leantree-group>
      )}
    </leantree-node>
  );
};
