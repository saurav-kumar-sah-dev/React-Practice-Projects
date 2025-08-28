import {useForm} from 'react-hook-form';
import Styles from './singup.module.css';

function Singup() {

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve),3000);
    console.log('SUbmitting form data', data);
    alert('Submitted form data.');
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <>

    <div className={Styles.Container}>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={Styles.input}>
          <label>First Name: </label>
          <input {...register('firstName',{required: 'First Name is required'})}
          className=  {errors.firstName ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.firstName && <p className={Styles.error_message}>{errors.firstName.message}</p> }

        <br />

        <div className={Styles.input}>
          <label>Middle Name: </label>
          <input {...register('middleName',{required: 'Middle Name is required'})}
          className={errors.middleName ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.middleName && <p className={Styles.error_message}>{errors.middleName.message}</p> }

        <br />


        <div className={Styles.input}>
          <label>Last Name: </label>
          <input {...register('lastName')}
          />
        </div>

        <br />


        <div className={Styles.input}>
          <label type='number' >Age: </label>
          <input {...register('age',{required: 'Age is required'})}
          className={errors.age ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.age && <p className={Styles.error_message}>{errors.age.message}</p> }

        <br />

        <div className={Styles.input}>
          <label>Gender: </label>
          <input {...register('gender',{required: 'Gender is required'})}
          className={errors.gender ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.gender && <p className={Styles.error_message}>{errors.gender.message}</p> }

        <br />

        <div className={Styles.input}>
          <label>Username: </label>
          <input {...register('username',{required: 'Username is required',
          minLength:{value:8,message:'Atlest 8 charcter required'},
          maxLength:{value:16,message:'Max length is 16 charcter'}
          })}
          className={errors.username ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.username && <p className={Styles.error_message}>{errors.username.message}</p> }

        <br />

        <div className={Styles.input}>
          <label>Password: </label>
          <input type='password' {...register('password',{required: 'Passsword is required',
            minLength: {value: 8,message:'Password atleast contain 8 charcter'},
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must include uppercase, lowercase, number, and special character',
              }
           })}
          className={errors.password ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.password && <p className={Styles.error_message}>{errors.password.message}</p> }

        <br />

        <div className={Styles.input}> 
          <label>Feedback: </label>
          <input {...register('feedback',{required: 'Feedback is required',
          minLength:{value:8,message:'Atlest 8 charcter required'},
          maxLength:{value:200,message:'Max length is 200 charcter'}
          })}
          className={errors.feedback ? Styles['err-msg'] : ''}
          />
        </div>

        {errors.feedback && <p className={Styles.error_message}>{errors.feedback.message}</p> }

        <br />

        <input type="submit" className={Styles.submitButton} disabled={isSubmitting} value={isSubmitting ? 'Submitting...' : 'Submit'} />

      </form>
    </div>

    </>
  )
}

export default Singup;