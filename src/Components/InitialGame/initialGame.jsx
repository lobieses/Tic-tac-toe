import React from 'react';
import {Formik, Field, Form} from 'formik';
import {Input} from "../Common/FormControls/FormControls";

import {ValidateList, nameHasSpaces, nameIsEmpty, maxLength} from "../../utils/validator/validator";

const maxLengthForValidate = maxLength(10);
const validateForForm = ValidateList([nameHasSpaces, nameIsEmpty, maxLengthForValidate]);

const InitialGame = (props) => {
    return (
        <div>
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
                    <Form onSubmit={handleSubmit}>
                        <Field name='player1' placeholder='player1' component={Input} validate={validateForForm}/>
                        <Field name='player2' placeholder='player2' component={Input} validate={validateForForm}/>
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

