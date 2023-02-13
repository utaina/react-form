import "./Modal.css"
import Button from "../Button/Button";

export default function Modal({ onClose }) {
    return (
      <div className='wrapper'>
        <div className="modal">
        <p>Данные заполнены успешно</p>
        <Button handelClick={onClose} name='Закрыть'></Button>
      </div>
      </div>
    );
  }
  