// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}
  searchPlaces = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    console.log(destinationsList)

    const filteringPlaces = destinationsList.filter(eachItem => {
      return eachItem.name.includes(searchInput)
    })
    console.log(filteringPlaces)
    return (
      <div>
        <div className="home">
          <h1 className="head">Destination Search</h1>
          <input
            onChange={this.searchPlaces}
            placeholder="Search"
            type="search"
            className="input-style"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img-style"
          />
        </div>
        <ul className="desti-items">
          {filteringPlaces.map(eachItem => (
            <DestinationItem
              key={eachItem.id}
              detailsOfPlaces={eachItem}
              uniqueKey={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
