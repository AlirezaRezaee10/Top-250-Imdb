import {useState} from "react";
import {useNavigate} from "react-router";

export const Search = () => {
    const [term, setTerm] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${term}`)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="d-flex">
                <input
                    value={term}
                    onChange={(e) => (setTerm(e.target.value))}
                    placeholder="Search"
                    aria-label="Search"
                    type="search"
                    className="me-2 form-control"
                    required
                />
                <button type="submit" className="btn btn-outline-success">Search</button>
            </form>
        </>
    )
}

