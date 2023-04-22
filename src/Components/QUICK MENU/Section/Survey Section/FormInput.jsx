import "./FormInput.css"


const FormInput = () => {
    return (
        <div className="formInput" style={{zIndex:99999}}>
            

            <input 
            className="input-box"
            type = "varchar" 
            name = "bird_id" 
            placeholder='Location'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar(20)" 
            name = "scientific_name" 
            placeholder='Date'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Record Method'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Start Time'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='How Long Does It Takes?'
            />
           
            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Distance'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Participants'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Notes(Direct to Notes Page for Storing)'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='Bird_id / Bird_name / Bird_types'
            />

            <br></br>
            <br></br>

            <input 
            className="input-box"
            type = "varchar" 
            name = "rare_id" 
            placeholder='rare?'
            />

            <br></br>
            <br></br>

            
        </div>
    )
}

export default FormInput