import { API_ENDPOINT } from './config';

export const apiGetTasks = () => new Promise(resolve => {
  fetch(`${API_ENDPOINT}/task`)
    .then(response => response.json())
    .then(resolve);
});

export const apiSubmit = (title, importance) => new Promise(resolve => {
  fetch(`${API_ENDPOINT}/task`, {
    method: 'POST',
    body: JSON.stringify({ title, importance }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(resolve);
});

export const apiSetDone = (id, done) => new Promise(resolve => {
  fetch(`${API_ENDPOINT}/task/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ isDone: String(done) }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(resolve);
});

export const apiDelete = id => new Promise(resolve => {
  fetch(`${API_ENDPOINT}/task/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(resolve);
});
