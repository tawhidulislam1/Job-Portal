import Lottie from "lottie-react";
import registerAnimationData from "../../assets/login.json"
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const { logInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const forms = location.state || '/';
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                console.log("login user", result.user);
                const user = { email: email }
                axios.post("http://localhost:5000/jwt", user , {withCredentials:true})
                    .then(res => {
                        console.log(res.data);
                    })
                // navigate(forms)
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerAnimationData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mt-5 pl-10 text-4xl font-bold">Login Now!</h1>

                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;