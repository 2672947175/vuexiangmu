<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<style lang="less">
    .header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #00ff00;
        color: #fff;
        position: fixed;
        top:0;
        z-index: 10;
    }
</style>
