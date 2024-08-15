import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge, removeElements } from 'react-flow-renderer';

const Diagram = ({ nodes, edges, onNodeChange, onEdgeChange }) => {
  const [elements, setElements] = useState([...nodes, ...edges]);

  const onConnect = (params) => {
    const newEdge = addEdge(params, elements);
    setElements(newEdge);
    onEdgeChange(newEdge);
  };

  const onElementsRemove = (elementsToRemove) => {
    const newElements = removeElements(elementsToRemove, elements);
    setElements(newElements);
    onNodeChange(newElements);
  };

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        deleteKeyCode={46} // 'delete' key
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
