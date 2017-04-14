import types from './types';

export default {
  namespaced: true,
  state: {
    name: 'Deleav',
    email: 'deleav@gmail.com',
    description: '我可以換行鷗歐歐歐歐歐'
  },
  getters: {
    [types.getEmailProvider]( state ) {
      return state.email.substring( state.email.indexOf('@') + 1, state.email.length - 1 );
    },
    [types.getDescriptionHtml]( state ) {
      return state.description.replace(/\n/g, '<br>');
    }
  },
  mutations: {
    // payload 可以是任何 type，建議是 object，這邊為了範例方便就只有單一值
    [types.updateName]( state, payload ) {
      state.name = payload;
    },
    [types.updateEmail]( state, payload ) {
      state.email = payload;
    },
    [types.updateDescription]( state, payload ) {
      state.description = payload
    }
  },
  actions: {
    [types.updateNameActions]( { commit }, payload ) {
      setTimeout(() => {
        commit( types.updateName, 'Zet' );
      }, 1000);
    }
  }
}