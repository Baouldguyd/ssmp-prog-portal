import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';

const inputField = {
    width: '60vw',
    height: '2rem',
    border: '1px solid rgb(59,130,246) ',
    padding: '5px',
    borderRadius: '5px'
}

const label ={
  fontSize : '1rem',
  fontWeight: 'semi-bold'
}


const Upload = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventInfo: '',
    eventImage: null, // Store the uploaded file
    // ... other event details
    eventUrl : '',
    eventDate: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0]; // Get the selected image file
    setEventData((prevData) => ({ ...prevData, eventImage: imageFile }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('authToken');

    const formData = new FormData();
    formData.append('eventName', eventData.eventName);
    formData.append('eventInfo', eventData.eventInfo);
    formData.append('eventImage', eventData.eventImage);
    formData.append('eventUrl', eventData.eventUrl);
    formData.append('eventDate', eventData.eventDate)
    // ... append other form data

    try {
      const response = await axios.post(
        'https://ssmp-api.onrender.com/api/v1/events/eventCreation',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        }
      );

      if (response.status === 201) {
        console.log('Event created successfully!');
        window.alert('Event created successfully!')
        // Handle success
      } else {
        console.log('Failed to create event.');
        window.alert('Failed to create event.')
        // Handle error cases
      }
    } catch (error) {
      console.error('An error occurred:', error);
      window.alert('An error occurred')
      // Handle error cases
    }
  };



  return (
    <div className=' flex'>
       <Sidebar/>
       
       <div className=' mt-8 ml-[3rem]'>
        <h1 className=' font-bold text-2xl'>
          Upload Events
        </h1>

        <div className=' mt-[2rem]'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="eventName" style={label}>Name of Event</label> <br />
          <input type="text" name="eventName" id="eventName" style={inputField} />
          <br /> <br />

          <label htmlFor="eventInfo" style={label}>Event Info</label><br />
          <input type="text" name="eventInfo" id="eventInfo" style={inputField} />
          
          <br /> <br />

          <label htmlFor="event" style={label}>Event Image</label> <br />
          <input type="image" src="" alt="" name='eventImage' id='eventImage' style={inputField} />
          
          <br /><br />
          
          <label htmlFor="eventDate" style={label}>Event Date</label> <br />
          <input type="file"
          name="eventImage"
          accept="image/*"
          onChange={handleImageUpload}
          style={inputField} />
          
          <br /><br />

          <label htmlFor="eventUrl" style={label}>Event Link</label> <br />
          <input type="text" name="eventUrl" id="eventUrl" style={inputField} />
          <br />

          
          <input type="submit" value="Upload Event" style={{
            height: '2rem',
            width: '8rem',
            backgroundColor: 'rgb(59,130,246)',
            color: 'white',
            marginTop: '1rem',
            borderRadius: '10px'
          }}/>
          </form>

        </div>

       </div>


    </div>
  )
}

export default Upload;