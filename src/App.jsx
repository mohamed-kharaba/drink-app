import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Landing, Cocktail, NewsLetter, HomeLayout, Error } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "cocktail",
                element: <Cocktail />,
            },
            {
                path: "newsletter",
                element: <NewsLetter />,
            },
            {
                path: "about",
                element: <About />,
                children: [
                    {
                        path: "company",
                        element: <h2>Our Company</h2>,
                    },
                    {
                        path: "person",
                        element: <h2>Mohamed Kharaba</h2>,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};
export default App;
