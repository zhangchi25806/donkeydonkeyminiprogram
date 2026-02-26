Page({
  data: {
    banners: [
      { id: 1, title: '新品上架', desc: '探索最新玩具系列', color: '#FF6B35' },
      { id: 2, title: '限时优惠', desc: '会员专享折扣活动', color: '#FF9F1C' },
      { id: 3, title: '热门推荐', desc: '大家都在玩的玩具', color: '#2EC4B6' },
    ],
    categories: [
      { id: 1, icon: '🚗', name: '遥控车' },
      { id: 2, icon: '🧩', name: '积木' },
      { id: 3, icon: '🪆', name: '手办' },
      { id: 4, icon: '🎮', name: '游戏机' },
      { id: 5, icon: '🛸', name: '无人机' },
      { id: 6, icon: '🎯', name: '桌游' },
      { id: 7, icon: '🎨', name: '益智' },
      { id: 8, icon: '📦', name: '全部' },
    ],
    hotItems: [
      { id: 1, name: '超酷遥控越野车', price: '¥299', tag: '热销' },
      { id: 2, name: '进阶乐高积木套装', price: '¥399', tag: '新品' },
      { id: 3, name: '精美限定手办', price: '¥199', tag: '限定' },
      { id: 4, name: '迷你无人机', price: '¥499', tag: '推荐' },
    ]
  },

  onLoad() {},

  onBannerTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.showToast({ title: `Banner ${id}`, icon: 'none' });
  },

  onCategoryTap(e) {
    const { name } = e.currentTarget.dataset;
    wx.showToast({ title: name, icon: 'none' });
  },

  onItemTap(e) {
    const { name } = e.currentTarget.dataset;
    wx.showToast({ title: name, icon: 'none' });
  }
});
