import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: AccordionPropsType) {
   const [collapsed, setCollapsed] = useState(false)

    const onTitleClick = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle onTitleClick={onTitleClick} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )


    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //             <AccordionBody/>
    //         </div>
    //     )
    // }
// }

    type AccordionTitlePropsType = {
        title: string
        onTitleClick: ()=> void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3 onClick={props.onTitleClick}>{props.title}</h3>
    }

    function AccordionBody() {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
}


export default UncontrolledAccordion;