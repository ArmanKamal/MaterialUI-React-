import React from 'react'
import CoffeeCard from './CoffeeCard'
import {Grid} from '@material-ui/core'
import CoffemakerList from './constants.js'

function Content() {


    const getCoffeeMakerCard =  (coffeMakerObj) => {
        return (
                <Grid item xs={12} sm={4}>
                    <CoffeeCard { ...coffeMakerObj} />
                </Grid>
        )
    }



    return (
        <Grid container spacing="3">
            {
                CoffemakerList.map( coffeeMakerObj => { 
                    return getCoffeeMakerCard(coffeeMakerObj)
                })
            }
        </Grid>
    )
}

export default Content
