// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {detailsOfPlaces} = this.props
    const {name, imgUrl} = detailsOfPlaces
    return (
      <li>
        <img src={imgUrl} className="place-img" alt={name} />
        <p className="place">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
