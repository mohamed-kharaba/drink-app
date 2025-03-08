import Wrapper from "../assets/wrappers/CocktailList";

import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
    if (!drinks || !Array.isArray(drinks) || drinks.length === 0) {
        return <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>;
    }

    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = item;
        return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
        };
    });

    return (
        <Wrapper>
            {formattedDrinks.map((item) => {
                return <CocktailCard key={item.id} {...item} />;
            })}
        </Wrapper>
    );
};

export default CocktailList;
