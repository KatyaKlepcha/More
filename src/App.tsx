import React, {useState} from 'react';
import './App.css';
import Accordion from './comonents/Accordion/Accordion';
import UncontrolledAccordion from './comonents/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from "./comonents/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from './comonents/UncontrolledOnOff/UncontrolledOnOff';


function App() {

   // const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)
    return (
        <div className="App">
            <UncontrolledOnOff onChange={setOnOff}/> {onOff.toString()}
            {/*<OnOff setOnOff={setOnOff} onOff={onOff}/>*/}
            {/*<UncontrolledOnOff on={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
            {/*<PageTitle title = {'This is APP component'}/>*/}
            {/*<PageTitle title = {'My friends'}/>*/}
            {/*Article 1*/}
            {/*/!*<Rating/>*!/*/}
            <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} setAccordionCollapsed={setAccordionCollapsed}/>
            {/*<Accordion titleValue = {'Users'} collapsed={false}/>*/}

            <UncontrolledAccordion titleValue={'-----Menu-----'}/>
            <UncontrolledAccordion titleValue={'-----Users-----'}/>

            <UncontrolledRating/>

            {/*Article 2*/}
            {/*<Rating value={ratingValue} setRatingValue={setRatingValue}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

// type PagePropsType = {
//     title: string
// }

// function PageTitle(props: PagePropsType) {
//     return <h1>{props.title}</h1>
// }

export default App;
