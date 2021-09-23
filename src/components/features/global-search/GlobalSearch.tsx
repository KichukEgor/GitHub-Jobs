import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import {filteredJobsList} from "../../../store/jobs-list/actions";

import './global-search.scss'

const mainCssClass = 'global-search'

const GlobalSearch: FC = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')

    const searchHandler=()=> {
        // @ts-ignore /*TODO*/
        dispatch(filteredJobsList(searchValue))
    }

    return (
            <form action="" className={ `${ mainCssClass }` }>
                <input className={ `${ mainCssClass }__query` } type="text"
                       value={ searchValue } onChange={ (e)=>setSearchValue(e.target.value) }
                       placeholder='Title, companies, expertise or benefits'/>
                <input className={ `${ mainCssClass }__submit` } onClick={ searchHandler } type="submit" />
            </form>
    )
 };

export default GlobalSearch;