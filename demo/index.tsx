import React from "react";
import ReactDOM from "react-dom";
import "quicktree/dist-esm/element";
import {
  QuickTree,
  useQuickTreeStore,
  type Node,
} from "quicktree/dist-esm/react";
import sampleData from "./sampleData.json";
import "./index.css";

const dataToNode = (nodeId, node: any, data: any): Node => {
  const children = () => {
    switch (node.type) {
      case "group":
        return node.contains.map((nodeId) =>
          dataToNode(nodeId, data.nodes[nodeId], data)
        );
      case "table":
        return node.fields.map((field) => ({
          id: field.name,
          content: field.name,
          children: () => [],
        }));
      default:
        return [];
    }
  };
  return {
    id: nodeId,
    content: node.name,
    children: children,
  };
};

const App = () => {
  return (
    <QuickTree
      store={useQuickTreeStore()}
      rootNodes={sampleData.rootNodes.map((nodeId) => {
        return dataToNode(nodeId, sampleData.nodes[nodeId], sampleData);
      })}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
