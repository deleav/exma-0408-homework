import types from './types';

export default {
  state: {
    name: 'Deleav',
    email: 'deleav@gmail.com',
    description: 'yeee'
  },
  getters: {
    [types.getEmailProvider]( state ) {
      return state.email.substring( state.email.indexOf('@') + 1, state.email.length - 1 );
    }
  },
  mutations: {
    [types.updateName]( state, payload ) {
      state.name = payload.value;
    },
    [types.updateEmail]( state, payload ) {
      state.email = payload.value;
    },
    [types.updateDescrption]( state, payload ) {
      state.description = payload.value
    }
  },
  actions: {
    [types.updateName]( { commit }, payload ) {
      setTimeout(() => {
        commit( types.updateName, { value: 'Zet' } );
      }, 1000);
    }
  }
}