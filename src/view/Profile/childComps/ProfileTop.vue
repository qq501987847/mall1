<template>
  <div class="profile-top">
    <h2>我的信息</h2>
    <div class="userInfo">
      <div class="img">
        <img src="" alt="" />
      </div>
      <div class="login">
        <a href="#">登录</a> | <a href="#">注册</a>
        <div class="phone">
          <img src="~assets/images/profile/phone.png" alt="" />
          <p>暂无绑定的手机号</p>
        </div>
      </div>
      <button>></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop"
};
</script>

<style scoped lang="less">
.profile-top {
  padding: 20px;
  background-color: var(--primary-bg-color);
  color: #fff;
  .userInfo {
    display: flex;
    // width: 50px;
    // height: 50px;
    // border: 1px solid;
    .img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid;
    }
    .login {
      flex: 7;
      margin-top: 20px;
      margin-left: 20px;
      a {
        color: #fff;
      }
      .phone {
        margin-top: 10px;
        // vertical-align: bottom;
        // line-height: 50px;
        img {
          vertical-align: middle;
        }
        p {
          display: inline-block;
          margin: 0;
        }
      }
    }
    button {
      flex: 1;
      font-size: 40px;
      border: 0;
      color: #fff;
      background-color: transparent;
    }
  }
  h2 {
    text-align: center;
  }
}
</style>
