import React, { useEffect } from 'react';
import './RightPanel.css';

const RightPanel = () => {
  const rellenarTablero = () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'filasNum');
    div.setAttribute('class', 'filasNum');
    document.getElementById('panelNum').appendChild(div);
    for (let i = 1; i < 91; i += 1) {
      const node = document.createElement('div');
      node.innerHTML = `<span id=${i} class="numerito">${i}</span>`;
      node.setAttribute('class', 'num');
      document.getElementById('filasNum').appendChild(node);
    }
  };
  useEffect(() => {
    rellenarTablero();
  }, []);
  return (
    <div className="panel_der">
      <div className="panelNum" id="panelNum"></div>

    </div>
  );
};
export default RightPanel;
