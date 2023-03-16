import { Link } from "react-router-dom";
import "./notfound.css";

const Notfound = () => {
  return (
    <section>
      <div className="container not_found__container">
        <h2>Page Not Found</h2>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
