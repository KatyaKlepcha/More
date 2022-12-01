import {useState} from "react";

type PropsType = {
    // on: boolean
    // off: boolean
    onChange: (on: boolean)=> void
}


function UncontrolledOnOff(props: PropsType) {

    const [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginRight: '5px',
        backgroundColor: on ? 'green' : 'white',
        cursor: 'pointer'
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }


    const onOnClickHandler = () => {
        setOn(true)
        props.onChange(true)
    }

    const onOffClickHandler = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onOnClickHandler}>On</div>
            <div style={offStyle} onClick={onOffClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )


}

export default UncontrolledOnOff