import './index.scss'

const GlobalSearch = () => (
    <section className="global-search-container">
        <form action="" className="global-search">
            <input className="global-search__query" type="text" placeholder='Title, companies, expertise or benefits'/>
            <input className="global-search__submit" type="submit" value="Search"/>
        </form>
    </section>
);

export default GlobalSearch;