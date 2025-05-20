"use client"
import React from 'react';

export default function Error({ error, reset }) {
    return (
        <div>
            <h3>Oops! Something went wrong....</h3>
            <p>{error.message}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    );
}
