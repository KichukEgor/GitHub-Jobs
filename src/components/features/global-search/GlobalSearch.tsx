import { FC, useState } from "react"
import { useDispatch } from "react-redux"

import { api } from "../../../core/api"

import "./GlobalSearch.scss"

const mainCssClass = "global-search"

const GlobalSearch: FC = () => {

  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("")
  const [results, setResults] = useState([])

  const getInfo = async () => {
    const {data} = await api.get(`/jobs?company=SweetRush`) /*TODO /jobs?company=SweetRush НЕ РАБОТАЕТ?!*/
    setResults(data)
    console.log("data GETINFO", data)
  }

  // @ts-ignore
  return (
    <form action="" className={`${mainCssClass}`}>
      <input className={`${mainCssClass}__query`} type="text"
             value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
             placeholder="Title, companies, expertise or benefits" />
      <input className={`${mainCssClass}__submit`} onClick={getInfo} type="submit" />
      <ul>
        <li>{results}</li>
      </ul>
    </form>
  )
}


export default GlobalSearch