// component/broadItem/broadItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleBroad: function (e) {
      // console.log(this.data.item)
      wx.navigateTo({
        url: `../broadDetail/broadDetail?name=${this.data.item.name}&thumb=${encodeURIComponent(this.data.item.thumb)}`,
      })
    }

    // wx.navigateTo({
    //   // url: `../hotDetail/hotDetail?singer=${this.data.item.name}&poster=${encodeURIComponent(this.data.item.src)}`,
    // })
  }
});
