import React, { useState } from 'react';
import {Balance} from './Balance.jsx';
import {ProfitList} from './ProfitList.jsx';
import {ExpenseList} from './ExpenseList.jsx';
import {TransactionForm} from './TransactionForm.jsx';
import './index.css';

export const App = () => {
    const [balance, setBalance] = useState(135);
    const [profits, setProfits] = useState([
        { id: 1, description: 'Доход 1', amount: 2000, date: '10.07.2023' },
        { id: 2, description: 'Доход 2', amount: 500, date: '10.07.2023' }
    ]);
    const [expenses, setExpenses] = useState([
        { id: 1, description: 'Расход 1', amount: 1900, date: '10.07.2023' },
        { id: 2, description: 'Расход 2', amount: 400, date: '10.07.2023' },
        { id: 3, description: 'Расход 3', amount: 65, date: '10.07.2023' }
    ]);

    const totalProfit = profits.reduce((acc, item) => acc + item.amount, 0);
    const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);

    const addProfit = (description, amount) => {
        setProfits([...profits, { id: profits.length + 1, description, amount, date: new Date().toLocaleDateString() }]);
        setBalance(balance + amount);
    };

    const addExpense = (description, amount) => {
        setExpenses([...expenses, { id: expenses.length + 1, description, amount, date: new Date().toLocaleDateString() }]);
        setBalance(balance - amount);
    };

    const deleteProfit = (id) => {
        const profitToDelete = profits.find((profit) => profit.id === id);
        setBalance(balance - profitToDelete.amount);
        setProfits(profits.filter((profit) => profit.id !== id));
    };

    const deleteExpense = (id) => {
        const expenseToDelete = expenses.find((expense) => expense.id === id);
        setBalance(balance + expenseToDelete.amount);
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div className="container">
            <div className="balance">
                <Balance balance={balance}/>

                <div className="profits-expenses">
                    <ProfitList profits={profits} onDelete={deleteProfit} totalProfit={totalProfit}/>
                    <ExpenseList expenses={expenses} onDelete={deleteExpense} totalExpense={totalExpense}/>
                </div>
            </div>


            <div className="add-transaction">
                <div className='inputs'>
                    <h3>Добавить доход</h3>
                    <TransactionForm onAdd={addProfit}/>
                </div>

                <div className="inputs">
                    <h3>Добавить расход</h3>
                    <TransactionForm onAdd={addExpense}/>
                </div>


            </div>
        </div>
    );
}


