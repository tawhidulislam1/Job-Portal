import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
    const applications = useLoaderData()
    console.log(applications);

    const handleStatus = (e, id) => {
        const data = {
            status: e.target.value,
        }
        fetch(`http://localhost:5000/job-application/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h3>{applications.length}</h3>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>Application Email</th>
                                    <th>Application Link</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    applications.map((application, idx) => <>
                                        <tr key={idx}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="font-bold">{application.application_email}</div>
                                            </td>
                                            <td>
                                                {application.linkdin}
                                                <br />
                                                {application.github}
                                                <br />
                                                {application.resume}
                                                <br />
                                            </td>
                                            <th>
                                                <select onChange={(e) => handleStatus(e, application._id)} defaultValue={application.status || "Change Status"} className="select select-bordered select-sm w-full max-w-xs">
                                                    <option disabled >Change Status</option>
                                                    <option>Wating </option>
                                                    <option>Interview</option>
                                                    <option>Hired</option>
                                                    <option>Rejected</option>
                                                </select>
                                            </th>
                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewApplication;