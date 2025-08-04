import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const data = localStorage.getItem('students');
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
};

const studentSlice = createSlice({
  name: 'students',
  initialState: loadFromLocalStorage(),
  reducers: {
    addStudent: (state, action) => {
      const exists = state.find(s => s.id === action.payload.id);
      if (!exists && action.payload.name.trim()) {
        state.push(action.payload);
        saveToLocalStorage(state);
      }
    },
    removeStudent: (state, action) => {
      const updated = state.filter(s => s.id !== action.payload);
      saveToLocalStorage(updated);
      return updated;
    },
    editStudent: (state, action) => {
      const index = state.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveToLocalStorage(state);
      }
    },
  },
});

export const { addStudent, removeStudent, editStudent } = studentSlice.actions;
export default studentSlice.reducer;
