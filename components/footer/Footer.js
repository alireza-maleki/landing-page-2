import classes from "./Footer.module.scss";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// === Media Icons ===
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <section className={classes.footer}>

            <div className="container">

                <div className="row gy-4">

                    <div className="col-md-4">
                        <div className="pe-md-0 pe-2 d-flex align-items-center justify-content-start justify-content-md-center">

                            <BsFillTelephoneFill className={classes.icon} />

                            <div className="me-3">
                                <span> 09017730800 </span>
                                <p>شنبه تا پنج شنبه، 8صبح تا 4بعد ازظهر</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="pe-md-0 pe-2 d-flex align-items-center justify-content-start justify-content-md-center">

                            <MdEmail className={classes.icon} />

                            <div className="me-3">
                                <span> info@company.com </span>
                                <p>پشتیبانی آنلاین</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="pe-md-0 pe-2 d-flex align-items-center justify-content-start justify-content-md-center">

                            <BsFillCalendarEventFill className={classes.icon} />

                            <div className="me-3">
                                <span> لورم ایپسوم </span>
                                <p>لورم ایپسوم متن ساختگی</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className={classes.media}>
                <div className="container py-4">
                    <div className="row gy-4 align-items-center text-center">

                        <div className="col-md-6">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                            </p>
                        </div>

                        <div className={` col-md-6 ${classes.links} `}>
                            <BsFacebook className="mx-3" />
                            <BsTwitter />
                            <BsGithub className="mx-3" />
                            <AiFillLinkedin />
                            <AiFillInstagram className="mx-3" />
                        </div>

                    </div>
                </div>
            </div>


            <div className={` container mt-4 py-4 ${classes.list} `}>
                <div className="row">

                    <div className="col-12 col-lg-5 offset-lg-1">
                        <h4 className="fw-bold">Ali Maleki</h4>
                        <hr />

                        <p className="lh-lg">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold">محصولات</h5>
                        <hr />

                        <ul className="list-unstyled">
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                        </ul>

                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold">خدمات</h5>
                        <hr />

                        <ul className="list-unstyled">
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5 className="fw-bold">تماس با ما</h5>
                        <hr />

                        <ul className="list-unstyled">
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                            <li className="mt-2">لورم ایپسوم</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className={classes['container-info']}>

                <div className="container py-3">

                    <div className="row text-center">

                        <div className="col-12 ">
                            <h5>Ali Maleki</h5>
                            <p className="mt-2">
                                علی ملکی، برنامه نویس و توسعه دهنده وب سایت
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer