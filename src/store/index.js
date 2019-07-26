import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cart from './modules/cart'
import user from './modules/user'
import products from './modules/products'

Vue.use(Vuex);

export default new Vuex.Store ({
    actions,
    modules: {
        user,
        cart,
        products,
    },
})