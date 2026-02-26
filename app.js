App({
  onLaunch() {
    wx.login({
      success: res => {
        // Exchange res.code for openId, sessionKey, unionId on the server
      }
    });
  },
  globalData: {
    userInfo: null
  }
});
