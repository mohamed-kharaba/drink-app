import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About, Landing, Cocktail, NewsLetter, HomeLayout, Error, SinglePageError } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <SinglePageError />,
            },
            {
                path: "cocktail/:id",
                element: <Cocktail />,
                errorElement: <SinglePageError />,
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
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    );
};
export default App;
