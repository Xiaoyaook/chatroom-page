<template>
  <v-app id="bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          align-center
          justify-center
          wrap
        >
          <v-flex xs12 sm8 md5 id="front-section" v-if="!isLogin">
            <h1 class="display-2 font-weight-thin mb-3" id="banner">ChatRoom</h1>
            <router-link to="/login" class="subheading">登录</router-link>
          </v-flex>
          <v-flex xs12 sm8 md5 v-else-if="isLogin">
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>欢迎光临</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="帐号" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="密码" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">登录</v-btn>
              </v-card-actions>
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

#banner {
  color: wheat;
  
}

#front-section {
  text-align: center;
}
</style>


<script>
export default {
  name: 'home',
  data: function () {
    return {
      isLogin : true
    }
  } 
}
</script>
