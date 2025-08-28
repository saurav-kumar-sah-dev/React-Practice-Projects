import { useForm } from "react-hook-form";

function App() {

  function onSubmit(data) {
    console.log('Submitting data is', data);
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
      <input {...register('first',{required:true})} />
      </div>
      <br /><br />

      <div>
      <label>Middle Name: </label>
      <input {...register('middle')} />
      </div>
      <br /><br />

      <div>
      <label>Last Name: </label>
      <input {...register('last',{required:true})} />
      </div>
      <br /><br />

      <div>
      <label>Age:  </label>
      <input {...register('age',{required:true})} />
      </div>
      <br /><br />

      <div>
      <label>Roll: </label>
      <input {...register('roll',{required:true})} />
      </div>
      <br /><br />

     <button type="submit">Submit</button>

     </form>
    </>
  )
}

export default App
