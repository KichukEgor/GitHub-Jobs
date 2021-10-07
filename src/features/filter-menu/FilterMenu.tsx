import './FilterMenu.scss'

const locationInputData = [
  {
    name: 'city',
    value: 'London',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'Amsterdam',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'New York',
    type: 'radio'
  },
  {
    name: 'city',
    value: 'Berlin',
    type: 'radio'
  }
]

const mainCssStyle = 'filter-menu'

const FilterMenu = () => (
  <form action="" className={`${mainCssStyle}`}>
    <label htmlFor="checkTime">
      <input type="checkbox" name="checkTime" id="checkTime" value="full-time" />
      full-time
    </label>
    <h1 className={`${mainCssStyle}__heading`}>LOCATION</h1>
    <input
      className={`${mainCssStyle}__search`}
      type="text"
      placeholder="City, state, zip code or country"
    />
    <ul>
      {locationInputData.map(({ name, value, type }, index) => (
        <li key={value}>
          <input
            name={name}
            id={value}
            value={value}
            type={type}
            className={`${mainCssStyle}__location-button`}
          />
          <label className={`${mainCssStyle}__location-label`} htmlFor={value}>
            {value}
          </label>
        </li>
      ))}
    </ul>
  </form>
)

export default FilterMenu
