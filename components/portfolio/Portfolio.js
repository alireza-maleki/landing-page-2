import React, { useState, useEffect } from 'react';

import classes from "./Portfolio.module.scss";

import Headless from "../services/Headless";

import DommyData from "../dommydata/DommyData";

const Portfolio = () => {

    const [dynamicData, setDynamicData] = useState([]);
    const [selectUserBtn, setSelectUserBtn] = useState();


    useEffect(() => {

        setDynamicData(DommyData[0].images);
        setSelectUserBtn(DommyData[0].display_category);

    }, []);


    // console.log(DommyData);
    // console.log(dynamicData);

    const btnName = [
        { id: 1, value: 'طبیعت' },
        { id: 2, value: 'تکنولوژی' },
        { id: 3, value: 'مسافرت' },
        { id: 4, value: 'همه' },
    ];

    // === Save Data in state ===
    const dataHandler = (e) => {

        console.log(e.target.innerText);
        let btnValue = e.target.innerText;

        setSelectUserBtn(e.target.innerText)

        switch (btnValue) {

            case 'طبیعت':
                return setDynamicData(DommyData[0].images);

            case 'تکنولوژی':
                return setDynamicData(DommyData[1].images);

            case 'مسافرت':
                return setDynamicData(DommyData[2].images);

            case 'همه':
                return setDynamicData(DommyData[3].images);

            default:
                return dynamicData;
        }

    }


    return (
        <section className={classes.portfolio}>

            <div className='container'>

                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="fs-2 fw-bold">لورم ایپسوم متن</h1>
                        <Headless />
                        <p className="mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است . </p>
                    </div>
                </div>

                <div className="row gy-3">

                    <div className={`col-12 text-center mb-4 ${classes.actions}`}>

                        {
                            btnName.map((btn) => (
                                <button onClick={dataHandler} className="btn mx-2" key={btn.id}>{btn.value}</button>
                            ))
                        }

                        {/* <button className="btn">طبیعت</button>
                        <button className="btn mx-3">تکنولوژی</button>
                        <button className="btn">مسافرت</button>
                        <button className="btn me-3">همه</button> */}
                    </div>

                    <p className='fw-bold fs-5 text-center '>/ {selectUserBtn} /</p>

                </div>

                <div className="row my-5">

                    {
                        dynamicData.map((item) => (
                            <div className="col-md-6 col-lg-4 mt-4">

                                <div className={`shadow rounded  ${classes.box}`}>

                                    <img className="img-fluid rounded" src={item.image} />

                                    <div className={` position-absolute top-50 start-50 translate-middle h-100 w-100 d-flex flex-column align-items-center justify-content-center  text-white ${classes.info} `}>
                                        <h4>{item.title}</h4>
                                        <p>{item.caption}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Portfolio;