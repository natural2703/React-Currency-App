const DetailsHeader = ({sortByBid,sortByAsk})=>{
    return(
        <div className='container'>
                <p>data</p>
                <p onClick={sortByBid}>bid</p>
                <p onClick={sortByAsk}>ask</p>
                <p>delete?</p>
        </div>
    )
}
export default DetailsHeader;