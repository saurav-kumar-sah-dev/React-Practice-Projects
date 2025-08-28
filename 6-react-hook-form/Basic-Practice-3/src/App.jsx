import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log('Submitting form data', data);
    alert('form is submitted');
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            {...register('first', { required: 'It is required to fill' })}
            className={errors.first ? 'input-field err-msg' : 'input-field'}
          />
          {errors.first && <p className="error-message">{errors.first.message}</p>}
        </div>

        <div className="form-group">
          <label>Middle Name</label>
          <input
            {...register('middle', { required: 'It is required to fill' })}
            className={errors.middle ? 'input-field err-msg' : 'input-field'}
          />
          {errors.middle && <p className="error-message">{errors.middle.message}</p>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input {...register('last')} className="input-field" />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            {...register('username', {
              required: 'It is required to fill',
              minLength: { value: 10, message: 'Min Length atleast 10 letters' },
              maxLength: { value: 50, message: 'Max length atleast 50 letters' },
            })}
            className={errors.username ? 'input-field err-msg' : 'input-field'}
          />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password must be required',
              minLength: { value: 8, message: 'Password must contain 8 charcter' },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must include uppercase, lowercase, number, and special character',
              },
            })}
            className={errors.password ? 'input-field err-msg' : 'input-field'}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            {...register('age', { required: true })}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Roll</label>
          <input
            type="number"
            {...register('roll', { required: 'It is required to fill' })}
            className={errors.roll ? 'input-field err-msg' : 'input-field'}
          />
          {errors.roll && <p className="error-message">{errors.roll.message}</p>}
        </div>

        <div className="form-group">
          <label>Skills</label>
          <input
            {...register('skill', {
              minLength: { value: 20, message: 'Min length atlest 20' },
            })}
            className={errors.skill ? 'input-field err-msg' : 'input-field'}
          />
          {errors.skill && <p className="error-message">{errors.skill.message}</p>}
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default App;
