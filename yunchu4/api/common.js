var appInst =  getApp();
class CommonFuc{
    NavChnavBottomChangeange(e) {
        wx.redirectTo({
            url:appInst.globalData.nabbootomMap[e.currentTarget.dataset.cur]
          });
    }

}
export {CommonFuc};