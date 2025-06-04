import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError() as { message?: string; statusText?: string };

    return (
        <div className="container-fluid p-4">
            <div className="text-center py-4">
                <h2 className="text-danger">Oops! An error occured. </h2>
                <p className="text-secondary">{error.message || error.statusText}.</p>
                <Link to="/" className="btn btn-primary mt-5">← Back to Homepage</Link>
            </div>
        </div >
    );
}