import React from 'react';

export const Balance = ({ balance }) => {
    return (
        <div className="balance-box">
            <h2>My Balance 💰</h2>
            <h3>{balance}$</h3>
        </div>
    );
}
