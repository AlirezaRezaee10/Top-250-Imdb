import {Link} from 'react-router-dom';
// import ReactPaginate from "react-paginate";

export default function Paginationn({pageCount, paginate, currentPage, prevPage, nextPage, error, genre, genreId}) {
    // return (
    // <ReactPaginate
    //     previousLabel={"<"}
    //     nextLabel={">"}
    //     breakLabel={"..."}
    //     breakClassName={"break-me"}
    //     pageCount={pageCount}
    //     marginPagesDisplayed={2}
    //     pageRangeDisplayed={5}
    //     onPageChange={paginate}
    //     containerClassName={"pagination"}
    //     subContainerClassName={"pages pagination"}
    //     activeClassName={"paginationActive"}
    // />
    // )
    // const pageNumbersStart = []
    let path = "/"
    const pageNumbersEnd = []
    const pageNumbersCenter = []
    const pageNumbers = []
    const pageNumber = []
    const next = currentPage + 1;
    const prev = currentPage - 1;

        for (let i = 1; i <= 3 && i < pageCount; i++) {
            pageNumber.push(i);
        }

        for (let i = pageCount - 2; i <= pageCount; i++) {
            pageNumbersEnd.push(i);
        }
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        if (i > 0 && i <= pageCount -1) pageNumbersCenter.push(i)
    }
    // pageNumbersStart.map(number => pageNumber.push(number));
    for (let i= 0; i < pageNumbersCenter.length; i++) {
        if (pageNumbersCenter[i] > pageNumber[2]) {
            if ( pageNumbersCenter[0] > pageNumber[2] + 1 ) {
                pageNumber.push('...')
                pageNumbersCenter.map(number => pageNumber.push(number))
                break
            } else pageNumber.push(pageNumbersCenter[i]);
        }
    }
    for (let i = 0; i <= pageNumbersEnd.length-1; i++) {
        if (pageNumbersEnd[i] > pageNumber.at(-1 ) ) {
            if ( pageNumbersEnd[0] - pageNumber.at(-1) > 1 ) {
                pageNumber.push('....')
                pageNumbersEnd.map(number => pageNumber.push(number))
                break
            } else pageNumber.push(pageNumbersEnd[i])
        }
    }
    // console.log(pageNumber.at(-1)+1)

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i)
    }

    if (genre) {
        path = `/genres/${genreId}/`
    }

    if (error) {
        return (
            <nav className='w-100 m-3 d-flex justify-content-center'>
                <ul className="pagination w-25">
                    <li className="page-item">
                        <a href='/movies?&page=1' className="page-link" paginate={1}>Back to Home</a>
                    </li>
                </ul>
            </nav>
        )
    }

    return (
        <nav className='w-100 m-3 d-flex justify-content-center'>
            <ul className="pagination">
                {currentPage > 1 ?
                    <li className="page-item" onClick={() => prevPage(currentPage)}>
                        <Link to={`${path}${prev}`} className="page-link">{"<"}</Link>
                    </li>
                    : ""}
                {pageNumber.map(num => (
                    <li key={num} className="page-item">
                        {typeof num === 'number' ?
                            <Link to={`${path}${num}`}
                                  className="page-link"
                                  onClick={() => paginate(num)}
                            >{num}</Link>
                            :<span className="page-link disabled">{num}</span>
                        }
                    </li>
                ))}
                {currentPage < pageNumbers[pageNumbers.length - 1] ?
                    <li className="page-item" onClick={() => nextPage(currentPage)}>
                        <Link to={`${path}${next}`} className="page-link">{">"}</Link>
                    </li>
                    : ""}
            </ul>
        </nav>
    )
}

