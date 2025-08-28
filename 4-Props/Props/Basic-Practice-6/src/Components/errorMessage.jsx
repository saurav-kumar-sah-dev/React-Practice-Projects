import Styles from './errorMessage.module.css'

const ErrorMessage = ({use}) => {

  let emptyArray = (use.length ===0 ? <p className={Styles.paragraph}>No data found! Please try again.</p> : null)
  return (
    <div >
      {emptyArray}
    </div>
  )
}

export default ErrorMessage;