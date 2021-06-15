import 'react-app-polyfill/ie11';
import 'date-time-format-timezone'

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';
import { Thing } from '../.';

const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Brazil/West');

const date = new Date();
const timeZone = 'Brazil/West';
const zonedDate = utcToZonedTime(date, timeZone);

const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
const output = format(zonedDate, pattern, { timeZone: 'Brazil/West' });

const App = () => {
  return (
    <div>
      <Thing />
      {output}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
