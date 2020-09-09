import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {initialState, reducer} from './reducer/FeatureReducer';
import {addFeature, removeFeature} from './reducer/Actions'

const App = (props) => {
const {state, addFeature, removeFeature} = props

console.log(state)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures
         car={state.car}
        removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures 
        additionalFeatures={state.additionalFeatures}
        addFeature={addFeature}
        />
        <Total car={state.car}
         additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return{
    state
  }
}

export default connect(mapStatetoProps, {addFeature, removeFeature})(App);
