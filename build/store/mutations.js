import Vue from 'vue';
var mutations = {
    SET_ACCOUNT: function (state, account) { return Vue.set(state, 'account', account); },
    SET_PASSWORD: function (state, password) { return Vue.set(state, 'password', password); }
};
export default mutations;
//# sourceMappingURL=mutations.js.map