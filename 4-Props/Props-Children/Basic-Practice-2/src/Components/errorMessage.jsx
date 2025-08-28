import Styles from './errorMessage.module.css'

const ErrorMessage = ({arr}) => {

   let error = (arr.length===0 && <p className={Styles.paragraph}>No data found! Please try again.</p>)

  return (

    <div className={Styles.errorContainer}>

     {error}
     
    </div>
  )
}

export default ErrorMessage;