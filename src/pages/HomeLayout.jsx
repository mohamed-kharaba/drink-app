import { Link, Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    // const navigation = useNavigation();
    // console.log(navigation);
    // const isPageLoading = navigation.state === "loading";
    // const value = "Some value";

    return (
        <div>
            <Navbar />
            <section className="page">
                <Outlet />
            </section>
            {/* {isPageLoading ? (
                <div className="loading"></div>
            ) : (
                <section className="page">
                    <Outlet context={{ value }} />
                </section>
            )} */}
        </div>
    );
};

export default HomeLayout;
