import {
  $wuxDialog,
  $wuxToptips
} from '../../lib/index';
import {
  isEmptyStr,
  isEmptyCollection,
  removeOne
} from '../../utils/util'
import {
  ServerApi
} from '../../api/serverapi'
let sapi = new ServerApi();
let appInst = getApp();
let tips = null;
const icon = 'data:image/png;base64,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';
const buttons = [{
    label: '食材',
    icon,
  },
  {
    label: '调料',
    icon,
  },
];
const swipeBut = [{
  text: '取消',
}, ];
const sseasoning_tag = [{
    key: "海盐",
    istype: false
  },
  {
    key: "白醋",
    istype: false
  },
  {
    key: "陈醋",
    istype: false
  },
  {
    key: "盐",
    istype: true
  }
];
const sfood_tag = [{
    key: "苹果",
    istype: false
  },
  {
    key: "青笋",
    istype: false
  },
  {
    key: "龙虾",
    istype: false
  },
  {
    key: "鸡",
    istype: true
  }
];
const sassistfood_tag = [{
  key: "葱",
  istype: false
},
{
  key: "蒜",
  istype: false
},
{
  key: "辣椒",
  istype: false
},
{
  key: "菜",
  istype: true
}
];

Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
    buttons: buttons,
    swipeBut: swipeBut,
    noticecontent:"制作食谱并且发布食谱到食街，可获取点赞。如若食谱被使用，则创作者每次可获取1-2元的贡献收益礼金（可提现）",

    //编辑变量
    isEdit:false,
    editID:null,
    editName:null,

    //search-food
    sfood_visible: false,
    sfood_key: '',
    sfood_list: [],
    sfood_placeholder: '搜索食材',
    sfood_tag,

    //search-seasoning
    sseasoning_visible: false,
    sseasoning_key: '',
    sseasoning_list: [],
    sseasoning_placeholder: '搜索调料',
    sseasoning_tag,

    //search-assistfood
    sassistfood_visible: false,
    sassistfood_key: '',
    sassistfood_list: [],
    sassistfood_placeholder: '搜索食材',
    sassistfood_tag,

    //pick content
    content_food: [],
    content_seasoning: [],
    content_assistfood: [],
    content_attion: '',
    content_method: '',
    content_attion_catch: '',
    content_method_catch: '',

    //submit
    subDialog:false,
    pickname:'',
    subparam: null
  },
  onReady: function(){
    tips = this.selectComponent("#tips");
  },
  onLoad: function(option) {
    let initParams = {};
    let item = wx.getStorageSync('cookbooklist.page.item');
    if(option.operate && option.operate == 'edit' && item){//编辑页面
        initParams.content_food = item.cfood;
        initParams.content_assistfood = item.cassistfood;
        initParams.content_seasoning = item.cseasoning;
        initParams.content_attion = item.attion;
        initParams.content_attion_catch = item.attion;
        initParams.content_method = item.method;
        initParams.content_method_catch = item.method;
        initParams.editID = item.id;
        initParams.editName = item.name;
        initParams.isEdit = true;
        initParams.pickname = item.name;
        this.setData(initParams);
    }
  },
  setSseasoningKey: function (v) {
    this.setData({
      sseasoning_key: v
    })
    this.getSeasoningList(v);
  },
  setSfoodKey: function (v) {
    this.setData({
      sfood_key: v
    })
    this.getFoodList(v);
  },
  setSassistfoodKey: function (v) {
    this.setData({
      sassistfood_key: v
    })
    this.getAssistFoodList(v);
  },
  setpickname: function(e){
    this.setData({
      pickname: e.detail.value
    })
  },
  setContentAttion: function (e) {
    this.setData({
      content_attion: e.detail.value
    })
  },
  setContentMethod: function (e) {
    this.setData({
      content_method: e.detail.value
    })
  },
  setContentFood: function (row) {
    let list = this.data.content_food;
    list.push(row);
    this.setData({
      content_food: list,
    });
  },
  setContentAssistFood: function (row) {
    let list = this.data.content_assistfood;
    list.push(row);
    this.setData({
      content_assistfood: list,
    });
  },
  setContentSeasoning: function (row) {
    let list = this.data.content_seasoning;
    list.push(row);
    this.setData({
      content_seasoning: list,
    });
  },
  removeContentFood: function (id, col) {
    let list = this.data.content_food;
    this.setData({
      content_food: removeOne(list, id, col),
    });
  },
  removeContentAssistFood: function (id, col) {
    let list = this.data.content_assistfood;
    this.setData({
      content_assistfood: removeOne(list, id, col),
    });
  },
  removeContentSeasoning: function (id, col) {
    let list = this.data.content_seasoning;
    this.setData({
      content_seasoning: removeOne(list, id, col),
    });
  },
  setSearchVisible: function (foodVisible, seasoningVisible, assistfoodVisible) {
    this.setData({
      sfood_visible: foodVisible,
      sassistfood_visible: assistfoodVisible,
      sseasoning_visible: seasoningVisible,
    });
  },
  operateClickTag: function (e) {
    console.log("tag:", e);
    let s = e.currentTarget.dataset.s;
    let skey = e.currentTarget.dataset.skey;
    s == 1 ? this.setSfoodKey(skey) : s == 2 ? this.setSseasoningKey(skey) : s == 3 ? this.setSassistfoodKey(skey) : '';
  },
  operateDelFood: function (e) {
    console.log("delFood:", e);
    this.removeContentFood(e.currentTarget.dataset.id, "id")
  },
  operateDelAssistFood: function (e) {
    console.log("delAssistFood:", e);
    this.removeContentAssistFood(e.currentTarget.dataset.id, "id")
  },
  operateDelSeasoning: function (e) {
    console.log("delFood:", e);
    this.removeContentSeasoning(e.currentTarget.dataset.id, "id")
  },
  submitPick: function () {
    let params = {};
    params.content_attion = this.data.content_attion;
    params.content_method = this.data.content_method;
    params.content_food = this.data.content_food;
    params.content_seasoning = this.data.content_seasoning;
    params.content_assistfood = this.data.content_assistfood;
    this.checkSubmitPick(params) ? this.inPickName((name) => {
      params.name = name;
      this.setData({subparam:params})
    }) : false;
  },
  subPick: function(){
    let params = this.data.subparam;
    if(this.data.subDialog && this.data.pickname != '' && params){
      params.name = this.data.pickname;
      if(this.data.isEdit){
        params.id = this.data.editID;
        sapi.modifyPick(params, 
          (res)=>{
            wx.navigateBack({delta: 1,})
          },
          (res)=>{
            reqErroHandler(res)
          }
        )
        return;
      }
      sapi.savePick(params, (res) => {
        wx.redirectTo({
          url: '../index/index',
        })
        },
        (errmsg) => {
          reqErroHandler(errmsg)
        }
      )
    }else{
      this.showToptipsWarn("请输入菜谱名称")
    }
  },
  reqErroHandler(errmsg){
    this.hideDialog();
    this.showToptipsWarn("提示：" + errmsg);
  },
  checkSubmitPick: function (params) {
    if (isEmptyCollection(params.content_food)) {
      this.showToptipsWarn("请添加主料");
      return false;
    } else {
      let erroritem = this.checkWeightval(params.content_food);
      console.log("error::", erroritem)
      if (erroritem) {
        this.showToptipsWarn("主料【" + erroritem.cnname + "】的重量必须大于0");
        return false;
      }
    }
    if (isEmptyCollection(params.content_assistfood)) {
      this.showToptipsWarn("请添加辅料");
      return false;
    } else {
      let erroritem = this.checkWeightval(params.content_assistfood);
      console.log("error::", erroritem)
      if (erroritem) {
        this.showToptipsWarn("辅料【" + erroritem.cnname + "】的重量必须大于0");
        return false;
      }
    }
    if (isEmptyCollection(params.content_seasoning)) {
      this.showToptipsWarn("请添加调料");
      return false;
    } else {
      let erroritem = this.checkWeightval(params.content_seasoning);
      console.log("error::", erroritem)
      if (erroritem) {
        this.showToptipsWarn("食材【" + erroritem.cnname + "】的重量必须大于0");
        return false;
      }
    }
    if (isEmptyStr(params.content_method)) {
      this.showToptipsWarn("请输入制作方法");
      return false;
    }
    return true;
  },
  checkWeightval: function (colectionc) {
    let errorItem = null;
    colectionc.map((item) => {
      if (!item.weightval || item.weightval <= 0) {
        errorItem = item;
        return;
      }
    })
    return errorItem;
  },
  inPickName: function (ck) {
    let that = this;
    this.setData({
      subDialog:true,
    })
    ck();
  },
  sfoodTap: function (e) {
    console.log("sfoodTap",e);
    let row = e.currentTarget.dataset.row;
    let list = this.data.content_food;
    return this.isReapt(row, list) ? this.showToptipsWarn("已经添加此食材") : this.setContentFood(row);
  },
  sassistfoodTap: function (e) {
    console.log("sassistfoodTap",e);
    let row = e.currentTarget.dataset.row;
    let list = this.data.content_assistfood;
    return this.isReapt(row, list) ? this.showToptipsWarn("已经添加此食材") : this.setContentAssistFood(row);
  },
  sseasoningTap: function (e) {
    let row = e.currentTarget.dataset.row;
    let list = this.data.content_seasoning;
    return this.isReapt(row, list) ? this.showToptipsWarn("已经添加此调料") : this.setContentSeasoning(row);
  },
  searchFoodChange: function (e) {
    console.log("searchFoodChange", e)
    isEmptyStr(e.detail.value) ? 
      this.setData({
        sfood_list: [],
        sfood_key: ''
      }
    ) 
    : this.getFoodList(e.detail.value);
  },
  searchAssistFoodChange: function (e) {
    console.log("searchAssistFoodChange", e)
    isEmptyStr(e.detail.value) ? 
      this.setData({
        sassistfood_list: [],
        sassistfood_key: ''
      }
    ) 
    : this.getAssistFoodList(e.detail.value);
  },
  searchSeasoningChange: function (e) {
    isEmptyStr(e.detail.value) ? 
      this.setData({
        sseasoning_list: [],
        sseasoning_key: ''
      }
    ) 
   : this.getSeasoningList(e.detail.value);
  },
  changeSeasoningWeightval: function (e) {
    let id = e.currentTarget.dataset.rowid;
    let weightval = e.detail.value;
    let seasoning = this.data.content_seasoning;
    seasoning.map((item) => {
      if (item.id == id) {
        item.weightval = weightval;
        return;
      }
    })
    this.setData({
      content_seasoning: seasoning
    })
  },
  changeFoodWeightval: function (e) {
    let id = e.currentTarget.dataset.rowid;
    let weightval = e.detail.value;
    let food = this.data.content_food;
    food.map((item) => {
      if (item.id == id) {
        item.weightval = weightval;
        return;
      }
    })
    this.setData({
      content_food: food
    })
  },
  changeAssistFoodWeightval: function (e) {
    let id = e.currentTarget.dataset.rowid;
    let weightval = e.detail.value;
    let assistfood = this.data.content_assistfood;
    assistfood.map((item) => {
      if (item.id == id) {
        item.weightval = weightval;
        return;
      }
    })
    this.setData({
      content_assistfood: assistfood
    })
  },
  getFoodList: function (cname) {
    sapi.foodlistByCnname(cname, (res) => {
      this.setData({
        sfood_list: isEmptyCollection(res) ? [] : res,
      });
    });
  },
  getAssistFoodList: function (cname) {
    sapi.assistFoodlistByCnname(cname, (res) => {
      this.setData({
        sassistfood_list: isEmptyCollection(res) ? [] : res,
      });
    });
  },
  getSeasoningList: function (cname) {
    sapi.seasoninglistByCnname(cname, (res) => {
      this.setData({
        sseasoning_list: isEmptyCollection(res) ? [] : res,
      });
    });
  },
  showToptipsWarn(msg) {
    tips.showTopTip(msg);
  },
  isReapt: function (row, list) {
    let r = false;
    if (list.length != 0) {
      list.map((item) => {
        if (item.id == row.id) {
          r = true;
          return;
        }
      });
    }
    return r;
  },
  showModal(e) {
    console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
    this.setSearchVisible('foodSearch' === e.currentTarget.dataset.target, 'seasoningSearch' === e.currentTarget.dataset.target, 'assistfoodSearch' === e.currentTarget.dataset.target);
  },
  hideModal(e) {
    this.setSearchVisible(false, false, false);
  },
  hideDialog(){
    this.setData({
      subDialog:false
    })
  },
  // 删除控制器1
  ListTouchStart1(e) {
    console.log("ListTouchStart1",e)
    this.setData({
      ListTouchStart1: e.touches[0].pageX
    })
  },
  ListTouchMove1(e) {
    console.log("ListTouchMove1",e)
    this.setData({
      ListTouchDirection1: e.touches[0].pageX - this.data.ListTouchStart1 > 0 ? 'right' : 'left'
    })
  },
  ListTouchEnd1(e) {
    this.setData({
      modalName1:this.data.ListTouchDirection1 =='left'?e.currentTarget.dataset.target:null,
      ListTouchDirection1: null,
    })
  },
  // 删除控制器2
  ListTouchStart2(e) {
    console.log("ListTouchStart2",e)
    this.setData({
      ListTouchStart2: e.touches[0].pageX
    })
  },
  ListTouchMove2(e) {
    console.log("ListTouchMove2",e)
    this.setData({
      ListTouchDirection2: e.touches[0].pageX - this.data.ListTouchStar2 > 0 ? 'right' : 'left'
    })
  },
  ListTouchEnd2(e) {
    console.log("ListTouchEnd2",e)
    this.setData({
      modalName2:this.data.ListTouchDirection2 =='left'?e.currentTarget.dataset.target:null,
      ListTouchDirection2: null,
    })
  },
  // 删除控制器3
  ListTouchStart3(e) {
    console.log("ListTouchStart3",e)
    this.setData({
      ListTouchStart3: e.touches[0].pageX
    })
  },
  ListTouchMove3(e) {
    console.log("ListTouchMove3",e)
    this.setData({
      ListTouchDirection3: e.touches[0].pageX - this.data.ListTouchStart3 > 0 ? 'right' : 'left'
    })
  },
  ListTouchEnd3(e) {
    console.log("ListTouchEnd3",e)
    this.setData({
      modalName3:this.data.ListTouchDirection3 =='left'?e.currentTarget.dataset.target:null,
      ListTouchDirection3: null,
    })
  },
});