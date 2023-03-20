
import * as React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import style from './Dashboard.module.css';

function Dashboard(){

// dashboard
return(
    <>
        <SideBar />
        <div className={`${style.page_content}`}>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap">
                            <h2 className="title-1">لوحة التحكم</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )

}
export default Dashboard;