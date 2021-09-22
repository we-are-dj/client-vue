<template>
    <div class="container">
        <div class="nav">
            <div class="logo">
                <h1><a><router-link to="/main">Music</router-link></a></h1>
            </div>
            <ul>
                <li><a><router-link to ="#">메뉴1</router-link></a></li>
                <li><a><router-link to ="#">메뉴2</router-link></a></li>
                <li><a><router-link to ="#">메뉴3</router-link></a></li>
                <li><a><router-link to ="#">메뉴4</router-link></a></li>
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
