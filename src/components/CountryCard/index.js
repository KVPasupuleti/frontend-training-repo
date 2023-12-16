import React, { Component } from 'react'

import './index.css'

class CountryCard extends Component {

    renderCountryImage = () => {
        return <div>
            <img src={this.props.image} />
        </div>
    }

    renderCountryDetails = () => {
        return <div>
            <h1>{this.props.name}</h1>
            <span>Population: {this.props.population}</span>
        </div>
    }


    renderCountryCard = () => {
        return <div className="country-card">
            {this.renderCountryImage()}
            {this.renderCountryDetails()}
        </div>
    }

    render() {
        return this.renderCountryCard()
    }
}

export default CountryCard