import {useState} from "react";

type PropsType = {
    setOnOff: (value: boolean) => void
    onOff: boolean
}


function OnOff(props: PropsType) {



    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: props.onOff ? 'green' : 'white',
        cursor: 'pointer'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.onOff ? 'white' : 'red',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.onOff ? 'green' : 'red'
    }


    const onOnClickHandler = () => {
        props.setOnOff(!props.onOff)
    }

    return (
        <div>
            <div style={onStyle} onClick={onOnClickHandler}>On</div>
            <div style={offStyle} onClick={onOnClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )


}

export default OnOff


