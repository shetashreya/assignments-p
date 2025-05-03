import React, { useState } from "react";

function InteractiveGreetingCard() {
    const [userType, setUserType] = useState('guest');
    const [timeOfDay, setTimeOfDay] = useState('morning');

    let greeting;
    if (userType === 'guest') {
        greeting = "Hello! Welcome to Perminant";
    } else if (userType === 'returning') {
        greeting = "Welcome back to Perminant";
    } else if (userType === 'admin') {
        greeting = "Admin access granted.";
    }

    let cardBgColor;
    if (timeOfDay === 'morning') {
        cardBgColor = '#fff5b1';
    } else if (timeOfDay === 'afternoon') {
        cardBgColor = '#ffecb3';
    } else if (timeOfDay === 'evening') {
        cardBgColor = '#add8e6';
    }

    return (
        <div style={{
            padding: '20px',
            border: '2px solid #ccc',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: cardBgColor,
            color: '#333',
        }}>
            <h2>{greeting}</h2>
            <p>Have a great {timeOfDay}!</p>

            <div style={{ marginTop: '10px' }}>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        marginRight: '10px',
                        borderRadius: '6px',
                        border: '1px solid #aaa',
                        fontSize: '14px'
                    }}>
                    <option value="guest">Guest</option>
                    <option value="returning">Returning</option>
                    <option value="admin">Admin</option>
                </select>

                <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}
                    style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #aaa',
                        fontSize: '14px'
                    }}>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                </select>
            </div>
        </div>
    );
}

export default InteractiveGreetingCard;
