import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router";
import Paginationn from "../../components/Pagination";
import {GetData} from "../../Services/Http";
import {Posts} from "../../components/Posts";

export const Home = ({genre}) => {
    const {genreId} = useParams()
    let {pageNO} = useParams()
    pageNO = Number(pageNO)
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get("q")
    // console.log(query)

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(pageNO)
    const [pageCount, setPageCount] = useState(1)
    const [search, setSearch] = useState(query)
    const [loading, setLoading] = useState(true)
    const [endPoint, setEndPoint] = useState("movies?page=")

    console.log(endPoint)
    useEffect(() => {
        if (genre) {
            setEndPoint(`genres/${genreId}/movies?page=`)
            console.log(endPoint)
        }
        if (query && query !== ""){
            setCurrentPage(1)
            setEndPoint(`movies?q=${query}&page=`)
            console.log(endPoint)
        }
        // console.log(genre)
        GetData(setLoading, endPoint + currentPage)
            .then(res => {
                console.log(pageNO)
                setPosts(res.data);
                setPageCount(res.metadata.page_count)
                // setSearch("")
                console.log(currentPage)
            })
            .catch(err => console.log(err))
    }, [currentPage, endPoint, query])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        // setHasError(false)
    }

    const nextPage = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
    }
    const prevPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1)
    }

    return (
        <div className='container p-2'>
            <div className='row flex-wrap p-2 border border-light-suble rounded-4'>
                        <Posts
                            data={posts}
                            loading={loading}
                        />
            </div>
            <Paginationn
                paginate={paginate}
                pageCount={pageCount}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                error={false}
                genre={genre}
                genreId={genreId}
            />
        </div>
    )
}
