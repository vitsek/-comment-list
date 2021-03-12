<template>
    <div class="form-comment">
        <div class="form-comment__placeholder" v-show="!validMessages.length">Комментариев пока нет</div>
        <div class="form-comment__message" v-for="(message, index) in validMessages" :key="message.id">
            <div class="form-comment__delete">
                <img class="form-comment__create-icon" @click="remove(index)" src="../img/unnamed.jpg" alt="close">
            </div>
            <p class="text">Комментарий:</p>
            <div class="form-comment__body">
                <p class="form-comment__body-p">{{ message.body }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'Form_comment',
    data() {
        return {
        title: "Form_comment",
        message:''
        }
    },
    computed:
        mapGetters(["validMessages", "messagesCount"]),
        
    methods: {
        ...mapActions(["fetchMessages"]),
        ...mapMutations(["deleteMessage"]),
        remove(index) {
            this.$store.commit('removeMessage', index);
            console.log(index);
        }
    }
}
</script>

<style scoped>

.form-comment {
    min-height: 60vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-comment__message {
    padding: 16px;
    margin-bottom: 40px;
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
    text-align: left;
    border: none;
    position: relative;
    width: 100%;
    border-radius: 10px;
}

.form-comment__create-icon {
    width:20px;
    height:20px;
    position:absolute; 
    right: 0px;
    cursor: pointer;
    margin-right: 10px;
}

.form-comment__body{
    word-wrap:break-word;
}

</style>