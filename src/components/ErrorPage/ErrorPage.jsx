import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-5xl text-center">OOPS!!!</h1>
            <Link to={'/'} className="flex justify-center">Go Back</Link>
        </div>
    );
};

export default ErrorPage;