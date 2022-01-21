export function saveNewPassword({ site, pass }) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9000/pass/save', {
      method: 'POST',
      body: JSON.stringify({ site, pass }),
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => resolve(res.json()))
    .catch(err => reject(err))
  })
}

export function getAllPass() {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:9000/pass/all', {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => resolve(res.json()))
    .catch(err => reject(err))
  })
}