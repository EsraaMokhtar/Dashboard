
import * as React from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import style from './EditProject.module.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from 'react';

function EditProject(props) {

    const [name, setName] = useState('');
    const [comments, setComments] = useState('');
    const [text, setText] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');



    function showAlert(message) {
        Swal.fire({
            title: message,
            icon: "success",
            showConfirmButton: false,
            timer: 1000
        });
    }

    function showError(message) {
        Swal.fire({
            title: message,
            icon: "error",
            showConfirmButton: false,
            timer: 1500
        });
    }



    async function sendData(e) {

        e.preventDefault();

            // await axios.post(``,
            // { name : name , comments : comments , text : text , type: type, price : price })
            // .then(response => {
            //     console.log("res", response)
                // if ('success' in response.data) {
                //     let message = response.data.success;
                //     showAlert(message, 'success');
                //     e.target.reset();

                //     let createGrade = document.getElementById("create_grade");
                //     createGrade.classList.add("d-none");

                // } else if ('error' in response.data) {
                //     let error = response.data.error;
                //     showAlert(error, 'error');
                // }

            // }).catch(error => {
            //     console.log(error);

            // });
    }





    return (
        <>
            <SideBar />
            <div className={`${style.page_content}`}>
                <div className='container-fluid'>
                    <div className="row justify-content-center mx-1 mb-5">

                        <form onSubmit={sendData} className={`${style.create_accont}`}>
                            <div className="row">

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>الاسم:</strong>
                                        <input type="text" name="name" className="form-control"
                                         onChange={(e) => { setName(e.target.value) }}
                                        placeholder="الاسم" />
                                    </div>
                                </div>

                                
                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>المشروع:</strong>
                                        <input type="text" name="text" className="form-control"
                                         onChange={(e) => { setText(e.target.value) }}
                                        placeholder="المشروع" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>التعليق:</strong>
                                        <input type="text" name="comments" className="form-control"
                                         onChange={(e) => { setComments(e.target.value) }}
                                        placeholder="التعليق" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>النوع:</strong>
                                        <input type="text" name="type" className="form-control"
                                         onChange={(e) => { setType(e.target.value) }}
                                        placeholder="النوع" />
                                    </div>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6 mb-3">
                                    <div className="form-group">
                                        <strong>السعر:</strong>
                                        <input type="text" name="price" className="form-control"
                                         onChange={(e) => { setPrice(e.target.value) }}
                                        placeholder="السعر" />
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                                    <button type="submit" className={`btn ${style.btnCreate} mb-3`}>ارسال</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProject;




