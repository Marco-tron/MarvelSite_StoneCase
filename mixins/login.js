export default{
    data() {
        return {
        }
    },
    mounted () {
        // get user data from session storage
        const user = JSON.parse(sessionStorage.getItem("user"));
        const loggedIn = sessionStorage.getItem("loggedIn") === "true";
        const token = sessionStorage.getItem("token");
        const timeout = sessionStorage.getItem("timeout");
        
        // att store so this data can be used anywhere
        this.$store.dispatch("setUser", user);
        this.$store.dispatch("userStatus", loggedIn);
        this.$store.dispatch("setToken", token);
    },
    methods: {}
}