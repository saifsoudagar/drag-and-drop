/*import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; 

const Card = ({ id, text }) => {
  const [expanded, setExpanded] = useState(false);
  const [cardText, setCardText] = useState(text);

  const handleShowMore = () => {
    setExpanded(!expanded);
  };

  const handleTextChange = (event) => {
    setCardText(event.target.value);
  };

  return (
    <Draggable>
      <div>
        <ResizableBox
          width={200}
          height={150}
          minConstraints={[100, 100]}
          maxConstraints={[400, 400]}
          className="box"
        >
          <div className="card-content">
            <textarea
              value={cardText}
              onChange={handleTextChange}
              rows={expanded ? 6 : 3}
              className="card-textarea"
            />
            <button onClick={handleShowMore}>
              {expanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default Card;

*/


import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Modal from 'react-modal';
import './Card.css';

// Set the root element for the modal
Modal.setAppElement('#root');

const Card = ({ id, text }) => {
  const [expanded, setExpanded] = useState(false);
  const [cardText, setCardText] = useState(text);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setIsModalOpen(true);
    }
  };

  const handleTextChange = (event) => {
    setCardText(event.target.value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Draggable>
      <div>
        <ResizableBox
          width={200}
          height={150}
          minConstraints={[100, 100]}
          maxConstraints={[400, 400]}
          className="box"
        >
          <div className="card-content">
            <textarea
              value={cardText}
              onChange={handleTextChange}
              rows={expanded ? 6 : 3}
              className="card-textarea"
              readOnly={!expanded}
            />
            <button onClick={handleShowMore}>
              {expanded ? setExpanded(!expanded) : 'Show More'}
            </button>
          </div>
        </ResizableBox>
        
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Edit Card"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Edit Card</h2>
          <textarea
            value={cardText}
            onChange={handleTextChange}
            rows={6}
            className="card-textarea modal-textarea"
          />
          <button onClick={handleCloseModal} className="close-modal-button">
            Save and Close
          </button>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Card;
