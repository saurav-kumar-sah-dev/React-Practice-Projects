import { useParams } from "react-router-dom"

export const StudentInfo = () => {

  const {name,id} = useParams();
  return (
    <div>
     <p>Student Name: {name}</p>
     <p>Student Id: {id}</p>
    </div>
  )
} 