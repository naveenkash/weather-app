<template>
    <div class="loading">
            <div class="container">
                <div class="load">
                    <div class="loading-bar bar1"></div>
                    <div class="loading-bar bar2"></div>
                    <div class="loading-bar bar3"></div>
                    <div class="loading-bar bar4"></div>
                    <div class="loading-bar bar5"></div>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    .loading{
        width: 100%;
        height: 100vh;
    }
    .load{
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .loading-bar{
        width: 5px;
        height: 45px;
        background: rgb(25, 59, 109);
        display: inline-block;
        margin: 0 5px;
    }
    .bar1{
        animation: loading 1s infinite ease;
        animation-delay: 0s;
    }
    .bar2{
          animation: loading 1s infinite ease;
        animation-delay: 0.2s;
    }
    .bar3{
          animation: loading 1s infinite ease;
        animation-delay: 0.4s;
    }
    .bar4{
          animation: loading 1s infinite ease;
        animation-delay: 0.6s;
    }
    .bar5{
          animation: loading 1s infinite ease;
        animation-delay: 0.8s;
    }
    @keyframes loading{
     0%{
         transform: scale(1.8);
     }
     100%{
         transform: scale(1);
     }
    }
</style>