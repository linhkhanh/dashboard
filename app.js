class SideBar extends React.Component {
  render() {
    return (
      <div className='sideBar'>
        <h3><a href="#">Dashboard</a></h3>
        <h3><a href="#">Widget</a></h3>
        <h3><a href="#">Reviews</a></h3>
        <h3><a href="#">Customers</a></h3>
        <h3><a href="#">Online Analysis</a></h3>
        <h3><a href="#">Settings</a></h3>
      </div>
    )
  }
}

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews shadow-sm p-3 mb-5 bg-white rounded">
        <h5>Reviews</h5>
        <h1>1,780</h1>
      </div>
    )
  }
}

class Rating extends React.Component {
  render() {
    return (
      <div className="rating shadow-sm p-3 mb-5 bg-white rounded">
        <h5>Average Rating</h5>
        <h1>4.8</h1>
      </div>
    )
  }
}

class Sentiment extends React.Component {
  render() {
    return (
      <div className="sentiment shadow-sm p-3 mb-5 bg-white rounded">
        <h5>Sentiment Analysis</h5>
        <div className="list-sentiment">
          <h2>901</h2>
          <h2>290</h2>
          <h2>180</h2>
        </div>
      </div>
    )
  }
}

class Visitors extends React.Component {
  render() {
    return (
      <div className="visitors shadow-sm p-3 mb-5 bg-white rounded">
        <h3>Website Visitors</h3>
        <img src="https://d2x3xhvgiqkx42.cloudfront.net/12345678-1234-1234-1234-1234567890ab/2016/11/27/8f1ed816-a199-4601-99d9-8e1d42df8aa0.gif" className="chart"></img>
      </div>
    )
  }
}

class Top extends React.Component {
  render() {
    return (
      <div className="top">
        <Reviews />
        <Rating />
        <Sentiment />
      </div>
    )
  }
}

class Detail extends React.Component {
  render() {
    return (
      <div className="detail">
        <Top />
        <Visitors />
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <Detail />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)