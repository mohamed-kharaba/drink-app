import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
    const error = useRouteError();
    console.log("this single error:", error);

    return <h2>{error.message}</h2>;

    // return <div>There was an error...</div>;
};

export default SinglePageError;
