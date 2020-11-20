export const fetchProducts = () => {
  return (dispatch) => {
      fetch("https://us-central1-price-calculator-26fca.cloudfunctions.net/api/products")
      .then(res => res.json())
      .then(response => {
          const action = {
              type: 'FETCH_PRODUCTS',
              value: response
          }
          dispatch(action)
      })
  }
}

export const fetchInternets = () => {
    return (dispatch) => {
        fetch("https://us-central1-price-calculator-26fca.cloudfunctions.net/api/internets")
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'FETCH_INTERNETS',
                value: response
            }
            dispatch(action)
        })
    }
  }