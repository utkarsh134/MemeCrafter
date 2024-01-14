import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../Components/Text";
import { Button } from "react-bootstrap";

import {exportComponentAsJPEG} from 'react-component-export-image'


const EditPage = (props) => {
    const [params] = useSearchParams();
    // console.log(params.get("url"));

    const [count, setCount] = useState(0);
    const addText = () => { setCount(count + 1) };

    const memeRef = createRef() ;


    return (
        <div>
            <div ref={memeRef} style={{width:"600px", border: "1px solid black", }} className="meme">
                <img src={params.get("url")} width="400px" />
                {Array(count).fill(0).map((e) => (
                    <Text />
                ))}
            </div>
            <Button onClick={addText}>Add Text</Button>
            <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>Save</Button>
        </div>
    )
}

export default EditPage;