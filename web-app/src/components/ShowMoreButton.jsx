export const ShowMoreButton = ({ setlimit, arrayFullSize }) => {
    const handleLoadMore = (e) => {
        e.preventDefault();
        setlimit(arrayFullSize);
    }

    return (
        <a href="#" className="col-md-4 load-more-button account-link" onClick={handleLoadMore}>
            <div className="account-wrapper">
                <h1 className="h5 accountType">Mas opciones</h1>
            </div>
        </a>
    )
}
