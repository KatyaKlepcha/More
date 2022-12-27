import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value: number
    onChange: (value: any) => void
    items: ItemType[]
}

const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onClickHandler = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onClickHandler()
        props.onChange(value)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key==='ArrowUp' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }
        if (e.key==='Enter' || e.key==='Escape'){
            setActive(false)
        }

    }

    return (
        <>
            <select>
                <option value="1">Oleg</option>
                <option value="2">Olya</option>
                <option value="3">Sveta</option>
                <option value="4">Ira</option>
            </select>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={onClickHandler}>{selectedItem && selectedItem.title}</span>

                {
                    active && <div className={styles.items}>
                        {props.items.map(el => {
                                console.log(selectedItem === el)
                                return (
                                    <div key={el.value}
                                         onMouseEnter={() => setHoveredElementValue(el.value)}
                                         className={styles.item + '' + (hoveredItem === el ? styles.selected : '')}
                                         onClick={() => onItemClick(el.value)}
                                    >
                                        {el.title}
                                    </div>)
                            }
                        )
                        }


                    </div>
                }

            </div>
        </>

    );
};

export default Select;