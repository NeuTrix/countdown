import moment from 'moment';

//  ***
// to ensure that localized api on computer can work on phone
// regardless of ip address

import Expo from 'expo'; 
//  Expo.constants not
import { Constants } from 'expo'
// const { manifest } = Constants;
const api = Constants.manifest.packagerOpts.dev
  // debugger host gets the url from computer dynamically
  ? Constants.manifest.debuggerHost.split(':').shift().concat(`:3000`)
  : 'productionurl.com'

const url = `http://${api}/events`;

// ****

export function getEvents() {
  return fetch(url)
    .then(resp => resp.json())
    .then(events => events.map(evt => ({
      ...events,
      // map over array to ensure string from api is a proper date
      date: new Date(evt.date)
    })));
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('H A on D MMM YYYY');
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(moment(new Date(eventDate)).diff(new Date()));
  return {
    days: parseInt(duration.as('days')),
    hours: duration.get('hours'),
    minutes: duration.get('minutes'),
    seconds: duration.get('seconds'),
  };
}