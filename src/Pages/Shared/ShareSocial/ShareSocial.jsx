import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";


const ShareSocial = () => {
    const { loginWithGoogle } = useContext(AuthContext)
    const goolgeLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>

            <button onClick={goolgeLogin} className="btn btn-primary">Login Google</button>
        </div>
    );
};

export default ShareSocial;