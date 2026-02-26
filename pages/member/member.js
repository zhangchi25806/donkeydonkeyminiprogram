Page({
  data: {
    userPoints: 2680,
    userLevel: '黄金会员',
    levelProgress: 72,
    nextLevel: '铂金会员',
    pointsToNext: 1320,
    plans: [
      {
        id: 1,
        name: '月度会员',
        price: 18,
        unit: '/月',
        desc: '畅享全站95折',
        highlight: false,
        perks: ['全站95折优惠', '每月专属福利礼包', '优先客服响应'],
      },
      {
        id: 2,
        name: '季度会员',
        price: 48,
        unit: '/季',
        desc: '超值首选，9折优惠',
        highlight: true,
        badge: '最受欢迎',
        perks: ['全站9折优惠', '季度专属礼包 x3', '生日双倍积分', '专属客服通道'],
      },
      {
        id: 3,
        name: '年度会员',
        price: 168,
        unit: '/年',
        desc: '年费最划算，85折',
        highlight: false,
        perks: ['全站85折优惠', '每月专属大礼包', '生日三倍积分', '专属客服通道', '免费顺丰包邮'],
      },
    ],
    benefits: [
      { icon: '🎁', title: '专属礼包', desc: '每月精选福利' },
      { icon: '💰', title: '积分返现', desc: '消费积分双倍' },
      { icon: '🚚', title: '免费包邮', desc: '年费会员专享' },
      { icon: '⚡', title: '优先发货', desc: '节假日不停歇' },
      { icon: '🎪', title: '新品优先', desc: '提前购买资格' },
      { icon: '📞', title: '专属客服', desc: '7x24小时服务' },
    ],
    pointsHistory: [
      { id: 1, desc: '购买"超酷遥控越野车"', points: '+150', time: '2024-01-15', type: 'earn' },
      { id: 2, desc: '积分兑换优惠券', points: '-200', time: '2024-01-10', type: 'spend' },
      { id: 3, desc: '邀请好友注册', points: '+100', time: '2024-01-05', type: 'earn' },
      { id: 4, desc: '每日签到奖励', points: '+10', time: '2024-01-03', type: 'earn' },
    ]
  },

  onLoad() {},

  onPlanSelect(e) {
    const { name } = e.currentTarget.dataset;
    wx.showModal({
      title: `开通${name}`,
      content: '确认开通会员特权？',
      confirmColor: '#FF5D00',
      success(res) {
        if (res.confirm) {
          wx.showToast({ title: '开通成功！', icon: 'success' });
        }
      }
    });
  },

  onExchangeTap() {
    wx.showToast({ title: '积分兑换功能开发中', icon: 'none' });
  }
});
