import React from 'react';
import emailjs from 'emailjs-com';
import s from './Contacts.module.scss';
import {useFormik} from 'formik';
import * as yup from 'yup'

const Form = () => {

    const formik = useFormik({
        initialValues: { user_name: '', user_email: '', user_message: '' },
        validationSchema: yup.object({
            user_email: yup.string().email('Invalid email address').required('Required'),
            user_name: yup.string().required('Required'),
            user_message: yup.string().required('Required')
        }),
        onSubmit: values => {
            emailjs.send('service_3twl6vg', 'template_72umygf', values, 'user_uwGLONXKCTuFyFXPqnVkI')
                .then((result) => {
                    alert(result.text);
                }, (error) => {
                    alert(error.text);
                });
            formik.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <input {...formik.getFieldProps('user_name')} className={s.input} placeholder={'Name'} type="text"/>
            {formik.touched.user_name && Boolean(formik.errors.user_name) && <div>{formik.errors.user_name}</div>}

            <input {...formik.getFieldProps('user_email')} className={s.input} placeholder={'Email'} type="text"/>
            {formik.touched.user_email && Boolean(formik.errors.user_email) && <div>{formik.errors.user_email}</div>}

            <textarea {...formik.getFieldProps('user_message')} name='user_message' className={s.area} placeholder={'Your message'} />
            {formik.touched.user_message && Boolean(formik.errors.user_message) && <div>{formik.errors.user_message}</div>}

            <input value='Send' type='submit' className={s.formBlockButton} />
        </form>
    );
}

export default Form;