import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const { id } = useParams();
    const navigate = useNavigate()
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
        fetch('http://localhost:5000/job-application', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-application')
                }
            })
    }
    return (
        <div className="card bg-base-100 w-full my-10 shadow-2xl">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Good Luck For Apply</h1>
            </div>
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
                    <input type="url" name="resume" placeholder="Resume Url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;