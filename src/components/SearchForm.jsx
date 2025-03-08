import Wrapper from "../assets/wrappers/SearchForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";

const SearchForm = ({ searchTerm }) => {
    const [search, setSearch] = useState(searchTerm || "");
    const navigate = useNavigate();
    const isFetching = useIsFetching();
    const isSubmitting = isFetching > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${search}`);
    };

    return (
        <Wrapper>
            <form className="form" onSubmit={handleSubmit}>
                <input type="search" name="search" className="form-input" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "searching..." : "search"}
                </button>
            </form>
        </Wrapper>
    );
};

export default SearchForm;
