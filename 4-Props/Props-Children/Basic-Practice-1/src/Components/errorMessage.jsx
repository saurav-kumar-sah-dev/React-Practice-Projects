import Styles from './errorMessage.module.css'
import { BiMessageAltError } from "react-icons/bi";

const ErrorMessage = ({arr}) => {

  let emptyArray = (arr.length ===0 ? <p className={Styles.paragraph}>No data found! Please try again.</p> : null)
  return (
    <div className={Styles.errorContainer}>
      {/* <BiMessageAltError  className={Styles.errorIcon} /> */}
      {emptyArray}
    </div>
  )
}

export default ErrorMessage;