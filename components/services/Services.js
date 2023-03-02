import HeadLess from "./HeadLess";
import classes from "./Services.module.scss";

// === React Icons ===
import { BsStack } from "react-icons/bs";
import { BsFillHddStackFill } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";

import Button from "../button/Button";

const Services = () => {
    return (
        <section className={` mb-5 ${classes.services} `}>

            <div className="container">

                <div className="row">

                    <div className="col-12 text-center">
                        <h1 className="fs-2 fw-bold">لورم ایپسوم متن</h1>
                        <HeadLess />
                    </div>

                </div>

                <div className="row my-5 align-items-center">

                    <div className="col-md-6 text-center border-start ">
                        <h5 className="fw-bold lh-lg">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </h5>
                    </div>

                    <div className="col-md-6 text-center text-md-end p-4 lh-lg">
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>

                </div>

            </div>

            <div className="container">

                <div className="row gy-5 align-items-center">

                    <div className="col-md-6 text-center text-md-end">
                        <BsStack className={classes.stack} />
                        <h3 className={` fw-bold mt-4 ${classes.head} `}>لورم ایپسوم</h3>
                        <p className="mt-4">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <Button className="border-secondary">مطالعه بیشتر</Button>
                    </div>

                    <div className="col-md-6 text-start ">
                        <img className="img-fluid" src="./images/services/1.png" alt="services" />
                    </div>

                </div>



                <div className="row my-5 gy-5 align-items-center">

                    <div className="col-md-6 text-end order-2 order-lg-1">
                        <img className="img-fluid" src="./images/services/2.png" alt="services" />
                    </div>

                    <div className="col-md-6 text-center text-md-end order-1 order-lg-2">
                        <BsFillHddStackFill className={classes.stack} />
                        <h3 className={` fw-bold mt-4 ${classes.head} `}>لورم ایپسوم</h3>
                        <p className="mt-4">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <Button className="border-secondary">مطالعه بیشتر</Button>
                    </div>

                </div>




                <div className="row my-5 gy-5 align-items-center">

                    <div className="col-md-6 text-center text-md-end">
                        <SiGooglemessages className={classes.stack} />
                        <h3 className={` fw-bold mt-4 ${classes.head} `}>لورم ایپسوم</h3>
                        <p className="mt-4">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </p>
                        <Button className="border-secondary">مطالعه بیشتر</Button>
                    </div>


                    <div className="col-md-6 text-start">
                        <img className="img-fluid" src="./images/services/3.png" alt="services" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Services