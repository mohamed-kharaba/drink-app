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

    if (isLoading) return <h5>Loading...</h5>;
    if (error) return <h5>Error: {error.message}</h5>;

    return (
        <>
            <CocktailList drinks={drinks} />
        </>
    );
};

export default Landing;
