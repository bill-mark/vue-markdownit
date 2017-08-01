<template>
    <div id="api">  
        <!-- 左侧导航栏 -->
        <sideBar title="API" :sideList="sideList"></sideBar>
        <div class="content-wrap">
            <div class="my-content">
                <article v-html="result"></article>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from './../../assets/js/eventBus.js';
    import sideBar from '../../components/sideBar/sideBar.vue';
    import '../../assets/style/article.min.css';
    import '../../assets/style/default.min.css';

    export default {
        components: {sideBar},
        data() {
            return {
                sideList: [],
                iframeSrc: '/static/api/index.html',
                md:null,
                result:null,
                mkdataurl:null,
                mkdata:null
            }
        },
        created() {
            this.axios({
                method: 'get',
                url: '/static/json/sideList.json',
                responseType:'json'
            }).then( (response) => {
                //console.log(response.data);
                this.sideList = response.data;
            })   
            bus.$on('loadContent', (url) => {
                this.mkdataurl = url
                this.axios({
                    method: 'get',
                    url: this.mkdataurl,
                }).then( (response) => {
                    this.mkdata = response.data;
                    this.changemk()
                })         
            })       
        },
        mounted() {
            this.mkdataurl = '/static/developmentDocument/test.md'
           
            this.axios({
                method: 'get',
                url: this.mkdataurl,
            }).then( (response) => {
                this.mkdata = response.data;
                this.changemk()
            }) 

        },
        methods: {
            changemk(){   
             var hljs = require('highlight.js');

              this.md = require('markdown-it')({
                html: true,
                xhtmlOut: true,
                linkify: true,
                typographer: true,
                breaks: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                      try {
                        return hljs.highlight(lang, str).value;
                      } catch (__) {}
                    }

                    return ''; 
                }
              })

              this.result = this.md.render(this.mkdata)
          }  
        }
    }
</script>
<style lang="scss" scoped>
    .content-wrap{
        padding-left: 270px;
        min-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        .my-content{
            margin:10px 10px 0;
            background: #fff;
            min-height: 100%;
           
        }
    }

</style>