import Button from "../button/Button";
import classes from "./Intro.module.scss";

function Intro() {
  return (
    <section className={` my-5 ${classes.intro} `}>

      <div className="container">

        <div className="row gy-5 align-items-center">

          <div className="col-md-6 text-white">
            <h1 className="fw-bold mb-5">لورم ایپسوم متن ساختگی</h1>
            <p className="fs-5 fw-bold lh-lg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            <Button>لورم ایپسوم</Button>
          </div>

          <div className="col-md-6 text-start">
            <img className="img-fluid" src="./images/intro/1.png" alt="intro" />
          </div>

        </div>

      </div>

      <div >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFF" fill-opacity="1" d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

    </section>
  )
}

export default Intro