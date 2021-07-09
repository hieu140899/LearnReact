import {React, useState} from 'react';

export default function TestState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click here</button>
            <p>Hisu clicked {count} times.</p>
        </div>
    )
}
