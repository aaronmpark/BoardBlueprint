import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Copyright from "../components/Copyright";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div
      className="cover-page d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Container>
        <div className="text-center">
          <header className="mb-auto">
            <div className="inner"></div>
          </header>

          <main role="main">
            <h1 className="cover-heading">Engineer Your Ideal Keystrokes - Begin Your Custom Build</h1>
            <p className="lead">
              Design Your Perfect Keyboard: Customization at Your Fingertips
            </p>
            <p className="lead">
              <button
                className="btn btn-lg btn-secondary"
                onClick={() => navigate("/home")}
              >
                Start Your Build
              </button>
            </p>
          </main>

          <footer className="mastfoot mt-auto fixed-bottom">
            <div className="inner"></div>
            <Copyright />
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
