
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './EntrySection.css'



const EntrySection = ({ primaryData, setExpensesData }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [paidBy, setPaidBy] = useState('');
    const navigate = useNavigate();

    const handelAddExpenses = () =>{
        if(description && amount && paidBy){
            const expense = { description, amount, paidBy };
            setExpensesData((prevExpenses) => [...prevExpenses, expense]);
            
            //clearing input after adding the expense
            setDescription('');
            setAmount('');
            setPaidBy('');
            alert('Information Registered Successfuly!')
        }else{
            alert('please fill in all fields.');
        }
    }

    const handleNext = () => {
        navigate("/summary");
    }

    return (
        <div className="entry-container">
            
            <h2 className="entry-headin">Entry Section</h2>
            <div className="entry-inputGroup">
                <label className="entry-label">Discription</label>
                <input 
                    type="text" 
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="entry-input"
            />
            </div>
            <div className="entry-inputGroup">
                <label className="entry-label">Amount</label>
                <input 
                    type="text" 
                    placeholder="enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="entry-input"
                />
            </div>
            <div className="entry-inputGroup">
                <label className="entry-label">Participant</label>
                <select 
                    value={paidBy}
                    onChange={(e) => setPaidBy(e.target.value)}
                >
                    <option value="">Select Participant</option>
                    {primaryData.participants.map((participant, index) =>(
                        <option key={index} value={participant}>{participant}</option>
                    ))}
                </select>
            </div>
            <button onClick={handelAddExpenses} className="addButton">Add</button>
            <button className="entryNextButton" onClick={handleNext}>Next</button>
        </div>
    )

}

export default EntrySection;