/**
 * Created by thund on 3/10/2017.
 */
import React, {PropTypes} from 'react';
import MengmengRow from './MengmengRow';

class MengmengBody extends React.Component {

  render(){

    let rows = [];
    let eventlist = ["Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping"];
    for (var i=0; i<4; i++){
     let timeStart = 8+2*i+":00";
     let timeEnd = 10+2*i+":00";
     console.log("timeStart: "+timeStart+", timeEnd: "+timeEnd);
     rows.push(<MengmengRow rowIndex={i} timeStart={timeStart} timeEnd={timeEnd} eventlist={eventlist}/>);
    }

    return <tbody>{rows}</tbody>;
  }
}

export default MengmengBody;
