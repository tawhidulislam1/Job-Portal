import { useParams } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const jobApplication = {
            job_id: id,
            application_email: user.email,
            linkdin, github, resume
        }
        console.log(jobApplication);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkdin URL</span>
                            </label>
                            <input type="url" name="linkdin" placeholder="Linkdin URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github Url</span>
                            </label>
                            <input type="url" name="github" placeholder="Github Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume Url</span>
                            </label>
                            <input type="url" name="resume" placeholder="Github Url" className="input input-bordered" required />
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

export default JobApply;