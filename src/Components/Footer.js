import React, { useState } from "react";

const Footer = () => {
  const [email, setemail] = useState("");

  const subscribeBtn = async (e) => {
    e.preventDefault();
    if (email) {
      // console.log(email);
       fetch(
        "https://react-ecommerce-latest-default-rtdb.firebaseio.com/userSubscribeData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      setemail("");
      alert("Thanks for Subscribing the Newsletter");
    }
  };
  return (
    <footer className="bg-dark text-white">
      <div className="container">
        {/* footer top */}
        <div className="row pt-3 pb-4">
          <div className="col-md-8">
            <div className="fs-3 fw-bold text-white my-2">Ecommerce</div>
          </div>
          <div className="col-md-4 d-flex justify-content-evenly align-items-center">
            <div className="facebook_icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_56)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 11.5704C24 5.1801 18.8515 0 12.5014 0C6.14848 0.00143732 1 5.1801 1 11.5719C1 17.3456 5.2056 22.1319 10.7019 23V14.9151H7.78415V11.5719H10.7048V9.02062C10.7048 6.12155 12.4224 4.52037 15.0484 4.52037C16.3075 4.52037 17.6226 4.74603 17.6226 4.74603V7.59193H16.1724C14.7451 7.59193 14.2995 8.4845 14.2995 9.40008V11.5704H17.4875L16.9787 14.9136H14.2981V22.9986C19.7944 22.1304 24 17.3441 24 11.5704Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_56">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="instagram_icon">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_59)">
                  <path
                    d="M13 1C10.0149 1 9.6395 1.01375 8.46663 1.066C7.29375 1.121 6.49487 1.30525 5.795 1.5775C5.06088 1.85363 4.39593 2.28676 3.84663 2.84663C3.2871 3.39621 2.85402 4.06108 2.5775 4.795C2.30525 5.4935 2.11963 6.29375 2.066 7.4625C2.01375 8.63812 2 9.01213 2 12.0014C2 14.9879 2.01375 15.3619 2.066 16.5348C2.121 17.7063 2.30525 18.5051 2.5775 19.205C2.85937 19.9282 3.23475 20.5415 3.84663 21.1534C4.45713 21.7652 5.07038 22.142 5.79363 22.4225C6.49488 22.6947 7.29238 22.8804 8.46388 22.934C9.63813 22.9862 10.0121 23 13 23C15.9879 23 16.3605 22.9862 17.5348 22.934C18.7049 22.879 19.5065 22.6947 20.2064 22.4225C20.94 22.1462 21.6045 21.7131 22.1534 21.1534C22.7652 20.5415 23.1406 19.9282 23.4225 19.205C23.6934 18.5051 23.879 17.7063 23.934 16.5348C23.9862 15.3619 24 14.9879 24 12C24 9.01212 23.9862 8.63813 23.934 7.46388C23.879 6.29375 23.6934 5.4935 23.4225 4.795C23.146 4.06106 22.7129 3.39618 22.1534 2.84663C21.6042 2.28655 20.9392 1.85339 20.205 1.5775C19.5037 1.30525 18.7035 1.11963 17.5334 1.066C16.3591 1.01375 15.9865 1 12.9973 1H13.0014H13ZM12.0141 2.98275H13.0014C15.9384 2.98275 16.2862 2.99238 17.4454 3.046C18.5179 3.09413 19.1009 3.27425 19.4886 3.42413C20.0015 3.6235 20.3686 3.86275 20.7536 4.24775C21.1386 4.63275 21.3765 4.9985 21.5759 5.51275C21.7271 5.89913 21.9059 6.48213 21.954 7.55463C22.0076 8.71375 22.0186 9.06163 22.0186 11.9973C22.0186 14.9329 22.0076 15.2821 21.954 16.4412C21.9059 17.5137 21.7258 18.0954 21.5759 18.4831C21.3995 18.9607 21.118 19.3926 20.7522 19.7467C20.3672 20.1317 20.0015 20.3696 19.4873 20.569C19.1023 20.7203 18.5192 20.899 17.4454 20.9485C16.2862 21.0008 15.9384 21.0131 13.0014 21.0131C10.0644 21.0131 9.71513 21.0008 8.556 20.9485C7.4835 20.899 6.90187 20.7203 6.51412 20.569C6.03631 20.3929 5.60405 20.1119 5.24912 19.7467C4.88303 19.392 4.60112 18.9598 4.42413 18.4817C4.27425 18.0954 4.09413 17.5124 4.046 16.4399C3.99375 15.2808 3.98275 14.9329 3.98275 11.9945C3.98275 9.0575 3.99375 8.711 4.046 7.55187C4.0955 6.47937 4.27425 5.89638 4.4255 5.50863C4.62488 4.99575 4.86412 4.62862 5.24912 4.24362C5.63412 3.85862 5.99987 3.62075 6.51412 3.42138C6.90187 3.27013 7.4835 3.09138 8.556 3.04188C9.57075 2.99513 9.964 2.98138 12.0141 2.98V2.98275V2.98275ZM18.8726 4.80875C18.6993 4.80875 18.5276 4.84289 18.3675 4.90923C18.2073 4.97557 18.0618 5.0728 17.9392 5.19537C17.8167 5.31794 17.7194 5.46346 17.6531 5.62361C17.5868 5.78376 17.5526 5.95541 17.5526 6.12875C17.5526 6.30209 17.5868 6.47374 17.6531 6.63389C17.7194 6.79404 17.8167 6.93956 17.9392 7.06213C18.0618 7.1847 18.2073 7.28193 18.3675 7.34827C18.5276 7.41461 18.6993 7.44875 18.8726 7.44875C19.2227 7.44875 19.5585 7.30968 19.806 7.06213C20.0536 6.81458 20.1926 6.47884 20.1926 6.12875C20.1926 5.77866 20.0536 5.44292 19.806 5.19537C19.5585 4.94782 19.2227 4.80875 18.8726 4.80875V4.80875ZM13.0014 6.3515C12.2521 6.33981 11.508 6.47729 10.8123 6.75594C10.1167 7.0346 9.48346 7.44885 8.94946 7.97458C8.41546 8.50032 7.99138 9.12703 7.70191 9.81823C7.41244 10.5094 7.26336 11.2513 7.26336 12.0007C7.26336 12.7501 7.41244 13.4919 7.70191 14.1831C7.99138 14.8743 8.41546 15.5011 8.94946 16.0268C9.48346 16.5525 10.1167 16.9668 10.8123 17.2454C11.508 17.5241 12.2521 17.6616 13.0014 17.6499C14.4844 17.6267 15.8988 17.0214 16.9393 15.9645C17.9799 14.9076 18.5631 13.4839 18.5631 12.0007C18.5631 10.5175 17.9799 9.09382 16.9393 8.03691C15.8988 6.97999 14.4844 6.37464 13.0014 6.3515V6.3515ZM13.0014 8.33288C13.974 8.33288 14.9067 8.71923 15.5944 9.40695C16.2821 10.0947 16.6685 11.0274 16.6685 12C16.6685 12.9726 16.2821 13.9053 15.5944 14.593C14.9067 15.2808 13.974 15.6671 13.0014 15.6671C12.0288 15.6671 11.096 15.2808 10.4083 14.593C9.72061 13.9053 9.33425 12.9726 9.33425 12C9.33425 11.0274 9.72061 10.0947 10.4083 9.40695C11.096 8.71923 12.0288 8.33288 13.0014 8.33288V8.33288Z"
                    fill="#23A6F0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_59">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="twitter_icon">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.91075 18C15.213 18 19.7546 11.0731 19.7546 5.07669C19.7546 4.88285 19.7546 4.68625 19.7464 4.49241C20.6306 3.84789 21.3937 3.04993 22 2.13592C21.1741 2.50262 20.2988 2.7443 19.4026 2.85312C20.3466 2.28495 21.0536 1.391 21.3922 0.337403C20.5054 0.86647 19.5346 1.23787 18.5226 1.43534C17.8422 0.705724 16.9419 0.222372 15.9611 0.0601592C14.9803 -0.102054 13.9737 0.0659244 13.0973 0.538075C12.2209 1.01023 11.5236 1.7602 11.1134 2.67182C10.7031 3.58345 10.6029 4.60585 10.8281 5.58066C9.03339 5.49005 7.27762 5.02057 5.67468 4.20269C4.07175 3.3848 2.65744 2.23678 1.5235 0.833069C0.947843 1.83421 0.772164 3.01843 1.03214 4.14526C1.29211 5.27209 1.96825 6.25705 2.92325 6.90013C2.20762 6.87565 1.50772 6.68215 0.88 6.33524V6.39754C0.881234 7.44631 1.24205 8.46247 1.90145 9.27429C2.56086 10.0861 3.4784 10.6438 4.499 10.853C4.11161 10.9605 3.71144 11.014 3.30963 11.0122C3.02635 11.0131 2.74365 10.9867 2.46537 10.9333C2.75383 11.8361 3.3155 12.6254 4.07171 13.1908C4.82793 13.7561 5.74081 14.0691 6.6825 14.0859C5.08276 15.3511 3.10668 16.0373 1.0725 16.034C0.714066 16.0355 0.355882 16.0147 0 15.9716C2.06458 17.297 4.46228 18.0008 6.91075 18V18Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>
          </div>
        </div>
        <hr />

        {/* footer_middle */}
        <div className="row pt-5">
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Company Info</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Carrier
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  We are Hiring
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Features</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Business Marketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  User Analytic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Live Chat
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Resource</h5>
            <ul className="nav flex-column text-primary-hover">
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  IOS & Android
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  We are Hiring
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2" href="/">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3 mb-4">
            <h5 className="mb-4 text-white">Get In Touch</h5>
            <div className="col-md-12">
              <form
                className="row row-cols-lg-auto g-2 align-items-center justify-content-end"
                method="POST"
              >
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    onClick={subscribeBtn}
                    className="btn btn-primary m-0"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="form-text mt-2">
                  By subscribing you receive our
                  <a
                    href="/"
                    className="text-decoration-underline text-reset mx-1"
                  >
                    Weekly Newsletter
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* footer_last */}

        <div className="container">
          <div className="row align-items-center justify-content-center py-4">
            Made With ❤️ By J.S
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
