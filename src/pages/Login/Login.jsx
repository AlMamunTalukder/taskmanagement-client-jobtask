import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    googleSignIn().then((response) => {
      console.log(response.user);
      swal("Welcome", "Log in Successful", "success");
      navigate("/");
    });
  };

  const handleLogIn = () => {
    if (email && password) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          swal("Welcome", "Log in Successful", "success");

          navigate(location?.state ? location?.state : "/");
        })

        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const glassmorphismContainerStyle = {
    background: 'url("https://i.ibb.co/fXgxHq3/undefined-Imgur.jpg")',
    backgroundSize: "cover",
    backdropFilter: "blur(5px)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const glassmorphismContentStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "12px",
    padding: "2rem",
    width: "420px",
  };

  const glassmorphismCardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    borderRadius: "12px",
    padding: "2rem",
  };

  return (
    <div style={glassmorphismContainerStyle}>
      <div
        style={glassmorphismContentStyle}
        className="card flex-shrink-0 shadow-2xl"
      >
        <div className=" ">
          <div className="text-center mb-3">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p>{error}</p>
          </div>

          <div className="">
            <div className="card-body" style={glassmorphismCardStyle}>
              <div className="text-center">
                <p>Log in with </p>
                <button
                  onClick={handleGoogleLogIn}
                  className="btn btn-wide mt-4"
                >
                  Google
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button onClick={handleLogIn} className="btn btn-neutral">
                  Login
                </button>
              </div>

              <label className="label text-white">
                New here?
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-yellow-300"
                >
                  Create an account
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
