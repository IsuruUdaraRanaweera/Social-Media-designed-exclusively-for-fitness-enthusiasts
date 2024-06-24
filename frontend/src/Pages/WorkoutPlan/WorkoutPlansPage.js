import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WorkoutPlansPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [routines, setRoutines] = useState(['']);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddRoutine = () => {
    setRoutines([...routines, '']);
  };

  const handleRoutineChange = (index, value) => {
    const newRoutines = [...routines];
    newRoutines[index] = value;
    setRoutines(newRoutines);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || routines.some((routine) => !routine.trim())) {
      alert('Please fill in all fields and routines');
      return;
    }

    try {
      await axios.post('http://localhost:9000/api/workout-plans', {
        userId: 'user123',
        title,
        description,
        routines,
      });
      
      setTitle('');
      setDescription('');
      setRoutines(['']);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error creating workout plan:', error);
    }
  };

  return (
    <div className="container">
      <div className="form" style={{ padding: '20px', border: '3px solid #ccc', borderRadius: '20px' , marginTop: '60px'}}>
        <h1 style={{ marginBottom: '20px' , color:"blue", marginLeft: "150px", fontWeight: "bold"}}>Create Workout Plan</h1>
        {showSuccessMessage && <div className="success-message" style={{ color: 'green', marginBottom: '20px' }}>Workout plan added successfully!</div>}
        <form onSubmit={handleSubmit} className="form">
        <label style={{ color: 'white' }}>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder=" Enter title" style={{ marginBottom: '10px', padding: '5px', width: '100%', marginTop: "5px" , borderRadius: '10px' }} />
          <label style={{ color: 'white' }}>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder=" Enter description" style={{ marginBottom: '10px', padding: '5px', width: '100%', marginTop: "5px" , borderRadius: '10px' }} />
          <label style={{ color: 'white' }}>Routines:</label>
          {routines.map((routine, index) => (
            <input
              key={index}
              type="text"
              value={routine}
              onChange={(e) => handleRoutineChange(index, e.target.value)}
              placeholder={` Routine ${index + 1}`}
              style={{ marginBottom: '15px', padding: '10px', width: '100%' , marginTop: "5px" , borderRadius: '10px'}}
            />
          ))}
          <button type="button" onClick={handleAddRoutine} style={{ marginLeft: '30px', padding: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}> Add Routine </button>
          <button type="submit" style={{ marginLeft: "100px", padding: '5px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}> Create Workout plan </button>
          <Link to="/workout-plan-list" type='button' className="button" style={{ marginLeft: '100px', padding: '5px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}> Go to Workout plan list </Link>
        </form>
      </div>
    </div>
  );
};

export default WorkoutPlansPage;
