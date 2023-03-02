import Link from "next/link";
import classes from "./Header.module.scss";

import Button from "../button/Button";

const Header = () => {
  return (
    <section className={classes.header}>

      <nav className={` navbar navbar-expand-lg navbar-dark  fixed-top shadow ${classes.navbar} `}>

        <div className="container">

          <Link href="/" className="navbar-brand">
            Ali Maleki
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto px-3">
              <li className="nav-item active">
                <a className="nav-link" href="#">صفحه اصلی</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">محصولات</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  گالری
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">لورم</a>
                  <a className="dropdown-item" href="#">لورم ایپسوم</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">لورم ایپسوم متن</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">درباره ما</a>
              </li>
            </ul>

            <Button>
              ورود به اکانت
            </Button>

          </div>

        </div>
      </nav>

    </section>
  )
}

export default Header