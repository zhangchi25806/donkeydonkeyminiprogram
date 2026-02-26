Page({
  data: {
    activeCategory: 0,
    categories: [
      { id: 0, name: '全部' },
      { id: 1, name: '遥控车' },
      { id: 2, name: '积木' },
      { id: 3, name: '手办' },
      { id: 4, name: '无人机' },
      { id: 5, name: '桌游' },
      { id: 6, name: '益智' },
    ],
    sortOptions: ['综合排序', '最新', '价格↑', '价格↓', '销量'],
    activeSort: 0,
    showSortMenu: false,
    products: [
      { id: 1, name: '超酷遥控越野车 2024款', price: 299, originalPrice: 399, sales: 1280, rating: 4.9, tag: '热销', category: 1, color: '#FF6B35' },
      { id: 2, name: '进阶乐高城堡积木套装', price: 399, originalPrice: 499, sales: 860, rating: 4.8, tag: '新品', category: 2, color: '#845EC2' },
      { id: 3, name: '精美限定版手办', price: 199, originalPrice: 239, sales: 430, rating: 4.7, tag: '限定', category: 3, color: '#0089BA' },
      { id: 4, name: '迷你口袋无人机', price: 499, originalPrice: 599, sales: 210, rating: 4.6, tag: '推荐', category: 4, color: '#2EC4B6' },
      { id: 5, name: '经典卡坦岛桌游', price: 149, originalPrice: 199, sales: 520, rating: 4.8, tag: '', category: 5, color: '#D65DB1' },
      { id: 6, name: '儿童益智魔方套装', price: 89, originalPrice: 120, sales: 990, rating: 4.9, tag: '畅销', category: 6, color: '#FF9671' },
      { id: 7, name: '高速遥控赛车', price: 359, originalPrice: 420, sales: 330, rating: 4.7, tag: '', category: 1, color: '#FF6B35' },
      { id: 8, name: '星战系列积木飞船', price: 799, originalPrice: 999, sales: 156, rating: 4.9, tag: '限定', category: 2, color: '#845EC2' },
    ]
  },

  get filteredProducts() {
    const { activeCategory, products } = this.data;
    if (activeCategory === 0) return products;
    return products.filter(p => p.category === activeCategory);
  },

  onLoad() {
    this.updateDisplay();
  },

  updateDisplay() {
    const { activeCategory, products } = this.data;
    const filtered = activeCategory === 0 ? products : products.filter(p => p.category === activeCategory);
    this.setData({ displayProducts: filtered });
  },

  onCategoryTap(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ activeCategory: id });
    this.updateDisplay();
  },

  onSortTap() {
    this.setData({ showSortMenu: !this.data.showSortMenu });
  },

  onSortSelect(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({ activeSort: index, showSortMenu: false });
    wx.showToast({ title: this.data.sortOptions[index], icon: 'none' });
  },

  onProductTap(e) {
    const { name } = e.currentTarget.dataset;
    wx.showToast({ title: name, icon: 'none' });
  },

  onCartTap(e) {
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  }
});
