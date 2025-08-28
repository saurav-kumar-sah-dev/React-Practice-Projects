import {useForm} from 'react-hook-form';
import './App.css'

function App() {

 const  onSubmit =  async (data) => {
    await new Promise((resolve) => setTimeout(resolve), 2000)
    console.log('Submitting form data', data);
    alert('Submitted form data')
  }

   const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();


 

  return (
    <>

    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label>First Name: </label>
        <input {...register('first',{required: true,minLength: 6,maxLength: 50})} />
      </div>

      <br /><br />

      <div>
        <label>Middle Name: </label>
        <input {...register('middle',{required: 'Must required middle name'})} />
      </div>

      {errors.middle && <p>{errors.middle.message}</p> }

      <br /><br />

      <div>
        <label>Last Name: </label>
        <input {...register('last')} />
      </div>

      <br /><br />

      <div>
        <label>Age: </label>
        <input type='number' {...register('age',{required: true})} />
      </div>

      <br /><br />

      <div>
        <label>Roll: </label>
        <input type='number' {...register('roll',{required: true})} />
      </div>

      <br /><br />

      <div>
        <label>Password</label>
        <input {...register('password',{required: true, pattern: /^[A-Za-z]+$/i })} />
      </div>

      <br /><br />

       <div>
        <label>Skills</label>
        <input {...register('skill',{required: 'Must Enter atleast three',
          minLength:{value: 10, message:'Min length at least 10 letters'},
          maxLength:100})} 
          className= {errors.skill ? 'error-skill' : ''}
          />
        
      </div>

      {errors.skill && <p className='Error-message'>{errors.skill.message}</p> }

      <br /><br />

      
     <input type="submit"disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"} />   

    </form>
    
    </>
  )
}

export default App
