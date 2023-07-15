import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//start component function with capital letter
function Todo(props) {
  //first is initial value and second one is function that changes it
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //in js we can define function within function
  //define one for onClick event

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel= {closeModalHandler} onConfirm={closeModalHandler}/>}
      {/*NOTE THAT our own components doesnt have onClick handler, instead we
      have to create our own and use props to get it inside component class */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
