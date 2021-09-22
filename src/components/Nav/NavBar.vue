<template>
    <div class="container">
        <div class="nav">
            <div class="logo">
                <h1><a href=""><router-link to="/">Music</router-link></a></h1>
            </div>
            <ul>
                <li><a href=""><router-link to ="/login">메뉴1</router-link></a></li>
                <li><a href="">메뉴2</a></li>
                <li><a href="">메뉴3</a></li>
                <li><a href="">메뉴4</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import './NavBar.scss';
</style>
