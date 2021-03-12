export default {
    state:{
        messages: [],
        page: 1,
        perPage: 3,
        totalPages: 1,
    },
    mutations: {
        updateMessages(state, messages){
            state.messages = messages;
        },
        removeMessage(state, index) {
            state.messages.splice(index, 1);
            state.totalPages = Math.ceil(state.messages.length / state.perPage);
            window.scrollTo(0, 0);
         },
         createMessages(state, newMessage){
            state.messages.push(newMessage);
            state.totalPages = Math.ceil(state.messages.length / state.perPage);
            state.page = state.totalPages;
            window.scrollTo(0, 0);
            console.log(state.messages);
        },
        setPage(state, page) {
            state.page = page;
            window.scrollTo(0, 0);
        }
    },
    actions:{
        async fetchMessages(context, limit = 3, start = 1){
            const result = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_start${start}`);
            const messages = await result.json();
            context.commit('updateMessages', messages);
        }
    },
    getters:{
        validMessages(state) {
            const startIndex = (state.page - 1) * state.perPage;
            const endIndex = state.page * state.perPage;
            const result = state.messages.slice(startIndex, endIndex);
            return [...result];
        },
        allMessages(state) {
            return state.messages;
        },
        totalPages(state) {
            return state.totalPages;
        },
        page(state) {
            return state.page;
        },
        messagesCount(state, getters) {
            return getters.validMessages.length;
        }
    }
};