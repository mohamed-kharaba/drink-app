import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Wrapper from "../assets/wrappers/CocktailPage";

const singleCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Cocktail = () => {
    const { id } = useParams();

    const { data, isLoading, error } = useQuery({
        queryKey: ["cocktail", id],
        queryFn: async () => {
            const { data } = await axios.get(`${singleCocktailUrl}${id}`);

            return data;
        },
    });

    if (isLoading) return <div className="loading"></div>;
    if (error) return <div className="error"> error fetching cocktail</div>;

    const singleDrink = data.drinks[0];
    console.log(singleDrink);

    return <h1>Cocktail</h1>;
};

export default Cocktail;
