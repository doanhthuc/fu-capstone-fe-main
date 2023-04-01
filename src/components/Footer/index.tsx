import appStore from "../../assets/img/app-store.png";
import googlePlay from "../../assets/img/google-play.png";
import logo from "../../assets/img/logo.png";
import cards from "../../assets/img/cards.png";

const Index = () => {
  return (
    <>
      <div className="sub-footer">
        <div className="grid wide">
          <div className="row">
            <div className="col p-6 m-12">
              <h3 className="sub-footer-name">
                Get our emails for info on new items, sales and more.
              </h3>
              <p className="sub-footer-des">
                We'll email you a voucher worth £10 off your first order over
                £50.
              </p>
              <div className="sub-footer-emailadress">
                <input type="email" placeholder="Email Adress" />
                <button className="sub-footer-emailadress-btn">
                  Subscribe
                </button>
              </div>
              <p className="sub-footer-til">
                By subscribing you agree to our Terms &amp; Conditions and
                Privacy &amp; Cookies Policy.
              </p>
            </div>
            <div className="col p-6 m-12">
              <h2 className="sub-footer-name">
                Need help? <br />
                (+800) 1234 5678 90
              </h2>
              <p className="sub-footer-des">
                We'll email you a voucher worth £10 off your first order over
                £50.
              </p>
              <div className="sub-footer-download align__item-center">
                <span className="sub-footer-download-link">
                  <img src={appStore} alt="" />
                </span>
                <span className="sub-footer-download-link">
                  <img src={googlePlay} alt="" />
                </span>
              </div>
              <p className="sub-footer-til">
                Shopping App: Try our View in Your Room feature, manage
                registries and save payment info.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="col p-3 m-12">
              <img src={logo} alt="" className="footer-logo" />
              <div className="footer-des">
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis in termapol.
              </div>
              <div className="footer-contact">
                (+800) 1234 5678 90 – info@example.com
              </div>
            </div>
            <div className="col p-3 m-12">
              <h2 className="footer-name">Infomation</h2>
              <ul className="footer-list">
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">About us</span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Privacy Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Return Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Shipping Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Dropshiping
                  </span>
                </li>
              </ul>
            </div>
            <div className="col p-3 m-12">
              <h2 className="footer-name">Infomation</h2>
              <ul className="footer-list">
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">About us</span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Privacy Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Return Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Shipping Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Dropshiping
                  </span>
                </li>
              </ul>
            </div>
            <div className="col p-3 m-12">
              <h2 className="footer-name">Infomation</h2>
              <ul className="footer-list">
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">About us</span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Privacy Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Return Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Shipping Policy
                  </span>
                </li>
                <li className="footer-item fz-1-6rem line-height-2rem">
                  <span className="text_dark footer-item-link">
                    Dropshiping
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row" style={{margin: "70px 0 10px"}}>
            <div className="col p-8">
              <div className="footer-coppyright display__flex">
                <p className="footer-coppyright">All right reserved.</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={cards} className="hide-on-mobile" alt="" />
              </div>
            </div>
            <div className="col p-4">
              <ul className="footer-coppyright-list display__flex">
                <li className="footer-coppyright-item">Privacy Policy</li>
                &nbsp;&nbsp;&nbsp;
                <li className="footer-coppyright-item">Privacy Policy</li>
                &nbsp;&nbsp;&nbsp;
                <li className="footer-coppyright-item">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
