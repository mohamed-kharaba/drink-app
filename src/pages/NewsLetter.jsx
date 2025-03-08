import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

const NewsLetter = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "test@test.com",
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(newsletterUrl, data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success(data.msg);
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
            toast.error(error?.response?.data?.msg || "Something went wrong");
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(formData);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>our newsletter</h4>
            {/* name */}
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input type="text" className="form-input" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            {/* last name */}
            <div className="form-row">
                <label htmlFor="lastName" className="form-label">
                    Last Name
                </label>
                <input type="text" className="form-input" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            {/* Email */}
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" className="form-input" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-block" style={{ marginTop: "0.5rem" }} disabled={isPending}>
                {isPending ? "Submitting" : "submit"}
            </button>
        </form>
    );
};

export default NewsLetter;
