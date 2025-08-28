import Styles from './info.module.css';

function StudentInfo() {

  let name = 'Saurav Kumar Sah';
  let roll=62;
  let age=20;

  return (
    <>
    <div className={Styles.heading}>
    <h1>Here information about Student.</h1>
    <p className={Styles.name}>Name: {name}</p>
    <p className={Styles.roll}>Roll: {roll}</p>
    <p className={Styles.age}>Age: {age}</p>
    </div>
    </>
  )
}

export default StudentInfo;