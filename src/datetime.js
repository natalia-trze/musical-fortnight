import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export default function DateTime() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <Card body className="border-0 m-4">
            <Card.Title>{`${dateTime.toLocaleTimeString()}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${dateTime.toLocaleDateString()}`}</Card.Subtitle>
        </Card>

    );

};