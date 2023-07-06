import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/gnie/updateRequests'
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ marginTop: '150px' }}>
      <Link to='/addContact'>
        <button className='btn btn-contact'>Add Contact</button>
      </Link>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>No.</th>
            <th style={{ textAlign: 'center' }}>Date</th>
            <th style={{ textAlign: 'center' }}>Article Number</th>
            <th style={{ textAlign: 'center' }}>Jurisdiction</th>
            <th style={{ textAlign: 'center' }}>Description</th>
            <th style={{ textAlign: 'center' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope='row'>{index + 1}</th>
                <td>{item.date}</td>
                <td>{item.article_number}</td>
                <td>{item.jurisdiction}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <button className='btn btn-delte'>Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
