import React, {useState, MouseEvent} from 'react';

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5;

function UncontrolledRating() {

    const [value, setValue] = useState<RatingPropsType>(0)

    return (
        <div>
            <Star selected={value > 0} setValue={()=>setValue(1)}/>
            {/*<button onClick={()=>{setValue(0)}}>0</button>*/}
            <Star selected={value > 1} setValue={()=>setValue(2)} />
            {/*<button onClick={()=>{setValue(1)}}>1</button>*/}
            <Star selected={value > 2} setValue={()=>setValue(3)} />
            {/*<button onClick={()=>{setValue(2)}}>2</button>*/}
            <Star selected={value > 3} setValue={()=>setValue(4)} />
            {/*<button onClick={()=>{setValue(3)}}>3</button>*/}
            <Star selected={value > 4} setValue={()=>setValue(5)}/>
            {/*<button onClick={()=>{setValue(4)}}>4</button>*/}
        </div>
    )

    // if (props.value === 1) {
    //     return (<div>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 2) {
    //     return (<div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 3) {
    //     return (<div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 4) {
    //     return (<div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={false}/>
    //         </div>
    //     )
    // }
    // if (props.value === 5) {
    //     return (<div>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //             <Star selected={true}/>
    //         </div>
    //     )
    // }
    // return (
    //     <div>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //         <Star selected={false}/>
    //     </div>
    // )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    // const onStarClickHandler = () => {
    //     props.setValue(props.value)
    // }


    return <span onClick={props.setValue}>{props.selected ? <b>star </b> : <>star </>}</span>
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
}

export default UncontrolledRating;