import { FormInput } from 'components/FormInput/FormInput';
import React, { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import * as classes from './form.module.scss';

type FormPropsNames = 'login' | 'password';
type IFormAuth = Record<FormPropsNames, string>;

export const Form = () => {
    const [formAuth, setFormAuth] = useState<IFormAuth>({
        login: '',
        password: ''
    });

    const changeFormAuth = useCallback(
        (prop: FormPropsNames, e: ChangeEvent<HTMLInputElement>) => {
            formAuth[prop] = e.target.value;
        },
        []
    );

    const submit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(formAuth, 'OBJ');
    };

    return (
        <form className={classes.form_container}>
            {Object.keys(formAuth).map((keyForm: FormPropsNames) => {
                return (
                    <FormInput
                        key={keyForm}
                        propName={keyForm}
                        changeValue={changeFormAuth}
                        initialValue={formAuth[keyForm]}
                    />
                );
            })}
            <button className={classes.btn} onClick={submit}>
                Клик
            </button>
        </form>
    );
};
