import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import Languages from './Languages'

const App = () => (
  <div className='app-container'>
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <Route exact path="/" component={Home} />
      <Languages />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
)

export default App
