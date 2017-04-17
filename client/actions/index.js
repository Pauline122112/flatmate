import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
  }
}

export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
    list: users.map(user => user)
  }
}

export const receiveBillAllocations = (allocations) => {
  return {
    type: 'RECEIVE_ALLOCATIONS',
    list: allocations.map(allocation => allocation)
  }
}

export const shuffleJobs = () => {
  return {
    type: 'SHUFFLE_JOBS',
    chores: ["Vacuum", "Dishes", "Trash"]
  }
}

export const addBill = (bill) => {
  return {
    type: 'ADD_BILL',
    payload: bill
  }
}

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
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

export function fetchUsers () {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/users`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveUsers(res.body))
      })
  }
}

export function fetchBillAllocations () {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/bill_allocations`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveBillAllocations(res.body))
      })
  }
}

export function postItem (formData) {
  return (dispatch) => {
  request
    .post(`http://localhost:3000/api/shopping_list_items`)
    .send({item: formData})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(addItem(res.body))
    })
  }
}

export function postBill (formData) {
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/bills`)
      .send(formData)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(addBill(res.body))
      })
    }
}

export function delItem (id, table) {
  return (dispatch) => {
    request
    .delete(`http://localhost:3000/api/${table}`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body))
    })
  }
}

export function delBill (id) {
  return (dispatch) => {
    request
    .delete(`http://localhost:3000/api/bills`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
    })
  }
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

export function postUser (object, callback) {
  request
    .post(`http://localhost:3000/api/adduser`)
    .send(object)
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function updateEmail (id, newestEmail, callback) {
  request
    .put(`http://localhost:3000/api/updateemail`)
    .send({id: id, newEmail: newestEmail})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function addUserToFlat (ev, callback) {
  ev.preventDefault(ev)
  request
    .put(`http://localhost:3000/api/updateflatid`)
    .send({email: ev.target.elements[0].value, flat_id: 1001})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function removeFlattie (userEmail, callback) {
  request
    .put(`http://localhost:3000/api/updateflatid`)
    .send({email: userEmail, flat_id: null})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}
