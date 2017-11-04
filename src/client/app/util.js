import axios from 'axios';

export function fetchSkills(text) {
  return axios.get('/', {
    params: {
      text: text
    }
  })
  .then(res => res.data)
}
