import './recordInput.css';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { useState, useEffect } from 'react';

import Map from './Map2';
import SearchBox from '../../Map Section/SearchBox';

const RecordInput = ({
  onDateChange,
  onStartTimeChange,
  onDurationChange,
  onDistanceChange,
  onAreaChange,
  onPartySizeChange,
  onCaptionChange,
  onObservationMethodChange,

  onLocationChange,
  
}) => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [observationMethod, setObservationMethod] = useState('');

  const [selectPosition, setSelectPosition] = useState(null);
  const [locations, setLocations] = useState([]);
  const [positionChanged, setPositionChanged] = useState(false);

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  }

  const handleObservationMethodChange = (event) => {
    setObservationMethod(event.target.value);
    console.log('Selected Observation Method:', event.target.value);
    onObservationMethodChange(event.target.value);
  };

  useEffect(() => {
    if (positionChanged) {
      onLocationChange(selectPosition);
      setPositionChanged(false);
      console.log('selectPosition: ', selectPosition);
    }
  }, [positionChanged, onLocationChange, selectPosition]);
  


  return (
    <div className="InputContainer">
      <div className="RecordMethodContainer">
        <FormControl>
          <FormLabel id="group-label">
            <span className="formlabel">Observation Method</span>
          </FormLabel>

          <RadioGroup
            onChange={handleObservationMethodChange}
            aria-labelledby="group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="1" control={<Radio />} label="Traveling" />
            <span className="desc">
              You traveled a specific distance — walking a trail, driving a
              refuge loop, field birding.
            </span>

            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Stationary"
            />
            <span className="desc">
              You stayed at a fixed location — watching from a window,
              hawkwatching, seawatching.
            </span>
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Historical"
            />

            <span className="desc">
              Birding was your primary purpose, but you cannot estimate start
              time, duration, and distance; use Traveling or Stationary if you
              can estimate these.
            </span>

            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Incidental"
            />

            <span className="desc">
              Birding was not your primary purpose — noting a bird while driving
              or gardening.
            </span>
          </RadioGroup>
        </FormControl>
      </div>

      <div className="OtherContainer">
        <Box sx={{ maxWidth: 'auto' }}>
          <div className="DatePickerContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>

                <DatePicker
                  fullWidth
                  label="Please Enter the Date"
                  color="success"
                  value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <input {...params.inputProps} />}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div className="DetailContainer">
            <TextField
              disabled={observationMethod === '1'}
              fullWidth
              className="field"
              id="startTime"
              label="Start Time (24-Hours)"
              color = "success"
              type="number"
              onChange={onStartTimeChange}

            />
    
            <TextField
              disabled={observationMethod === '2' || observationMethod === '4'}
              fullWidth
              className="field"
              id="duration"
              label="Duration (Minutes)"
              color="success"
              type="number"
              onChange={onDurationChange}
            />
    
            <TextField
              disabled={observationMethod === '2' || observationMethod === '4'}
              fullWidth
              className="field"
              id="distance"
              label="Distance (kilometers)"
              color="success"
              type="number"
              onChange={onDistanceChange}
            />
    
            <TextField
              disabled={observationMethod === '1' || observationMethod === '2'}
              fullWidth
              className="field"
              id="area"
              label="Area (hectares)"
              color="success"
              type="number"
              
              onChange={onAreaChange}
            />
    
            <TextField
              fullWidth
              className="field"
              id="partySize"
              label="Party Size"
              color="success"
              type="number"
              onChange={onPartySizeChange}
            />
          </div>
          <TextField
            fullWidth
            className="field"
            id="Checklist-Comments-input"
            label="Checklist Comments"
            color="success"
            multiline
            rows={6}
            onChange={onCaptionChange}
          />
        </Box>
        
          
        
      </div>
      <div >
        <div className="BoxContainer1">
        <SearchBox
          id="location"
          selectPosition={selectPosition}
          setSelectPosition={(pos) => {
          setSelectPosition(pos);
          setPositionChanged(true);
          }}
        />
        </div>
        <div className="MapContainer1">
        <Map
          id="location"
          selectPosition={selectPosition}
          setSelectPosition={(pos) => {
          setSelectPosition(pos);
          setPositionChanged(true);
          }}
          locations={locations}
        /> 
        </div>
      </div> 
    </div>

);
};

export default RecordInput;