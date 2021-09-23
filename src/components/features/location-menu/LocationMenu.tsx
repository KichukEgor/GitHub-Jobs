import './location-menu.scss'

const LocationMenu = () => (
    <section className="location-menu-container">
        <h1>LOCATION</h1>
        <form action="" className='search-location'>
            <input className="search-location__query" type="text" placeholder='City, state, zip code or country'/>
        </form>
    </section>
);

export default LocationMenu;