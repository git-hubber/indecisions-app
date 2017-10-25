import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, clearRandomOption}) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
    onRequestClose={clearRandomOption}
    closeTimeoutMS={500}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={clearRandomOption}>Okay</button>
  </Modal>
);

export default OptionModal;