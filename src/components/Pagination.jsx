const Pagination= ({productLength, productPerPage, setCurrentPage}) =>{ 
    let pages = []
    const pagesLength = Math.ceil(productLength/productPerPage)


    for(let i=1;i<= pagesLength;i++){
        pages.push(i)
    }
    return(
        <div>
            {pages.map((page, i) =>{
                return <button className="button-pagination" key={i} onClick={() => setCurrentPage(page)}>{page}</button>
            })}
        </div>
    )
}

export default Pagination