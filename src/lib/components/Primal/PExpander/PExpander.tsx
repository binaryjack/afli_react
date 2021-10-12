import React, { FC, useEffect, useRef, useState } from 'react';
import chevron from "./chevron.svg";
import './PExpander.css';

const PExpander: FC = () => {

    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState<string>();

    const toggleState = () => { setToggle(!toggle); }

    const refHeight = useRef<any>();


    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, [])

    return (
        <div className="p-expander">
            <div
                onClick={toggleState}
                className="p-expander-visible" >
                <h2>Title</h2>
                <img src={chevron} alt="chevron" />
            </div>

            <div ref={refHeight}
                className={toggle ? "p-expander-toggle animated" : "p-expander-toggle"}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
            >
                <p aria-hidden={toggle ? "true" : "false"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia molestias alias odit dignissimos. Iure eum quae voluptate est autem cumque, ducimus possimus a, ratione dolorum laborum suscipit? Saepe, sapiente.
                </p>

            </div>
        </div >
    )
}

export default PExpander;