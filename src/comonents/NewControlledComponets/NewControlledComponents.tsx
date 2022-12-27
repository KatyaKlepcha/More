import React, {ChangeEvent, useState} from 'react';

export const NewControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={parentValue} onChange={onchangeHandler}/>
    );
};

export const NewControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return (
        <input type={'checkbox'} checked={parentValue} onChange={onchangeHandler}/>
    );
};

export const NewControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('1')

    const onchangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onchangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    );
};

