import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {decrement, increment, multiply} from "../actions";

const Counter = ({value, onIncrement, onDecrement, incrementIfOdd, incrementAsync, onMultiple}) => {
  return (
    <p>
      Clicked: {value} times
      <button onClick={() => onIncrement(2)}>+2</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={incrementIfOdd}>Increment if odd</button>
      <button onClick={incrementAsync}>Increment async</button>
      <button onClick={() => onMultiple(2)}>Multiply by 2</button>
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  onMultiple: PropTypes.func.isRequired
}



const onIncrement = (amount) => (dispatch, getState) => {
  dispatch(increment(amount))
}

const onDecrement = () => (dispatch, getState) => {
  dispatch(decrement())
}

const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();
  if (counter % 2 !== 0) {
    dispatch(increment())
  }
}

const incrementAsync = () => (dispatch, getState) => {
  setTimeout(() => dispatch(increment()), 1000)
}

const onMultiple = (amount) => (dispatch, getState) => {
  dispatch(multiply(amount))
}



const mapStateToProps = (state) => ({
  value: state.counter,
})

export default connect(
  mapStateToProps,
  {
    onIncrement,
    onDecrement,
    incrementIfOdd,
    incrementAsync,
    onMultiple
  }
)(Counter)
