/**
 * Created by thund on 3/10/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import MengmengBody from './MengmengBody';

const MengmengTestPage = () => {

  let eventlist = ["Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping", "Sleeping"];
  let timeStart="8:00";
  let timeEnd="10:00";
  return (
    <div>
      <h1>Meng meng test</h1>

      <h2>Mengmeng calendar</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <MengmengBody/>
      </table>

    </div>
  );
};

export default MengmengTestPage;
