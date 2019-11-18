<template>
    <div class="location-error">
        <div class="container location-text">
            <h1>We couldn't find you on earth.</h1> <br>
            <h1>Allow location so we can find you.</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .location-error{
        background: url('../../../public/assets/images/3054292.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
    }
    .location-text{
        text-align: center;
        height: 100%;
        padding-top: 180px !important;
    }
    .location-text h1{
        font-size: 2.5em;
        color:#A12C34;
        text-shadow: 1px 1px 30px;
    }
    @media only screen and (max-width:667px){
       .location-text h1{
            font-size: 2em;
            line-break: 35px;
        }
    }
</style>