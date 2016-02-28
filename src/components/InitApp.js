import React from 'react'
import { connect } from 'react-redux'

import { initLists } from '../actions/main'

const InitApp = ({
    onClickFn
}) => (<div>

    <a href="#"
       onClick={() => onClickFn()}
       className="button">

            Initialize
    </a>

</div>)

const mapStateToProps = (state/*, props*/) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickFn: () => {
      dispatch(initLists())
    }
  }
}

const ConnectedInitApp = connect(null, mapDispatchToProps)(InitApp)

export default ConnectedInitApp
