import React, { useState } from 'react'

const Home = () => {
  const [recipes, setRecipes] = useState([
    {
      name: 'Portobello Baked Eggs with avocado & bread',
      price: '£8',
      image: 'plate.png'
    },
    {
      name: 'Summery salmon, beetroot & spicy mix',
      price: '15',
      image: 'plate.png'
    },
    {
      name: 'Backed Avocado Egg with herbs',
      price: '£8',
      image: 'plate.png'
    },
  ])
  return (
    <>
    <section className='bg-brand-2 text-dark py-5'>
      <div className='container' id='home-banner'>
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center">
            <div>
              <h1 className="display-2 fw-bold">You deserve better</h1>

              <h2 className="display-5 fw-light">Consider this a taste intervention.</h2>

              <button class="btn btn-success btn-sm text-uppercase rounded-0 py-3 px-4">Learn more</button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src={require('../dish.png')} className="img-fluid" alt="banner feature" />
          </div>
        </div>
      </div>
    </section>

    <section className='bg-light text-dark py-5'>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {/* <img src={require('../MaskGroup8.png')} className="img-fluid" alt="veggy" /> */}
            <div class="img-veggy"></div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-center">
            <div>
              <h2 className="display-5 fw-light">We make it easy for you to cook delicious dinners</h2>

              <p>Simply choose your recipes from a weekly menu and we’ll deliver freshly picked vegetables, pre-portioned ingredients and step-by-step recipes direct to your door ready for you to cook.</p>

              <button class="btn btn-success btn-sm text-uppercase rounded-0 py-3 px-4">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-brand-2 text-dark py-5'>
      <div className='container'>
        <div class="text-center">
        <h2 className="display-5 fw-light mb-4">Latest recipes</h2>
        </div>
        <div class="d-flex">
          {
            recipes ? recipes.map((recipe, index) => (
              <div class="card m-1 rounded-0 border border-secondary" key={index}>
                <div class="row g-0">
                  <div class="col-md-4 d-flex align-items-center justify-content-around text-danger">
                  <img src={require('../plate.png')} className="img-fluid" alt="recipe feature" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">{recipe.name}</p>
                      <span>{recipe.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            )) : null
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Home