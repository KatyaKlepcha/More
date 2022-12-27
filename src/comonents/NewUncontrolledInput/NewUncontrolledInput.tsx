import {useRef, useState} from "react";


export const NewUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (<>
        <input ref={inputRef}/>
        <button onClick={onSave}>Save</button>
        actual value: {value}
    </>)
}