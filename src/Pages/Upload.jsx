import React from 'react'

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
  return (
    <div className=' flex'>
       
       <div className=' mt-8 ml-[3rem]'>
        <h1 className=' font-bold text-2xl'>
          Upload Events
        </h1>

        <div className=' mt-[2rem]'>
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
          <input type="date" name="eventDate" id="eventDate" style={inputField} />
          
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

        </div>

       </div>


    </div>
  )
}

export default Upload;