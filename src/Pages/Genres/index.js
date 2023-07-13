import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {GetData} from "../../Services/Http";

export const Genres = ({genreName, id}) => {
    const {genre} = useParams()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        GetData(setLoading, `genres/${id}/movies`)
            .then(res => {
                setPosts(res)
            })
            .then(err => console.log(err))
    },[genre, id])
    return (
        <></>
    )
}
