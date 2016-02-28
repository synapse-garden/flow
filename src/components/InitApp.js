import React from 'react'
import { connect } from 'react-redux'

import { countTasks } from '../actions/main'

const InitApp = ({
    onClickFn,
    wholeState
}) => (<div>

    <a href="#"
       onClick={() => onClickFn(wholeState.lists)}
       className="button">

            Initialize
    </a>

</div>)

const mapStateToProps = (state/*, props*/) => {
  return {
    wholeState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFn: (input) => {
      dispatch(countTasks(input))
    }
  }
}

const ConnectedInitApp = connect(mapStateToProps, mapDispatchToProps)(InitApp)

export default ConnectedInitApp
