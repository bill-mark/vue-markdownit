marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    }
});
new Vue({
    el:'#articleEditer',
    data: {
            content:'',
            nAtvId:0,
            aNavItems:[{
                title:'编辑',
                icon:'&#xe602;',
                isAtv:1
            },{
                title:'可视编辑',
                icon:'&#xe604;',
                isAtv:0
            },{
                title:'预览',
                icon:'&#xe605;',
                isAtv:0
            }],
            sScreenStatus:'&#xe60b;',
            isScreen:0,
            aEditerModule:[1,0,0]
    },
    computed:{
        preViewContent:function(){
            return marked(this.content)
        }
    },
    methods:{
        eNavItemClick:function(i){
            this.aNavItems[this.nAtvId].isAtv=0;
            this.aEditerModule[this.nAtvId]=0;
            this.aNavItems[i].isAtv=1;
            this.aEditerModule[i]=1;
            this.nAtvId=i;
        },
        eScreenTabClick:function(){
            this.isScreen=!this.isScreen;
            this.sScreenStatus=this.isScreen?'&#xe60a;':'&#xe60b;';
        },
        eEditerKeyDown:function(e){
            var self=e.currentTarget;
            if(e.keyCode==9){
                sk4t(self).addTab(e)
            }
            if(e.keyCode==13){
                sk4t(self)._insertText('  ')
            }
            if(e.keyCode==221&&e.ctrlKey){
                sk4t(self).addLinesTab()
            }
            if(e.keyCode==219&&e.ctrlKey){
                sk4t(self).rmLinesTab()
            }
        }
    }
})