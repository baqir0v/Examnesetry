import React, { useContext, useEffect, useState } from 'react';
import "./index.scss"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import Navbar from '../../layout/Navbar';

const SignupForm = () => {
    const [data, setdata] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setsort] = useState(null)

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5000/api/food/`)
        const jsonData = await resp.json()
        setdata(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Navbar />
            <header id='addheader'>
                <div className="inputs">
                    <Formik
                        initialValues={{ name: '', ingredients: '', price: '' }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Required'),
                            ingredients: Yup.string()
                                .required('Required'),
                            price: Yup.string().price
                        })}
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                const handleAdd = async (values) => {
                                    const resp = await axios.post("http://localhost:5000/api/food", values)
                                }
                                resetForm()
                                handleAdd(values)
                                setSubmitting(false);
                                fetchData()
                            }, 400);
                        }}
                    >
                        <Form>
                            <Field name="name" type="text" placeholder="Name" />
                            <ErrorMessage name="name" />

                            <Field name="ingredients" type="text" placeholder="Ingredients" />
                            <ErrorMessage name="ingredients" />

                            <Field name="price" min="0" type="number" placeholder="Price" />
                            <ErrorMessage name="price" />

                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </header>
            <input type="text" name="" id="" onChange={(e) => setSearch(e.target.value)} />\
            <button onClick={() => setsort({ property: "name", asc: true })}>AZ</button>
            <button onClick={() => setsort({ property: "name", asc: false })}>AZ</button>
            <button onClick={() => setsort(null)}>AZ</button>

            {data && data.filter(x => x.name.toLowerCase().trim().includes(search.toLowerCase()))
                .sort((a, b) => {
                    if (sort && sort.asc === true) {
                        console.log(a[sort.property]);
                        return a[sort.property].localeCompare(b[sort.property])
                    } else if (sort && sort.asc === false) {
                        return b[sort.property].localeCompare(a[sort.property])
                    } else {
                        return 0
                    }
                })
                .map((item) => (
                    <ul key={item._id}>
                        <li>{item.name}</li>
                        <li>{item.ingredients}</li>
                        <li>{item.price}</li>
                    </ul>
                ))}
        </>
    );
};

export default SignupForm