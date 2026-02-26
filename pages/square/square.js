Page({
  data: {
    activeTab: 0,
    tabs: ['推荐', '关注', '最新'],
    posts: [
      {
        id: 1,
        avatar: '🧑',
        username: '玩具达人小明',
        time: '10分钟前',
        content: '刚入手了这款遥控越野车，真的超级酷！在小区里开了一下午，续航超强，操控也很流畅，强烈推荐！🚗💨',
        images: ['#FF6B35', '#FF9F1C', '#2EC4B6'],
        likes: 128,
        comments: 24,
        liked: false,
      },
      {
        id: 2,
        avatar: '👩',
        username: '积木爱好者',
        time: '1小时前',
        content: '花了整整三天终于拼完了这套乐高城堡！2000多块零件，太有成就感了 🏰✨ 分享给大家看看~',
        images: ['#845EC2', '#D65DB1'],
        likes: 256,
        comments: 47,
        liked: true,
      },
      {
        id: 3,
        avatar: '🧒',
        username: '手办收藏家',
        time: '3小时前',
        content: '今天新到了限定版手办，包装精美，做工细腻，值得收藏！有喜欢的小伙伴欢迎留言交流 🪆',
        images: ['#0089BA'],
        likes: 89,
        comments: 15,
        liked: false,
      },
      {
        id: 4,
        avatar: '👦',
        username: '无人机飞手',
        time: '5小时前',
        content: '周末带着无人机去郊外飞了一圈，拍到好多美景！这款迷你无人机重量轻、续航好，非常适合旅行携带 🛸📸',
        images: ['#2EC4B6', '#CBF3F0', '#FF9F1C'],
        likes: 312,
        comments: 58,
        liked: false,
      },
    ]
  },

  onLoad() {},

  onTabTap(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({ activeTab: index });
  },

  onLikeTap(e) {
    const { id } = e.currentTarget.dataset;
    const posts = this.data.posts.map(p => {
      if (p.id === id) {
        return { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 };
      }
      return p;
    });
    this.setData({ posts });
  },

  onCommentTap(e) {
    wx.showToast({ title: '评论功能开发中', icon: 'none' });
  },

  onShareTap(e) {
    wx.showToast({ title: '分享功能开发中', icon: 'none' });
  },

  onPostTap() {
    wx.showToast({ title: '发帖功能开发中', icon: 'none' });
  }
});
