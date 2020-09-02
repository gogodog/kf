import {ServerApi} from '../../api/serverapi'
import {removeRow} from '../../utils/util'
import {HttpModel} from '../../api/httpModel';
import {$wuxToast} from '../../lib/index'
let request_ = new HttpModel();
let sapi = new ServerApi();
let appInst =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: appInst.globalData.ColorList,
    tagModel:false,
    tagTree:[],
    targetItem:{},

    //inparams
    choosedTags:[],
    miaoshu:'',
    imgList:[],
    imgUrl:null
  },
  onLoad: function(option) {
    let item = wx.getStorageSync('cookbooklist.page.item');
    if(option.operate && option.operate == 'publish' && item){//发布页面
      this.setData({targetItem: item})
    }
  },
  onShow: function(){
    sapi.dishStyleTree((res)=>{
      this.setData({
        tagTree:res
      })
    });
  },
  addChoosedTags:function(choosedItem){//如果不重复就放进去
    let choosedTags = this.data.choosedTags;
    let isChoosed = false;
    choosedTags.map((item)=>{
      if(item.id == choosedItem.id){
        isChoosed = true;
        return;
      }
    })
    if(isChoosed){
      return false;
    }
    choosedTags.push(choosedItem)
    this.setData({
      choosedTags:choosedTags
    })
    return true;
  },
  removeChoosedTags:function(choosedItem){//如果不重复就放进去
    this.setData({
      choosedTags:removeRow(this.data.choosedTags, choosedItem, "id")
    })
  },
  setImgUrl: function(imgUrl) {
    this.setData({
      imgUrl: imgUrl
    })
  },
  setTagTreeChoosed: function(parent, child, isChoosed){
    let tagTree = this.data.tagTree;
    tagTree.map((parent_) => {
      if(parent_.id == parent.id){
        parent_.children.map((child_) => {
          if(child_.id == child.id){
            child_.isChoosed = isChoosed;
            return;
          }
        })
        return;
      }
    })
    this.setData({
      tagTree : tagTree
    })
  },
  clickTag: function(e){
    let item = e.currentTarget.dataset.item;
    if(item.isChoosed){//remove
      this.removeChoosedTags(item);
      this.setTagTreeChoosed(e.currentTarget.dataset.parent, item, false);
    }else{//add
      this.addChoosedTags(item);
      this.setTagTreeChoosed(e.currentTarget.dataset.parent, item, true);
    }
  },
  cancleTags: function(e) {
    let targetItem = e.currentTarget.dataset.item;
    this.removeChoosedTags(targetItem);
    let tagTree = this.data.tagTree;
    tagTree.map((item)=>{
      if(item.id == targetItem.pid){
        item.children.map((c)=>{
          c.isChoosed = false; 
          return;
        })
      }
    })
    this.setData({tagTree: tagTree})
  },
  checkTag(e){
    this.setData({
      tagModel: !this.data.tagModel
    })
  },
  textareaAInput(e){
    this.setData({miaoshu: e.detail.value})
  },
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '确定删除',
      content: '确定要删除这张封面吗？',
      cancelText: '取消',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList,
            imgUrl: null
          })
        }
      }
    })
  },
  UploadImg(sc, fc){
    let result = 0;
    if(this.data.imgList && this.data.imgList.length > 0){
      request_.wxUploadImg(this.data.imgList[0], sc, fc)
    }
    return result;
  },
  submitPublish: function() {
    let that = this;
    wx.showModal({
      content: '确定发布？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
            that.data.imgUrl && that.data.imgUrl.length > 10 ? that.publish(that.data.imgUrl): that.UploadImg((imgUrl)=>{that.setImgUrl(imgUrl);that.publish(imgUrl)})
        }
      }
    })
  },
  publish(imgurl){
    let params = {};
    params.img = imgurl;
    params.tags = this.data.choosedTags;
    params.miaoshu = this.data.miaoshu;
    params.cid = this.data.targetItem.id;
    let errmsg = this.checkParamsHandler(params);
    if(errmsg){
      this.showToastError(errmsg)
    }else{
      sapi.publishCookbook(params, (res)=>{
        this.showToastSuccess("发布成功");
        wx.navigateBack({delta: 1,})
      }, (res)=>{
        this.showToastError(res);
      })
    }
  },
  checkParamsHandler(params){
    if(params){
      if(!params.cid || params.cid < 0){
        return "请刷新重试";
      }
      if(!params.img || params.img == 0){
        return "请上传一张封面图片";
      }
      if(!params.tags || params.tags.length > 15 || params.tags.length <= 0){
        return "请添加标签，标签数量不能超过15个";
      }
      if(!params.miaoshu || params.miaoshu.length >= 300 || params.miaoshu.length == 0){
        return "请添加文案，文案长度不超过300字";
      }
    }
    return null;
  },
  showToastError(errmsg, ck){
    this.showToast(errmsg, ck, 'forbidden')
  },
  showToastSuccess(errmsg, ck){
    this.showToast(errmsg, ck, 'success')
  },
  showToast(errmsg, ck, type) {
    $wuxToast().show({
        type: type,
        duration: 1500,
        color: '#fff',
        text: errmsg,
        success: () => {ck&&ck()}
    })
  },
})