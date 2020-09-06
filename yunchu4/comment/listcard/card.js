// dist/cards/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerImg: String,
    title: String,
    time: String,
    img: String,
    context: String,
    richContext: String,
    moreText: String,
    isShowLike: Boolean,
    isSlotBody:Boolean,
    selfMoreText:Boolean,
    tap1:Boolean,
    tap1color:String,
    tap1title:String,
    tap2:Boolean,
    tap2color:String,
    tap2title:String,
    tap3:Boolean,
    tap3color:String,
    tap3title:String,
    isLiked: {
      type: Boolean,
      observer: function () { this.setData({ isLiked: this.properties.isLiked }); }
    },
    noMargin: Boolean,
    noButtons: Boolean,
    likeNumber: Number,
    isShowUnlike: Boolean,
    unlikeNumber: Number,
    isUnliked: {
      type: Boolean,
      observer: function () { this.setData({ isUnliked: this.properties.isUnliked }); }
    },
    isShowDelete: Boolean,
    tag: Array,
    tagColor: String,
    // ignore the property since hide the share button
    // isShowShare: {
    //   type: Boolean,
    //   value: true,
    // }
  },
  options:{
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {
    isMoreText: false,
    isLiked: false,
    isUnlike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMoreText() {
      this.setData({ isMoreText: !this.data.isMoreText });
    },

    handleLike() {
      this.setData({ isLiked: !this.data.isLiked, likeNumber: this.data.likeNumber++ });
      this.triggerEvent('like', {isLiked: this.data.isLiked});
    },

    handleUnlike() {
      this.setData({ isUnliked: !this.data.isUnliked });
      this.triggerEvent('unlike', {isUnliked: this.data.isUnliked});
    },

    handleTap1() {
      this.triggerEvent('tap1');
    },

    handleTap2() {
      this.triggerEvent('tap2');
    },

    handleTap3() {
      this.triggerEvent('tap3');
    },

    handleDelete() {
      this.triggerEvent('delete');
    }

    // ignore the function since the share button be hidden
    // handleShare() {
    //   this.triggerEvent('share');
    // }
  }
})
