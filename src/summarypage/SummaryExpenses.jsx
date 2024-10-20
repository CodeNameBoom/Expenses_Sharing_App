
import './SummaryExpenses.css';
import {useNavigate} from "react-router-dom";




const SummaryExpenses = ({ primaryData , expensesData  }) => {
    const { title, participants } = primaryData;
    const navigate = useNavigate();

    //calculate total expenses
    const totalExpense = expensesData.reduce((sum, expense) => sum + parseFloat (expense.amount), 0);


    //how much participants should pay
    const splitAmount = totalExpense / (participants?.length || 1);

    //how much participant owe/should received
    const participantBalances = participants?.map(participant => {
        const paid = expensesData
            .filter(expense => expense.paidBy === participant)
            .reduce((sum, expense) => sum + parseFloat(expense.amount), 0);


            const balance = paid- splitAmount;
            return { participant, paid, balance }

        
    })

    const handleBack = () => {
        navigate("/");
    }





    return(
        <div className="summary-container">
            <h2 className='summary-heading'>Summary for "{title}"</h2>

            {/* total expense */}
            <div className="total-expenses">
                <h3>Total Expenses: Rs {totalExpense.toFixed(2)}</h3>
            </div>

            {/* split amount */}
            <div className="split-amount">
                <h3>Each participant should pay: Rs {splitAmount.toFixed(2)}</h3>
            </div>

            {/* expenses table */}
            <h3>Expense Details</h3>
            <table className="expenses-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Paid By</th>
                    </tr>
                </thead>
                <tbody>
                    {expensesData?.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.description}</td>
                            <td>Rs {parseFloat(expense.amount).toFixed(2)}</td>
                            <td>{expense.paidBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* participant balance */}
            <h3>Participants Balances</h3>
            <table className="balances-table">
                <thead>
                    <tr>
                        <th>Participant</th>
                        <th>Paid</th>
                        <th>Balance (Owe/Receives)</th>
                    </tr>
                </thead>
                <tbody>
                    {participantBalances?.map((participantData, index) =>
                         <tr key={index}>
                            <td>{participantData.participant}</td>
                            <td>Rs {participantData.paid.toFixed(2)}</td>
                            <td style={{ color: participantData.balance >= 0 ? 'green' : 'red'}}>
                                {participantData.balance >=0
                                ? `Receive Rs ${participantData.balance.toFixed(2)}`
                                : `Owes Rs ${Math.abs(participantData.balance).toFixed(2)}`}
                            </td>
                         </tr>
                    )}
                </tbody>
            </table>
            <button className="button" onClick={handleBack}>Back</button>
        </div>


    )
    

}

export default SummaryExpenses;





