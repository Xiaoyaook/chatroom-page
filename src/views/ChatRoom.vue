<template>
   <v-app id="bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          align-center
          justify-center
          wrap
        >
          <v-flex xs12 sm3 md3 lg3 class="main">
            <v-card dark class="inner">  
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img :src="items[0].avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                      <v-list-tile-title v-html="items[0].title"></v-list-tile-title>
                  </v-list-tile-content>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>

              <v-autocomplete
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="Description"
                item-value="API"
                placeholder="搜索"
                return-object
              ></v-autocomplete>
              <v-list subheader>
                <v-subheader>最近对话</v-subheader>
                <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  avatar
                  @click=""
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-action>
                    <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md6 lg5 class="main">
            <v-card dark class="inner">
              <v-card-title>Friends Name</v-card-title>
              <v-divider></v-divider>
              <v-card flat height="520">
                <ul class="content">
                <li class="other">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                  <span>12412354444sdga4444sdgasdasdasdfasd2sdasdasdfasd234234234gas</span>
                </li>
                <li class="me">
                  <span>1241235444444444444asdfasdgasd44444
                    444asdfasdgasd4444asdfasdgasdg
                    asdfasdfas</span>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </li>
                <li class="other">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                  <span>12412354444sdga4444sdgasdasdasdfasd2sdasdasdfasd234234234gas</span>
                </li>
                <li class="me">
                  <span>1241235444444444444asdfasdgasd44444
                    444asdfasdgasd4444asdfasdgasdg
                    asdfasdfas</span>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </li>
                <li class="other">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                  <span>12412354444sdga4444sdgasdasdasdfasd2sdasdasdfasd234234234gas</span>
                </li>
                <li class="me">
                  <span>1241235444444444444asdfasdgasd44444
                    444asdfasdgasd4444asdfasdgasdg
                    asdfasdfas</span>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </li>
                <li class="other">
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                  <span>12412354444sdga4444sdgasdasdasdfasd2sdasdasdfasd234234234gas</span>
                </li>
                <li class="me">
                  <span>1241235444444444444asdfasdgasd44444
                    444asdfasdgasd4444asdfasdgasdg
                    asdfasdfas</span>
                  <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </li>
              </ul>
              </v-card>
              
              <v-card flat height="235" class="bottom-zone">
                <v-toolbar class="tool" height="32" >
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <pre contenteditable="true" class="input-box"></pre>
                <div class="bottom-btn">
                  <v-btn outline color="blue-grey" id="send">发送</v-btn>
                </div>

              </v-card>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="less" scoped>
#bg {
  background-image: url(../assets/blur.jpg);
  background-size: 100% 100%;
}
.main {
  height: 90%;
}
.inner {
  height: 100%;
}
ul {
  list-style: none;
}

.content{
	width: 100%;
  padding:10px 0px 10px 10px;
  height: 520px;
  overflow: auto;
}

.me img{
	float: left;
    width: 34px;
    height: 34px;
    border-radius: 2px; 
}

.me{
    margin-top: 10px;
    padding-left: 10px;
    display: block;
    clear: both;
    overflow: hidden;
    float:right;
    margin-bottom:5px;
}

.me span{
    float: left;
    padding:7px;
    border-radius:4px;
    margin:0 10px;
    max-width:80%;
    border: 1px solid #aaaaaa;
    position: relative;
    word-wrap: break-word;
}

.me span:before{
    content: " ";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-left-color: #aaaaaa;
    right: inherit;
    left: 100%;
}

.other img{
	float: right;
    width: 34px;
    height: 34px;
    border-radius: 2px; 
}

.other span { 
    float: right;
    word-wrap: break-word;
}

.other{
    margin-top: 10px;
    padding-left: 10px;
    width:80%;
    display: block;
    clear: both;
    overflow: hidden;
    float:left;
    margin-bottom:5px;
}
.other img {
    float: left;
}
.other span{
    //background: #fff;
    padding:7px;
    border-radius:4px;
    float: left;
    margin:0 10px;
    max-width:80%;
    border: 1px solid #aaaaaa;
    position: relative;
}

.other span:before{
    content:"";
    position: absolute;
    top: 9px;
    right: 100%;
    border: 6px solid transparent;
    border-right-color: #aaaaaa;
    right: inherit;
    right: 100%;
}

.tool {
  opacity: 0.5;
}

.bottom-zone {
  padding: 10px;
  position:absolute;
  bottom:0;
  width: 100%;
}

.input-box {
	height: 130px;
	border: none;
	resize:none;
	font-size: 14px;
  line-height: 20px;
  margin-top: 5px;
}

.bottom-btn {
  overflow: auto;
  padding-right: 10px;
}

#send {
  float: right;
}

</style>


<script>
export default {
     data () {
      return {
        items: [
          { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
      }
    }
}
</script>

