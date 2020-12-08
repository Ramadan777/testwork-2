export const loadingPhotos = () => {
  return (dispatch) => {
    dispatch({type: 'start'})
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=50")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'load',
          payload: json
        })
      })
  }
}

export const removePhotos = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/photos/?_limit=50${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'delete',
          payload: id
        })
      })
  }
}