export default (state = {}, action) => {
    switch (action.type) {
     case 'AUTH_USER':
      return {
        auth: true,
        detail: action.payload['detail'],
        token:  action.payload['token'],
      }
     default:
      return state
    }
   } 