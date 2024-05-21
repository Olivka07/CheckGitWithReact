import React, { ChangeEvent, FC, useEffect, useState } from 'react';

interface FormInputProps {
    propName: string;
    initialValue: string;
    changeValue: (propName: string, e: ChangeEvent<HTMLInputElement>) => void;
}
export const FormInput: FC<FormInputProps> = (props) => {
    const { propName, changeValue, initialValue } = props;
    const [value, setValue] = useState(initialValue);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        changeValue(propName, e);
    };

    return (
        <>
            <label htmlFor={propName}>{propName}</label>
            <input id={propName} value={value} onChange={changeHandler} />
        </>
    );
};
