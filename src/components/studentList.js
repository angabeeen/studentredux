
import { useDispatch, useSelector } from 'react-redux';
import { removeStudent, editStudent } from '../features/studentSlice';

const StudentList = () => {
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  return (
    <ul>
      {students.map(s => (
        <li key={s.id}>
          {s.name} (ID: {s.id}) 
          <button onClick={() => dispatch(removeStudent(s.id))}>Delete</button>
          <button onClick={() => dispatch(editStudent(s.id))}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
