import React, { Component } from 'react';
import CountryCard from '../CountryCard';

import styled from 'styled-components'

const Container = styled.div``

const IncrementCountButton = styled.button`
    width: 200px
`

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appCount: 0,
            showCountriesList: true,
            countriesData: []
        }
        console.log('CONSTRUCTOR')
    }

    componentDidMount() {
        console.log('COMPONENT DID MOUNT')

        fetch("https://apis.ccbp.in/countries-data").then(response => {
            response.json().then(data => {
                this.setState({
                    countriesData: data
                })
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('COMPONENT DID UPDATE')
    }

    componentWillUnmount() {
        console.log('COMPONENT WILL UNMOUNT')
    }

    onClickIncrement = () => {
        this.setState({
            appCount: this.state.appCount + 1,
        })
    }

    toggleCountriesList = () => {
        this.setState({
            showCountriesList: !this.state.showCountriesList,
        })
    }

    render() {
        console.log('RENDER')

        return (
            <Container id="container">
                count: {this.state.appCount}
                <IncrementCountButton onClick={this.onClickIncrement}>Increment Count</IncrementCountButton>

                <button onClick={this.toggleCountriesList}>Toggle Countries List</button>

                <div style={{ display: this.state.showCountriesList ? 'block' : 'none' }}>
                    {this.state.countriesData.map(country => {
                        const { name, flag, population } = country
                        return <CountryCard key={name} name={name} image={flag} population={population} />
                    })}
                </div>

            </Container>
        );
    }
}

export default CountriesList;