<template>
    <div class="main">
        <Form_comment />
        <div class="main__create-comment">
            <textarea class="main__textarea" v-model="body" placeholder="Оставьте свой комментарий...">
            </textarea>
            <div class="main__send">
                <button class="main__button" @click.prevent="submit"><span>Отправить</span></button>
            </div>  
        </div>
        <div class="main__pagination">
            <div class="main__page"
                v-for="pageNumber in totalPages"
                v-bind:class="{ page_active: page === pageNumber }"
                :key="pageNumber"
                @click="setPage(pageNumber)">
                <span class="main__span">{{pageNumber}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Form_comment from "./Form_comment"


export default {
    name: 'Main',
    components: {
        Form_comment
    },
    data() {
        return {
            body:'',
        }
    },
    computed:
        mapGetters(["totalPages", "page"]),
    methods: {
        ...mapMutations(["createMessages", "setPage"]),
        submit() {
            this.createMessages({
                body: this.body,
            });
            this.body = '';
        }
    }
}
</script>


<style>

.main {
    width: 80%;
    max-width: 1170px;
    margin: 36px auto;
    box-sizing: border-box;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    background: #fff;
    min-height: 100vh;
    padding: 36px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    justify-content: center;
}

.main__textarea {
    width: 100%;
    height: 100px;
    text-align: left;
    resize: none;
    border: 1px solid rgba(128, 128, 128, 0.309);
    border-radius: 10px;
    font-size: inherit;
    outline: none;
    font-size:16px;
}

.main__button {
    cursor: pointer;
    display: block;
    margin-top: 16px;
    border: none;
    border-radius: 10px;
    max-height: 26px;
    padding-left: 3%;
    padding-right: 3%;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
    background-color: transparent;
    font-size: inherit;
    text-align: center;
}

.main__button:focus {
    outline: none;
}

.main__button:active {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 26%);
}

.main__button span {
         word-wrap:break-word;
    } 

.main__create-comment {
    width: 80%;
    border: 1px solid rgba(128, 128, 128, 0.299);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
}

.main__pagination {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5%;
    width: 100%;
    justify-content: center;
}

.main__page {
    padding: 8px;
    border: solid 1px #929191;
    border-radius: 4px;
    width: 3%;
    padding: 3px 2px;
    display: flex;
    justify-content: center;
    margin-right: 15px;
    height: 4%;
}

.main__page:hover{
    background: rgba(14, 13, 13, 0.137);
    cursor: pointer;
    color:rgb(197, 193, 193);
}

.page_active {
    background: rgba(146, 132, 132, 0.418);
}

.main__span{
    color:rgba(0, 0, 0, 0.781);
}

@media (max-width: 700px) {
    
    .main {
        width: 85%;
        padding: 24px;
    }

    .main__textarea{
        height:70px;

    }
    .main__page {
        width:5%;
    }

    .main__button span {
         font-size: 12px;
    }
}

</style>