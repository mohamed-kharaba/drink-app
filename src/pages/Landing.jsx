import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Landing = () => {
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";

    const { data, isLoading, error } = useQuery({
        queryKey: ["search", searchTerm || "all"],
        queryFn: async () => {
            const response = await axios.get(`${cocktailSearchUrl}${searchTerm || "all"}`);
            return response.data.drinks || [];
        },
    });

    if (isLoading) return <div className="loading" />;

    if (error) return <div className="error">Error fetching data</div>;

    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <CocktailList drinks={data} />
        </>
    );
};

export default Landing;
// import { useLoaderDat
