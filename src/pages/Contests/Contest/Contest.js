import * as React from 'react'; 
import SideBar from '../../../components/SideBar/SideBar';
import {Link} from 'react-router-dom';
import style from './Contest.module.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

function Contest(){

    // contest
    const [contest, setContest] = useState([]);
    const [contestId, setContestId] = useState();
      
    async function fetchData() {
         
        await axios.get('')
        .then(response => {
          console.log(response.data)
        setContest(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
      }

      function afterDelete(message , icon){
        Swal.fire({
            title: message,
            icon: icon,
            showConfirmButton: false,
            timer: 1500
        });
    } 
  
           
        function DeleteAlert(id){
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
            if (result.isConfirmed) {
                deleteData(id);
            }
        })
    } 
      
        async function deleteData(id) {
            let message;
            let icon;
            try {
                const response = await axios.post("");
         
                let index = contest.findIndex( ele => ele.id === id);
                setContest(contest.splice(index,1));
          
                fetchData();
                console.log(response)
                    
            } catch (error) {
                console.log(error)
                message = error.message;
                icon = "error" ;
                afterDelete(message , icon);
            }
      
        }     


    useEffect(() => {
        fetchData();
    },[]);
    
      
    return(
    <>
    <SideBar />
    <div className={`${style.page_content}`}>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-12 row my-4">
                    <div className='col-sm-12 col-lg-6 p-0'>
                        <h2 className="">المسابقات</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="table-responsive table-responsive-data2">
                        <table className={`table ${style.table_data2}`} >
                            <thead  className={`${style.thead }`}>
                            <tr>
                                <th>#</th>
                                <th>اسم المسابقة</th>
                                <th>نوع المسابقة</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            
                            {contest.map((contest,index) => {
                                            return(
                                            <>
                                            <tr key={index} className={`${style.tr_shadow}`}>
                                                <td>{index+1}</td>
                                                <td>{contest.name}</td>
                                                <td>{contest.type}</td>
                                                <td>
                                                    <div className="table-data-feature">
                                                        <Link className="item" type='button' to="/editContest" onClick={()=>{
                                                                window.scrollTo(0, 0);
                                                               setContestId(contest.id);
                                                                }}>
                                                            <i className={`fa-solid fa-pen  ${style.text_creat}`} ></i>
                                                        </Link>

                                                        <form>
                                                            <Link type='button' className="item"
                                                                    onClick={ () =>{
                                                                        DeleteAlert(contest.id)  
                                                                    }}>
                                                                        <i className="fa-solid fa-trash text-danger"></i>
                                                                </Link>
                                                        </form>
                                                    </div>
                                                </td>
                                            </tr>
                                            </>
                                        )          
                                        })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>   
    </>
    )
}


export default  Contest;