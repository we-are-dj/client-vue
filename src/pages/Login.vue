<template>
    <div>
        <div class="wrap">
            <div class="logoBox">
                <div class="logo">
                    <h1><a href="javascript:void(0)">로고</a></h1>
                </div>
            </div>
            <div class="discBox">
                <div class="discRight">
                    <h3>팀원 소개</h3>
                </div>
                <div class="discleft">
                    <h3>서비스 소개</h3>
                </div>
            </div>
            <div class="kakao">
                <a id="custom-login-btn" @click="kakaoLogin()">
                    <img
                        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                        width="222"
                    />
                </a>
                <button type="button" @click="kakaoLogout">카카오 로그아웃</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            code: "",
        }
    },
    mounted() {
        // Kakao.init('6e37db0865ec5dd827ed639db14424c3');
        // Kakao.isInitialized();
        // this.kakaoLogout();
    },
    methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname; //카카오 닉네임
          console.log("nickname", nickname);
          //로그인 처리 구현
          console.log(kakao_account);
          this.$store.commit("user", kakao_account);
          alert("로그인 성공!");
        },
        fail: (error) => {
          // this.$router.push("/errorPage");
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        console.log("access token:", window.Kakao.Auth.getAccessToken());
        console.log("log out:", response);
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap{
    width: 70%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    .logoBox{
        width: 80%;
        background-color: #212020;
    }
    .discBox{
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212020;
    }
    .kakao{
        width: 80%;
    }
}
</style>