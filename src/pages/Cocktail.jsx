import axios from "axios";
import { Link, useParams } from "react-router-dom";
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

    if (!data || !data.drinks) return null;

    const singleDrink = data.drinks[0];
    // console.log(singleDrink);

    const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;

    const validIngredient = Object.keys(singleDrink)
        .filter((key) => key.startsWith("strIngredient") && singleDrink[key] !== null)
        .map((key) => singleDrink[key]);

    // console.log(validIngredient);

    return (
        <Wrapper>
            <header>
                <Link to="/" className="btn">
                    back home
                </Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image} alt={name} className="img" />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">Name :</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">Category :</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">Info :</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">Glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">instructions :</span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-data">Ingredient :</span>
                        {validIngredient.map((item, index) => {
                            return (
                                <span className="ing" key={item}>
                                    {item}
                                    {index < validIngredient.length - 1 ? "," : ""}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Cocktail;
