import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    items: ItemType[]
    setAccordionCollapsed: (value: boolean) => void
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed}
                            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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
        collapsed: boolean
        setAccordionCollapsed: (value: boolean) => void
    }

    function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3 onClick={() => props.setAccordionCollapsed(!props.collapsed)}>{props.title}</h3>
    }

    type AccordionBodyType = {
        items: ItemType[]
        onClick: (value: any) => void
    }

    function AccordionBody(props: AccordionBodyType) {
        return (
            <ul>
                {props.items.map(i => <li key={i.value} onClick={() => {
                    props.onClick(i.value)
                }}>{i.title}</li>)}
            </ul>
        )
    }
}


export default Accordion;