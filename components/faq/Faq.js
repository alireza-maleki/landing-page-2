import classes from "./Faq.module.scss";

import HeadLess from "../services/HeadLess";


const Faq = () => {



    return (
        <section className={classes.faq}>

            <div className="container my-5">

                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h1 className="fs-2 fw-bold">لورم ایپسوم متن</h1>
                        <HeadLess />
                        <p className="mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است . </p>
                    </div>
                </div>

                <div className="row">

                    <div className="accordion" id="accordionExample">

                        <div className="accordion-item shadow mb-4 rounded">
                            <h2 className="accordion-header" id="headingOne">
                                <button className={`accordion-button rounded ${classes['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    لورم ایپسوم متن ساختگی با تولید
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item shadow mb-4 rounded">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className={`accordion-button rounded ${classes['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    لورم ایپسوم متن ساختگی
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                    </p>+
                                    
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item shadow mb-4 rounded">
                            <h2 className="accordion-header" id="headingThree">
                                <button className={`accordion-button rounded ${classes['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    لورم ایپسوم متن ساختگی با تولید
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
};


export default Faq;