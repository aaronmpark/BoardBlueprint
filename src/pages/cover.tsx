import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

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
            <h1 className="cover-heading">Aaron Park = 🤓.</h1>
            <p className="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <button
                className="btn btn-lg btn-secondary"
                onClick={() => navigate("/home")}
              >
                Enter site
              </button>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner"></div>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
