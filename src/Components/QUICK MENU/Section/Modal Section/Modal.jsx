import "./modal.css"
import DropImage from "../Container/DropImage/DropImage"
import BirdDetail from "../Container/BirdDetails/BirdDetail"
import BirdQuantity from "../Container/Quantity/BirdQuantity"
import RecordInput from "../Container/RecordInput/RecordInput"
import {RxCross2} from 'react-icons/rx'
import { useState,useEffect } from 'react';
import axios from 'axios'; // Import Axios library

const Modal = ({ open, onClose }) => {
  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [area, setArea] = useState('');
  const [partySize, setPartySize] = useState('');
  const [caption, setCaption] = useState('');
  const [observationMethod, setObservationMethod] = useState('');
  const [selectedBird, setSelectedBird] = useState('');
  const [selectedBirdQuantity, setSelectedBirdQuantity] = useState('');
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState([]);
  
  const resetForm = () => {
    setDate(null);
    setStartTime('');
    setDuration('');
    setDistance('');
    setArea('');
    setPartySize('');
    setCaption('');
    setObservationMethod('');
    setSelectedBird('');
    setSelectedBirdQuantity('');
    setPhoto('');
    setLocation([]);
  };


  const handleSubmitClick = () => {
    // Create an object with the form data
    
    if (!photo || !observationMethod || !selectedBirdQuantity || !date || !partySize) {
      console.log( 'location', location, 'photo:', photo, 'observationmethod:', observationMethod, 'selectedBirdQ:', selectedBirdQuantity, 'partySize:',partySize, 'date:', date)
      alert("Please fill in all required fields (photo, observation method, bird number, party size and date).");
      return;
    }

    const formData = {
      SCI_NAME: selectedBird ? selectedBird.map(bird => bird.value) : '',
      quantity_id: selectedBirdQuantity.value,
      date: date?.format('YYYY/MM/DD'),
      observation_id: observationMethod,
      photo,
      location: [
        location.lat,
        location.lon
      ]
    };
    
    if (startTime) {
      formData.startTime = startTime;
    }

    if (duration) {
      formData.duration = duration;
    }

    if (distance) {
      formData.distance = parseFloat(distance);
    }
        
    if (area) {
      formData.area = parseFloat(area);
    }

    if (partySize) {
      formData.partySize = parseInt(partySize);
    }

    if (caption) {
      formData.caption = caption;
    }
  

    console.log(JSON.stringify(formData, null, 2));

    // Call your API with the formData using Axios
    axios.post('http://localhost:5000/api/post', formData, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}` 

      }
    })
      .then(response => {
        // Handle the response from the backend
        console.log(response.data);
        alert('Post has been created');
        onClose();
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  useEffect(() => {
    // Reset form data when the modal is closed
    if (!open) {
      resetForm();
    }
  }, [open]);


  if(!open) return null;
  return (
    <div className='overlay' >
      <div className="modalContainer" >

        <div className="modalLeft" >
          <DropImage setPhoto={setPhoto} />

          <BirdDetail selectedBird={selectedBird} setSelectedBird={setSelectedBird} />

          <BirdQuantity
            selectedBirdQuantity={selectedBirdQuantity}
            setSelectedBirdQuantity={setSelectedBirdQuantity}
          />
        </div>

        <div className="modalRight" >
          <RxCross2 onClick={onClose} className="closeBtn"/>

          <RecordInput
            onDateChange={(date) => setDate(date)}
            onStartTimeChange={e => setStartTime(e.target.value)}
            onDurationChange={e => setDuration(e.target.value)}
            onDistanceChange={e => setDistance(e.target.value)}
            onAreaChange={e => setArea(e.target.value)}
            onPartySizeChange={e => setPartySize(e.target.value)}
            onObservationMethodChange={setObservationMethod}
            onCaptionChange={e => setCaption(e.target.value)}
            onLocationChange={location => setLocation(location)}
          />
          
          <button className="btnSubmit" onClick={handleSubmitClick}>
            <span className="btnSubmitText" >Submit</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal;