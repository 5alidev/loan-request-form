import "./Modal.css";

const Modal = ({ message, hide, setHideModal }) => {
  return (
    <div
      className={`modal-container ${hide.hide}`}
      onClick={() => {
        setHideModal({ ...hide, hide: "hide" });
      }}
    >
      <div className={`modal ${hide.error} ${hide.success}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
