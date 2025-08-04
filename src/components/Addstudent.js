import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudent } from '../features/studentSlice';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const students = useSelector(state => state.students);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !id || students.some(s => s.id === id)) return;

    dispatch(addStudent({ name, id }));
    setName('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={id} onChange={e => setId(e.target.value)} placeholder="ID" />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;