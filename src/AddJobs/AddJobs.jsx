import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";


const AddJobs = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const handleAddJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData);
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData);
        const { min, max, currency, ...newjob } = initialData;
        newjob.salaryRange = { min, max, currency }
        newjob.requirements = newjob.requirements.split('\n')
        newjob.responsibilities = newjob.responsibilities.split('\n')
        console.log(newjob);


        fetch('http://localhost:5000/jobs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newjob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your JobS has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/posted-jobs')
                }
            })
    }
    return (
        <div className="card bg-base-100 w-full my-10 shadow-2xl">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Add a New Job</h1>
            </div>
            <form onSubmit={handleAddJob} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="Deadline" className="input input-bordered" required />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="form-control ">
                        <select defaultValue='Job Type' name="jobType" className="select select-primary w-full">
                            <option disabled  >Job Type</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Hybrid</option>
                            <option>Remote</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <select defaultValue='Job Category' className="select select-primary w-full">
                            <option disabled  >Job Category</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Teaching</option>
                            <option>Engineering</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 items-end gap-2">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue='Currency' name="currency" className="select select-primary w-full max-w-xs">
                            <option disabled  >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea  input-bordered textarea-primary" name="description" placeholder="description"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Requirements</span>
                    </label>
                    <textarea className="textarea  input-bordered textarea-primary" name="requirements" placeholder="Write requirements in each link"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Responsibilities</span>
                    </label>
                    <textarea className="textarea  input-bordered textarea-primary" name="responsibilities" placeholder="Write responsibilities in each link"></textarea>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="url" name="company_logo" placeholder="Company Logo" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJobs;