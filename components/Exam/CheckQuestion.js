import React, { PropTypes } from 'react'
import Checkbox from 'material-ui/lib/checkbox'

class CheckQuestion extends React.Component {

  render () {
    return (
      <div>
        {this.props.num+'.'+this.props.title}
        {this.props.options.map((item,key) =>
          <Checkbox
            key={key}
            label={item}
            value={key.toString()}
          />
        )}
      </div>
    )
  }
}
CheckQuestion.propTypes = {
  title:PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  answer: React.PropTypes.arrayOf(React.PropTypes.string),
}

export default CheckQuestion;
