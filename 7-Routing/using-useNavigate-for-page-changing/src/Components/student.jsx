import {useParams} from 'react-router-dom';

export const Student = () => {
  const {id} = useParams();
  
  return (
    <div>
      StudentId = {id};
    </div>
  )
}