/* eslint-disable */
// @ts-nocheck

import "../styles/Modal.css";

function Modal({ setOpenModal, BodySubject, handleContinue }) {
  return (
    <div>
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure?</h1>
        </div>
        <div className="body">
          <p>{BodySubject}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={() => {handleContinue()}}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
