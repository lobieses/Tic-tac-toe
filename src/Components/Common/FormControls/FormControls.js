import React from "react";
//className={style.form + ' ' + ((errors[name] || status[name]) ? style.error : undefined)} для стилей ошибок
export const FormControls = ({ name, errors, status = {},...props }) => {
    return (
        <div >
            <div>
                {props.children}
            </div>
            <div>
                <p>{errors[name]}</p>
                <p>{status[name]}</p>
            </div>
        </div>
    )
}

export const Input = ({ field, form, ...props }) => {
    return <FormControls {...form} name={field.name}><input {...field} {...props}/></FormControls>
}