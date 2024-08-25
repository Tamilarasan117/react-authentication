// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-detail-container">
      <div className="content-card">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <div className="home-img-card1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-img"
          />
        </div>
        <p className="home-description">
          Fashion is part of the daily air and it does not quite that it changes
          all the time. Clothes have always been a marker of the era and we are
          in a revolution. Your fashion makes you been seen and heard that way
          you are. So, celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button type="button" className="shop-button">
          Shop Now
        </button>
      </div>
      <div className="home-img-card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-img"
        />
      </div>
    </div>
  </div>
)

export default Home
