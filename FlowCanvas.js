// src/FlowCanvas.js
import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import './FlowCanvas.css';

const initialElements = []; // You can add initial elements if needed

const FlowCanvas = ({ cards }) => {
  const [elements, setElements] = useState(initialElements);

  const handleConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div className="flow-canvas">
      <ReactFlow
        elements={elements}
        onConnect={handleConnect}
        connectionLineStyle={{ stroke: 'black', strokeWidth: 2 }}
        snapToGrid
        snapGrid={[15, 15]}
      >
        <MiniMap
          nodeColor={(n) => {
            if (n.type === 'input') return 'red';
            if (n.type === 'output') return 'blue';
            return '#00ff00';
          }}
        />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;
