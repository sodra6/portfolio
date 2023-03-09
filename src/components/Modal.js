import React from "react";
import "../modal.scss";
function Modal(props) {
  const { open, close, title, imgSrc } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {title}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main onClick={close}>
            <img src={imgSrc} alt={title} title={title} />
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;
