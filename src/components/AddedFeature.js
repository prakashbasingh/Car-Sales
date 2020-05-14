import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carSaleAction'

const AddedFeature = props => {
  console.log(props, 'What we have in AddedFeature Props??????')
   return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" 
              onClick = { () => {props.removeFeature(props.feature)}}
              >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  console.log ({state}, 'data in addedFeature!!!!!!!!!')
  return {state}
}
export default connect(mapStateToProps, {removeFeature}) (AddedFeature);
