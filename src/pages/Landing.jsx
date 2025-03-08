import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import CocktailList from "../components/CocktailList";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Landing = () => {
    const {
        data: drinks,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["drinks"],
        queryFn: async () => {
            const searchTerm = "a";
            const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
            return response.data.drinks;
        },
    });

    if (isLoading) return <div className="loading"></div>;
    if (error) return <div className="error">Error: {error.message}</div>;

    return (
        <>
            <CocktailList drinks={drinks} />
        </>
    );
};

export default Landing;
