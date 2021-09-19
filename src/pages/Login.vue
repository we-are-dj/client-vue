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
                <p>카카오 로그인</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'Login'
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