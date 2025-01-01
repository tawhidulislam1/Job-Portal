/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

;

const HotJobsCard = ({ job }) => {
    const { _id, title, company, company_logo, description, requirements, location, salaryRange } = job;
    console.log(job);
    return (
        <div className="card card-compact bg-base-100 px-4 shadow-xl">
            <div className="flex items-center gap-1">
                <figure>
                    <img
                        className="w-12"
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h3 className="text-2xl font-bold">{company}</h3>
                    <p>{location} </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>

                </h2>
                <p>{description}</p>
                <div className="flex flex-wrap gap-1">
                    {
                        requirements.map((skill, idx) => <p className="border-2  rounded text-center px-2" key={idx}>{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end flex items-center">
                    <p>Salary: {salaryRange.min}- {salaryRange.max}{salaryRange.currency}</p>
                    <Link to={`/job-details/${_id}`}> 
                        <button className="btn btn-primary">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;