import React, {useState} from 'react';
import { connect } from 'react-redux';//it is a Higher Order Component (similar to custom hooks)

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';





const App = state  => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // }; these moved to reducer file.

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

//bSTP returns an object - each property on that object is added to the props of the connected component
//the connect function will call mSTP  and pass in the entire redux store as an argument!
const mapStateToProps = state=> {
  console.log({state},' What We Have Now?????!!!!!')
  //so the state has props of additionalFeatures, additionalPrice, car(features: [image, name, price])
  return{
    itsTooHard: 100,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice

  }
}

export default connect(mapStateToProps, {}) (App);
//////....[{"second", need to connect App component ti the redux store then using mapStateToProps function to ...map the state(from the redux store) to props (of the connected component) }]....////// follow below---->

//here connect is called twice
//1st call is passing in the mSTP(Map State To Props) and an object
// 2nd call is passing in the component we want to connect to the Redux store.