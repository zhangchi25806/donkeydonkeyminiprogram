Page({
  data: {
    userInfo: {
      avatar: '🧑',
      nickname: '玩具达人',
      id: 'ID: 10086',
      level: '黄金会员',
    },
    orderTabs: [
      { icon: '💳', label: '待付款' },
      { icon: '📦', label: '待发货' },
      { icon: '🚚', label: '待收货' },
      { icon: '⭐', label: '待评价' },
      { icon: '↩️', label: '退换货' },
    ],
    menuItems: [
      {
        group: '我的资产',
        items: [
          { icon: '💰', label: '我的积分', value: '2,680', arrow: true },
          { icon: '🎫', label: '优惠券', value: '3张可用', arrow: true },
          { icon: '💳', label: '余额', value: '¥0.00', arrow: true },
        ]
      },
      {
        group: '我的服务',
        items: [
          { icon: '📍', label: '收货地址', value: '', arrow: true },
          { icon: '⭐', label: '我的收藏', value: '', arrow: true },
          { icon: '👁️', label: '浏览记录', value: '', arrow: true },
          { icon: '🤝', label: '邀请好友', value: '', arrow: true },
        ]
      },
      {
        group: '帮助与设置',
        items: [
          { icon: '💬', label: '联系客服', value: '', arrow: true },
          { icon: '❓', label: '帮助中心', value: '', arrow: true },
          { icon: '⚙️', label: '设置', value: '', arrow: true },
        ]
      },
    ]
  },

  onLoad() {},

  onProfileTap() {
    wx.showToast({ title: '个人资料编辑开发中', icon: 'none' });
  },

  onOrderTabTap(e) {
    const { label } = e.currentTarget.dataset;
    wx.showToast({ title: label, icon: 'none' });
  },

  onAllOrdersTap() {
    wx.showToast({ title: '全部订单', icon: 'none' });
  },

  onMenuItemTap(e) {
    const { label } = e.currentTarget.dataset;
    wx.showToast({ title: label, icon: 'none' });
  }
});
