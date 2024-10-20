
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";



import './PrimaryForm.css'




const PrimaryForm = ({ setPrimaryData }) =>{
    const [title, setTitle] = useState('');
    const [currency] = useState('INR'); //FIXED
    const [participantName, setParticipantName] = useState('');
    const [participants, setParticipants] = useState([]);
    const navigate = useNavigate(); //navigation hook


    const addParticipant = () =>{
        if (participantName){
        setParticipants([...participants, participantName]);
        }else{
            alert("Please add participant name. ")
        }
    }

    const removeParticipant = (index) => {
        const updatedParticipants = participants.filter((_, i) => i !== index);
        setParticipants(updatedParticipants);
    }

    const handleNext = () =>{
        if(title && participants.length >= 2){
            setPrimaryData({title, currency, participants});
            navigate("/entry"); 
        }else{
            alert("Please enter the title and add at least two participant.")
        }
    }

    return(

        <div className="container">
            <h2 className="heading">Initial Details</h2>

            {/* for title */}
            <div className="inputGroup">
                <label className="label">Title</label>
                <input 
                    type="text" 
                    placeholder="Enter Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                />
            </div>

            {/* for currency */}
            <div className="inputGroup">
                <label className="label">Currency</label>
                <input 
                    type="text" 
                    readOnly  
                    value={currency}
                    className="input"
                />
            </div>

            {/* for participants */}
            <div style={{marginTop: '20px'}} >
                <label className="label" style={{marginBottom: '1px'}}>Participant Name</label>
                <input 
                    type="text" 
                    placeholder="Participants Name"
                    value={participantName}
                    onChange={(e) => setParticipantName(e.target.value)}
                    className="input" 
                />
                <button className="addButton" onClick={addParticipant}>Add</button>
            </div>
            {/* participants list */}
            <ul className="list">
                {participants.map((participant, index) =>(
                    <li key={index} className="listItem">
                        {participant}
                        <button className="removeButton" onClick={() => removeParticipant(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button className="nextButton" onClick={handleNext}>Next</button>
        </div>
    )
}

export default PrimaryForm;