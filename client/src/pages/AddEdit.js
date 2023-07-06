import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './AddEdit.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  date: '',
  articleNumber: '',
  jurisdiction: '',
  description: '',
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { date, articleNumber, jurisdiction, description } = state;

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!date || !articleNumber || !jurisdiction) {
      toast.error('Please provide value into each input field');
    } else {
      axios
        .post('http://localhost:5000/api/gnie/updateRequests/post', {
          date,
          articleNumber,
          jurisdiction,
          description,
        })
        .then(() => {
          setState({
            date: '',
            articleNumber: '',
            jurisdiction: '',
            description: '',
          });
        })
        .catch(err => toast.error(err.response.data));
      setTimeout(() => navigate('/'), 500);
    }
  };

  const handleInputChange = e => {
    const { date, value } = e.target;
    setState({ ...state, [date]: value });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor='date'>Date</label>
        <input
          type='text'
          id='date'
          name='date'
          placeholder='Enter yyyy/mm/dd'
          value={date}
          onChange={handleInputChange}
        />
        <label htmlFor='articleNumber'>Article Number</label>
        <input
          type='text'
          id='articleNumber'
          name='articleNumber'
          placeholder='Enter Article Number'
          value={articleNumber}
          onChange={handleInputChange}
        />
        <label htmlFor='jurisdiction'>Jurisdiction</label>
        <input
          type='text'
          id='jurisdiction'
          name='jurisdiction'
          placeholder='Enter Jurisdiction'
          value={jurisdiction}
          onChange={handleInputChange}
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          name='description'
          placeholder='Enter Description'
          value={description}
          onChange={handleInputChange}
        />

        <input type='submit' value='Save' />
        <Link to='/'>
          <input type='button' value='Go Back' />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
