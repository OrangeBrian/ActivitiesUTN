import axios from 'axios'

export const post = newPost => {
  return axios
    .post('http://localhost:5000/api/activities', {
      creator: newPost.creator,
      text: newPost.text
    })
    .then(response => {
      return response.data;
    })
}