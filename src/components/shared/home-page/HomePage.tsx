import {FC} from 'react';

import { JobsList, LocationMenu, GlobalSearch } from '../../features';

import "./home-page.scss"

const HomePage: FC = () => {
    return (
        <>
            <GlobalSearch/>
            <section>
                <div className='search-box'>
                    <input type="text"/>
                </div>
            </section>
            <main>
                <section>
                    <JobsList/>
                </section>
                <aside>
                    <LocationMenu/>
                </aside>
                <JobsList/>
            </main>
        </>
    )
};

export default HomePage;