import Styles  from "./addButton.module.css";

function AddButton() {
  return (
    <>
    <p className={Styles.box}>You must click this button.</p>
    <button className={Styles.box1}>click-me</button>
    </>
  )
}

export default AddButton;