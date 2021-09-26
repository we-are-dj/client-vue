<template>
    <div class="body">
        <div class="wrap">
            <div class="logoBox">
                <div class="logo">
                    <h1><a href="javascript:void(0)">LOGO</a></h1>
                </div>
            </div>
            <div class="discBox">
                <div class="discRight">
                    <h3>팀원 소개</h3>
                    <p>
                        프론트엔드: <a href="https://github.com/we-are-dj/client-vue" target="_blank">Go to Frontend GitHub.</a>
                    </p>
                    <p>
                        백엔드: <a href="https://github.com/we-are-dj/server" target="_blank">Go to Backend GitHub.</a>
                    </p>
                </div>
                <div class="discLeft">
                    <h3>서비스 소개</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi recusandae omnis, modi laudantium soluta, harum eos
                        voluptate est voluptatem accusamus iusto magnam delectus
                        expedita nesciunt veniam deleniti accusantium minima.
                        Similique.
                    </p>
                </div>
            </div>
            <div class="kakao">
                <button @click="goMain">메인으로 가기</button>
                <!-- <a id="custom-login-btn" @click="kakaoLogin()">
                    <img
                        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                        width="222"
                    />
                </a> -->
                <!-- <button type="button" @click="kakaoLogout">로그아웃</button> -->
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
        goMain(){
            this.$router.push('/main')
        }
    // kakaoLogin() {
    //   window.Kakao.Auth.login({
    //     scope: "profile",
    //     success: this.getKakaoAccount,
    //   });
    //     // 메인 페이지로 이동
    //     this.$router.push('/main');
    // },
    // getKakaoAccount() {
    //   window.Kakao.API.request({
    //     url: "/v2/user/me",
    //     success: (res) => {
    //       const kakao_account = res.kakao_account;
    //       const nickname = kakao_account.profile.nickname; //카카오 닉네임
    //       console.log("nickname", nickname);
    //       //로그인 처리 구현
    //       console.log(kakao_account);
    //       this.$store.commit("user", kakao_account);
    //       alert("로그인 성공!");
    //     },
    //     fail: (error) => {
    //       // this.$router.push("/errorPage");
    //       console.log(error);
    //     },
    //   });
    // },
    // kakaoLogout() {
    //   if (!window.Kakao.Auth.getAccessToken()) {
    //     console.log("Not logged in.");
    //     return;
    //   }
    //   window.Kakao.Auth.logout((response) => {
    //     //로그아웃
    //     console.log("access token:", window.Kakao.Auth.getAccessToken());
    //     console.log("log out:", response);
    //   });
    // },
  },
}
</script>

<style lang="scss" scoped>
.body{
    background-color: rgb(246, 246, 246);
    height: 100vh;
}
.wrap{
    width: 70%;
    margin: 0 auto;
    padding: 10px;
    padding-top: 100px;
    border-radius: 10px;
    background-color: rgb(246, 246, 246);
    text-align: center;
    .logoBox{
        width: 80%;
        margin: 0 auto;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212020;
        border-radius: 10px;
        h1 a{
            display: block;
            color: #fff;
        }
    }
    .discBox{
        width: 80%;
        height: 300px;
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        background-color: #242323;
        color: #fff;
        .discRight{
            width: 48%;
            h3{
                color: #fff;
                margin-bottom: 30px;
                font-size: 18px;
                font-weight: bold;
            }
            p{
                margin-left: 10px;
                padding: 10px;
                a{
                    color: #ddd;
                }
                a:hover{
                    color: #fff;
                    font-weight: bold;
                    transition: all 0.3s;
                }
            }
        }
        .discLeft{
            width: 48%;
            h3{
                color: #fff;
                margin-bottom: 30px;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    .kakao{
        width: 80%;
        margin: 0 auto;
        a{
            width: 220px;
            height: 45px;
            margin: 0 auto;
            display: block;
            margin-top: 20px;
            cursor: pointer;
        }
        button{
            width: 220px;
            height: 45px;
            border-radius: 5px;
            border: none;
            background-color: rgb(248, 244, 0);
            cursor: pointer;
            margin-top: 20px;
            font-weight: bold;
            font-size: 16px;
            color: rgb(54, 0, 0);
        }
        button:hover{
            background-color: rgb(253, 250, 43);
            box-shadow: 3px 3px 8px #ddd;
            transition: all 0.3s;
        }
    }
}
</style>