import React, { Children } from "react";
import plus from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/plus.svg"
import minus from "../../../00 RECURSOS PROYECTO SPRINT 2/icons/minus.svg"
import { StyleDiv } from "./StylePassengersModal";

const Modal = ({ Children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <StyleDiv>
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>

                <div>
                    <div className="passengerType">
                        <h2>Adultos</h2>
                        <h3>(13 + años)</h3>
                    </div>

                    <div>
                        <button className="countButton">
                            <img src={plus} alt="plus" />
                        </button>
                        <h2>0</h2>
                        <button className="countButton">
                            <img src={minus} alt="minus" />
                        </button>
                    </div>

                </div>

                <div>
                    <div className="passengerType">
                        <h2>Niños</h2>
                        <h3>(2 a 12 años)</h3>
                    </div>

                    <div>
                        <button className="countButton">
                            <img src={plus} alt="plus" />
                        </button>
                        <h2>0</h2>
                        <button className="countButton">
                            <img src={minus} alt="minus" />
                        </button>
                    </div>

                </div>

                <div>
                    <div className="passengerType">
                        <h2>Bebés</h2>
                        <h3>(0 a 2 años)</h3>
                    </div>

                    <div>
                        <button className="countButton">
                            <img src={plus} alt="plus" />
                        </button>
                        <h2>0</h2>
                        <button className="countButton">
                            <img src={minus} alt="minus" />
                        </button>
                    </div>

                </div>
                {Children}
            </div>

        </article>

        </StyleDiv>
    );
}

export default Modal;