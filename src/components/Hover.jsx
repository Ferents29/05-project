import React, {useRef} from 'react';
import {useHover} from "../hooks/useHover";

const Hover = () => {
    let ref = useRef()
    let isHovering = useHover(ref)
    console.log(isHovering)
    return (
        <div ref={ref} style={{width:'300px',
                                height:'300px',
                                backgroundColor: isHovering ? 'green' : 'red'}}>
            <button onClick={() => {console.log(ref.current)}}>Click me</button>
        </div>
    );
};

export default Hover;