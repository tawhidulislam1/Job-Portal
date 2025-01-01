import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const {
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange: { min, max, currency },
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo,
    } = useLoaderData();

    return (
        <div className="container mx-auto p-4">
            {/* Header Section */}
            <div className="card bg-base-100 shadow-xl mb-6">
                <figure>
                    <img
                        src={company_logo}
                        alt={`${company} Logo`}
                        className="w-32 h-32 mx-auto mt-4"
                    />
                </figure>
                <div className="card-body text-center">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-lg text-gray-500">{company}</p>
                </div>
            </div>

            {/* Job Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded">
                    <p>
                        <strong>Location:</strong> {location}
                    </p>
                    <p>
                        <strong>Job Type:</strong>{" "}
                        <span className="badge badge-primary">{jobType}</span>
                    </p>
                    <p>
                        <strong>Category:</strong> {category}
                    </p>
                    <p>
                        <strong>Application Deadline:</strong> {applicationDeadline}
                    </p>
                </div>

                <div className="p-4 border rounded">
                    <p>
                        <strong>Salary Range:</strong>{" "}
                        <span className="badge badge-secondary">
                            {min}-{max} {currency.toUpperCase()}
                        </span>
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Description</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            {/* Responsibilities Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Requirements Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Requirements</h2>
                <ul className="list-disc list-inside text-gray-600">
                    {requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Contact Section */}
            <div className="card bg-base-100 shadow-xl p-4">
                <h2 className="text-2xl font-bold mb-2">Contact HR</h2>
                <p>
                    <strong>Name:</strong> {hr_name}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a
                        href={`mailto:${hr_email}`}
                        className="text-blue-500 underline"
                    >
                        {hr_email}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default JobDetails;
