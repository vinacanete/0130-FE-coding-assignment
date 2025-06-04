import { CardFooter } from "react-bootstrap";
import { Link } from "react-router";



export default function Footer() {

    return (
        <CardFooter className="text-center">
            <p>© 2025 Trusty Bank. All rights reserved.</p>
            <p>
                <Link to="/privacy-policy">Privacy Policy</Link>  |
                <Link to="/terms-of-service">Terms of Service</Link>
            </p>
        </CardFooter>
    );
}