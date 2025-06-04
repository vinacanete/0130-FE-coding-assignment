
import BankPhoto from '../assets/bankphoto.jpg';
import { Link } from "react-router";


export default function Homepage() {
    return (
        <div className="container-fluid p-5" id="bank-bg">
            <div className="row p-3 pb-5 bg-light rounded" style={{ height: "90vw" }}>
                <div className="py-4">
                    <h1 className="text-center">Welcome, Trusty Members</h1>
                    <h5 className="text-center">We promise not to lose your money 🤝</h5>
                </div>
                <br />
                <div className="text-center">
                    <img
                        src={BankPhoto}
                        alt="Banking App"
                        className="img-fluid rounded"
                        style={{ maxWidth: "80vw" }}
                    />
                </div>
                <div className="py-4">
                    <h6 className="text-center">
                        This is a simple banking application built with React and TypeScript. You can manage your accounts and track your goals.
                    </h6>
                    <p className="text-center">
                        <strong>Features: </strong>
                        React-Bootstrap, React-Router, API Fetching with <a href="https://mockapi.io/projects/683ba7d328a0b0f2fdc51fbf" target="_blank">Mock API</a>.
                        <p><Link to="/not-a-valid-link">Click here to see error page</Link></p>

                    </p>
                </div>
            </div>
        </div >
    );
}