import LoginAuth from "./LoginAuth";
import RegisterAuth from "./RegisterAuth";

const Index = () => {
  return (
    <>
      <br /> <br />
      <div>
        <div className="containerxx">
          <div className="grid wide">
            <div className="row">
              <LoginAuth />
              <RegisterAuth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
