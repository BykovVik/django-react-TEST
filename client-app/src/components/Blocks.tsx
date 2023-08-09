import React, {useEffect, useState} from "react";
import http from "../http-common"

const Blocks = () => {

    const[blocks, setBlocks] = useState([])

    useEffect(() => {
        const get_header_blocks = async() => {
            await http.get('/api/get-blocks')
            .then((result:any) => {
                setBlocks(result.data)
            })
        }
        get_header_blocks()
    }, [])

    return(
        <>
            {blocks &&
                blocks.map((block, idx) => (
                    <div className="square" key={idx}>
                        <p className="top_text">{block['top_string']}</p>
                        <p className="num_text">{block['num_string']}</p>
                        <p className="bottom_text">{block['bottom_string']}</p>
                    </div>
            ))} 
        </>
    )
}

export default Blocks