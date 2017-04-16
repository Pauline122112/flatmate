import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
  }
}

export const shuffleJobs = () => {
  return {
    type: 'SHUFFLE_JOBS',
    chores: ["Vacuum", "Dishes", "Trash"]
  }
}

export const getId = (id) => {
  console.log(id);
  return {
    type: 'GET_ID',
    id: id
  }
}

export function fetchItems (table) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/${table}`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}

export function postItem (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/addshoppinglistitem`)
    .send({item: ev.target.elements[0].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}
export function postBill (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/addBill`)
    .send({bill: ev.target.elements[0].value, amount: ev.target.elements[1].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function delItem (id, table) {
  request
  .delete(`http://localhost:3000/api/${table}`)
  .send({id: id})
  .end((err, res) => {
    if (err) {
      return
    }
    callback(null, res.body)
  })
}

export function postEvent (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/addevent`)
    .send({date: ev.target.elements[1].value, event: ev.target.elements[0].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function deleteEvent (id, callback) {
  request
    .delete(`http://localhost:3000/api/delevent`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function postUser (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/adduser`)
    .send({name: ev.target.elements[0].value,
           email: ev.target.elements[1].value,
           hash: ev.target.elements[2].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}


