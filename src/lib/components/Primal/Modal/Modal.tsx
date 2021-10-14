import React, { FC, useState } from 'react';
import './Modal.css';

type ModalProps = {
  title: string;
  body: string;
};

const Modal: FC<ModalProps> = ({ title, body }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="p-btn-modal btn btn-info">
        Open
      </button>
      {modal && (
        <div className="p-overlay">
          <div className="p-modal">
            <div className="p-modal-contnt">
              <h2>{title}</h2>
              <p>
                {body}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                rerum natus, omnis explicabo doloremque voluptatem quis sequi
                dignissimos quibusdam esse ad ipsum consequuntur eius nihil
                iusto. Dolorum adipisci eum at!
              </p>
            </div>
            <button onClick={toggleModal} className="p-close-modal">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
