import React from "react";
import style from './FormControls.module.css'

export const FormControls = ({ name, errors, status = {}, touched, ...props }) => {
    return (
        <div className={style.form + ' ' + ((errors[name] || status[name]) && touched[name] ? style.error : '')}>
            <div>
                {props.children}
            </div>
            {touched[name]
                ? <div>
                    <p>{errors[name]}</p>
                    <p>{status[name]}</p>
                  </div>
                : null
            }

        </div>
    )
}

export const Input = ({ field, form, ...props }) => {
    return <FormControls {...form} name={field.name}><input {...field} {...props}/></FormControls>
}