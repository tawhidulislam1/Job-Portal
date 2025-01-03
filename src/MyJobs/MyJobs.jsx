import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import { Link } from 'react-router-dom';

const MyJobs = () => {

    const { user } = useAuth()
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data);
            })
    }, [user.email])
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Application</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                jobs.map((job, idx) => <>
                                    <tr key={job._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </td>
                                        <td>{job.applicationDeadline}</td>
                                        <th>
                                            <Link to={`/view-application/${job._id}`}>
                                                <button className="btn btn-link btn-success">View Application </button>
                                            </Link>
                                        </th>
                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;