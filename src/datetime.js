import React, { useState, useEffect } from 'react';

export default function DateTime () {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div className="clock">
            <p>{`${dateTime.toLocaleDateString()}`}</p>
            <p>{`${dateTime.toLocaleTimeString()}`}</p>
        </div>
    );

};