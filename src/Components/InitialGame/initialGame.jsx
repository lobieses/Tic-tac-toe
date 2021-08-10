import React from 'react';
import {Formik, Field, Form} from 'formik';
import {Input} from "../Common/FormControls/FormControls";
import style from './initialGame.module.css';

import {ValidateList, nameHasSpaces, nameIsEmpty, maxLength} from "../../utils/validator/validator";

const maxLengthForValidate = maxLength(10);
const validateForForm = ValidateList([nameHasSpaces, nameIsEmpty, maxLengthForValidate]);

const InitialGame = (props) => {
    return (
        <div className={style.container}>
            <h1>enter player names</h1>
            <Formik
                initialValues={{
                    player1: '',
                    player2: ''
                }}
                onSubmit={props.onSubmit}
            >
                {({
                      handleSubmit,
                  }) => (
                    <Form onSubmit={handleSubmit} className={style.form}>
                        <div>
                            <Field name='player1' placeholder='player1' component={Input} validate={validateForForm}/>
                            <Field name='player2' placeholder='player2' component={Input} validate={validateForForm}/>
                        </div>
                        <button type='submit'>
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default InitialGame

