
export default {
    state: () => ({
        user: {},
        loggedIn: false,
        token: ""
    }),
    getters: {
        user(state) {
            return state.user
        },
        loggedIn(state) {
            return state.loggedIn
        },
        token(state) {
            return state.token
        }
    },
    mutations: {
        userStatus(state, payload) {
            state.loggedIn = payload
        },
        setUser (state, data) {
            state.user = data
        },
        attNameEmail (state, data) {
            if (data.name) {
                state.user.name = data.name
            }
            if (data.email) {
                state.user.email = data.email
            }
        },
        setToken (state, token) {
            state.token = token
        },
    },
    actions: {
        userStatus(context, payload) {
            context.commit("userStatus", payload)
        },
        setUser (context, data) {
            context.commit("setUser", data)
        },
        attNameEmail (context, data) {
            context.commit("attNameEmail", data)
        },
        setToken (context, token) {
            context.commit("setToken", token)
        },

    }
}