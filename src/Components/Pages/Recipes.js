import React from 'react'
import RecipesContent from '../RecipesContent/RecipesContent'
import TopRecipes from '../TopRecipes/TopRecipes'
import { Container } from 'react-bootstrap'
function Recipes() {
  return (
    <div>
      <Container>
        <RecipesContent/>
       <TopRecipes/>
       </Container>


   
    </div>
  )
}

export default Recipes