import JobsList from "./components/jobs-list";
import Header from "./layout/header";
import GlobalSearch from "./components/global-search";
import LocationMenu from "./components/location-menu";

import React from "react";

import "./App.scss";

const App: React.FC = (): JSX.Element => {
    return (
        <div className="App">
            <Header/>
            <GlobalSearch/>
            <section>
                <div className='search-box'>
                    <input type="text"/>
                </div>
            </section>
            <main>
                <aside>
                    <LocationMenu/>
                </aside>
                <JobsList/>
            </main>

            <footer>
                <a href="https://github.com/KichukEgor">created by Egor Kichuk</a>
            </footer>
        </div>
    );
}

export default App;
