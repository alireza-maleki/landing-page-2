import classes from "./Comments.module.scss";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Comments = () => {
    return (
        <section className={classes.comments}>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>

            <div className="container">

                <div className="row text-white text-center">

                    <h3 className="fw-bold">لورم ایپسوم متن ساختگی </h3>
                    <hr className={` mx-auto ${classes.line}`} />
                    <p className="fs-5">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>

                </div>

                <div className="row">

                    <div className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-inner text-center">

                            <div className={` carousel-item active ${classes['carousel']}`}>

                                <div className={` p-4 rounded ${classes['carusel-card']}`}>

                                    <img style={{ width: '120px' }} className="img-fluid rounded-circle" src="./images/comments/1.jpg" />

                                    <div>
                                        <h3 className="fw-bold">لورم ایپسوم</h3>
                                        <p>لورم ایپسوم</p>
                                    </div>

                                    <p className="mt-4">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    </p>

                                </div>

                            </div>


                            <div className={` carousel-item ${classes['carousel']}`}>

                                <div className={`p-4 rounded ${classes['carusel-card']}`}>

                                    <img style={{ width: '120px' }} className="img-fluid rounded-circle" src="./images/comments/2.jpg" />

                                    <div>
                                        <h3 className="fw-bold">لورم ایپسوم</h3>
                                        <p>لورم ایپسوم</p>
                                    </div>

                                    <p className="mt-4">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    </p>

                                </div>

                            </div>


                            <div className={` carousel-item ${classes['carousel']}`}>

                                <div className={` p-4 rounded ${classes['carusel-card']}`}>

                                    <img style={{ width: '120px' }} className="img-fluid rounded-circle" src="./images/comments/3.jpg" />

                                    <div>
                                        <h3 className="fw-bold">لورم ایپسوم</h3>
                                        <p>لورم ایپسوم</p>
                                    </div>

                                    <p className="mt-4">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                    </p>

                                </div>

                            </div>


                        </div>

                        <div className="text-center mt-4">

                            <button className="btn btn-outline-light mx-2 px-4 fs-5" role="button" data-bs-slide="next" data-slide="prev">
                                <AiOutlineArrowRight />
                            </button>

                            <button className="btn btn-outline-light mx-2 px-4 fs-5" role="button" data-bs-slide="prev" data-slide="next">
                                <AiOutlineArrowLeft />
                            </button>
                        </div>

                    </div>



                </div>

            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,229.3C640,213,800,171,960,176C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>

        </section>
    )
}

export default Comments