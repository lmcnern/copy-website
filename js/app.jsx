var React = require('react')

var Restaurant = React.createClass({
  render: function() {
    return (
      <article>
      <ol>
          <h2> {this.props.restaurant.name} </h2>
          <p> rating: {this.props.restaurant.rating}, {this.props.restaurant.reviews} reviews available,  </p>
          <h4> {this.props.restaurant.description}</h4>
          <button> View Menu 👍</button>
          <p>{this.props.restaurant.deliveryMin}</p>
      </ol>
      </article>
    )
  }
})

var RestaurantList = React.createClass({
  render: function() {
    var localRestaurant = this.props.restaurantList.map(function(restaurant) {
      return <Restaurant restaurant={restaurant} />
    })

   return (
     <section>
       <h2>Restaurants serving you:</h2>
       <ul>
         { localRestaurant }
       </ul>
     </section>
   )
  }
})

var RestaurantListContainer = React.createClass({
  getInitialState: function() {
    return {
      restaurant: [
        {
          name: 'Shawn O\'Donnell\'s American',
          rating: '4.5 out of 5',
          reviews: 99,
          description: 'Burgers, American, Sandwiches, Seafood',
          deliveryMin: '9 dollars'
        },
        {
          name: 'Chili & Sesame Korean Kitchen',
          rating: '4.5 out of 5',
          reviews: 126,
          description: 'Korean',
          deliveryMin: '9 dollars'
        },
        {
          name: 'Nue',
          rating: '4.5 out of 5',
          reviews: 123,
          description: 'Vegetarian, Vegan, Asian Fusion, Gluten Free, Tapas',
          deliveryMin: '9 dollars'
        },
        {
          name: 'Loving Hut',
          rating: '4. out of 5',
          reviews: 164,
          description: 'Vegan, Asian Fusion, Smoothies',
          deliveryMin: '9 dollars'
        },
        {
          name: 'Fuji Sushi Japanese Restaurant',
          rating: '4 out of 5',
          reviews: 298,
          description: 'Sushi, Sweet Stuff, Japanese',
          deliveryMin: '9 dollars'
        },
        {
          name: 'Vostok Dumpling House',
          rating: '4 out of 5',
          reviews: 218,
          description: 'Russian',
          deliveryMin: '5 dollars'
        }
      ]
    }
  },

  render: function() {
    return (
      <RestaurantList restaurantList={this.state.restaurant} />
    )
  }
})

var Footer = React.createClass({
  render: function() {
    return (
      <section>
        <p>Site Map: San Francisco | Los Angeles | New York | Miami | Chicago | Seattle | Houston | Boston | San Diego | Washington DC | Philadelphia | Austin | Las Vegas | Jersey
City | Dallas | Denver | Atlanta | Orlando | Sacramento | Oakland | Baltimore | Berkeley | Brooklyn | Pasadena | Phoenix | Boca Raton | Minneapolis | Alexandria | All Cities </p>
<p>Cuisines: Pizza | Chinese | Indian | Thai | Sushi | All Cuisines</p>
      </section>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <section>
        <h1>Eat24</h1>
          <h3>What are you Hungry for?</h3>

      </section>
    )
  }
})


var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <RestaurantListContainer />
        <Footer />
      </main>
    )
  }
})

React.render(<App />, document.body)
