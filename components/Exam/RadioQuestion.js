import React, { PropTypes } from 'react'
import RadioButton from 'material-ui/lib/radio-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';

class RadioQuestion extends React.Component {
  render () {
    return (
      <div>
        {this.props.num+'.'+this.props.title}
        <RadioButtonGroup name="{this.props.num}">
          {this.props.options.map((item,key) =>
            <RadioButton
              key={key}
              label={item}
              value={key.toString()}
            />
          )}
        </RadioButtonGroup>
      </div>)
  }
}
/*RadioQuestion.propTypes = {
  title:PropTypes.string.isRequired,
  options:PropTypes.array.isRequired,
  answer: React.PropTypes.arrayOf(React.PropTypes.string)
}*/

export default RadioQuestion;
