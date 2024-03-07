import React, { useState, useEffect } from 'react';

const CodeTest = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 25) {
            const xc = setTimeout(() => {
                setCount(count + 5);
            }, 500);
            return () => clearTimeout(xc);
        }
    }, [count])

    console.log(count);
    return (
        <>
            <p>{count} +</p>
        </>
    );
};

export default CodeTest;