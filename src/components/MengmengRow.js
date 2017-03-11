/**
 * Created by thund on 3/10/2017.
 */
import React, {PropTypes} from 'react';

class MengmengRow extends React.Component {

  render() {
    let rowIndex = this.props.rowIndex;
    return (
      <tr>
        <td>{this.props.timeStart} - {this.props.timeEnd}</td>
        {this.props.eventlist.map(function(event, i){
          return (<td key={rowIndex+"-"+i}>{event}</td>);
        })}
      </tr>
    );
  }
}

MengmengRow.propTypes={
  timeStart: PropTypes.string.isRequired,
  timeEnd: PropTypes.string.isRequired,
  rowIndex: PropTypes.number.isRequired
}

export default MengmengRow;
