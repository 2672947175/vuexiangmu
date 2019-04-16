<template>
    <div>
        <router-view />
        <div id="nav">
            <router-link to="/"><i class="iconfont icon-bookshelf-copy"></i><span>书架</span></router-link> 
            <router-link to="/list"><i class="iconfont icon-shucheng--copy"></i><span>书城</span></router-link> 
            <router-link to="/car"><i class="iconfont icon-fenleix--copy"></i><span>分类</span></router-link> 
            <router-link to="/profile"><i class="iconfont icon-wode-copy"></i><span>我的</span></router-link>
        </div>
    </div>
</template>