import React from 'react';

export const ExpenseList = ({ expenses, onDelete, totalExpense }) => {
    return (
        <div className="expenses">
            <h3>Expenses Articles:</h3>
            {expenses.map((expense) => (
                <div key={expense.id} className="expense-item">
                    <p>{expense.description} = {expense.amount}$</p>
                    <p>{expense.date}</p>
                    <button onClick={() => onDelete(expense.id)}>Delete</button>
                </div>
            ))}
            <h4>Total Expenses Amount = {totalExpense} $</h4>
        </div>
    );
}

