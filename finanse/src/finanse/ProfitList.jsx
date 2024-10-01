import React from 'react';

export const ProfitList = ({ profits, onDelete, totalProfit }) => {
    return (
        <div className="profits">
            <h3>Profits Articles:</h3>
            {profits.map((profit) => (
                <div key={profit.id} className="profit-item">
                    <p>{profit.description} = {profit.amount}$</p>
                    <p>{profit.date}</p>
                    <button onClick={() => onDelete(profit.id)}>Delete</button>
                </div>
            ))}
            <h4>Total Profit Amount = {totalProfit} $</h4>
        </div>
    );
}
