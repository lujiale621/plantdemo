<template>
<div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3" >
                            <Icon type="ios-analytics"></Icon>
                            Item 3
    
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                植物详情
                            </template>
                            <MenuItem name="1-1" :to="{ path: '/planthealth' }">健康状况</MenuItem>
                            <MenuItem name="1-2" :to="{ path: '/plantdata' }">事件日志</MenuItem>
        
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                环境监视
                            </template>
                            <MenuItem name="2-1" :to="{ path: '/camera' }">环境观察</MenuItem>
                            <MenuItem name="2-2" :to="{ path: '/dashboard' }">控制台</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
               
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
name:'home',

}
</script>

<style  scoped>

</style>