import Sidebar from 'components/Sidebar';
import React, { Component } from 'react';
import Dashboard from 'components/Dashboard';
import ListView from 'components/ListView';

class HomePage extends Component {
  render() {
    const shoppingCart = [
      { id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20 },
      { id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15 },
      { id: 71, item: 'socks', color: 'black', size: 'all', price: 5 },
      { id: 56, name: 'pants', color: 'green', price: 25 },
      { id: 71, name: 'socks', color: 'black', price: 5 },
      { id: 72, name: 'socks', color: 'white', price: 5 },
      { id: 56, name: 'pants', color: 'green', price: 25 },
      { id: 71, name: 'socks', color: 'black', price: 5 },
      { id: 72, name: 'socks', color: 'white', price: 5 },
    ];
    return (
      <div className="page">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-9 main">
            <div className="row">
              <div className="col-8 main">
                <Dashboard />
                <div className="listView pt-4">
                  {shoppingCart.map((item, key) => (
                    <ListView key={item.id} />
                  ))}
                </div>
              </div>
              <div className="col-4">
                <h4>Detaille</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
