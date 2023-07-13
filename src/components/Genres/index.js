import NavDropdown from "react-bootstrap/NavDropdown";
import {Loading} from "../Loading";
import {Dropdown} from "react-bootstrap";

export const GenresList = ({genres, loading}) => {
    return (
        <NavDropdown
            title="Genres"
            id={`offcanvasNavbarDropdown-expand-expand`}
        >
            {loading ?
                <Loading/>
                : genres.map(genre => {
                return (
                    <Dropdown.Item
                        key={genre.id}
                        href={`/genres/${genre.id}/1`}
                    >
                        {genre.name}
                    </Dropdown.Item>
                )
            })}
        </NavDropdown>
    )
}
