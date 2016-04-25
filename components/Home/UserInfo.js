import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    user: state.user.user || {}
  };
}

export class UserInfo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <p>姓名:{this.props.user.name}</p>
        <p>course:{this.props.user.course.map(item => <p>{item}</p>)}</p>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(UserInfo)
