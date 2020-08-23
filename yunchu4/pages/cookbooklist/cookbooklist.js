import {ServerApi} from '../../api/serverapi'
let sapi = new ServerApi();

Page({
  data: {
    tabCurrent:0,

    contentlist:[
      {rows:[], page:1},
      {rows:[], page:1},
      {rows:[], page:1}
    ]
  },
  onLoad: function(){
    let status = this.data.tabCurrent;
    let page = this.data.contentlist[status].page;
    this.searchCbookList(status, page);
  },
  tagChange:function(e){
    console.log("tagChange: ", e);
    if(e.detail.key != this.data.tabCurrent){
      this.setData({
        tabCurrent: e.detail.key
      })
      let status = e.detail.key;
      let page = this.data.contentlist[status].page;
      this.searchCbookList(status, page);
    }
  },
  searchCbookList: function(status, page){
    let params = {};
    params.status = status;
    params.current = page;

    let res = [
        {
          "id": 0,
          "name": "天下第一菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "饭 i 哦的伤口啊排放口排队刷卡破奋斗撒开饭打破刷卡放坡口哦饭看都是皮卡放坡口的山坡啊开发破洞裤",
          "method": "范德萨看佛的卡萨皮肤科打破刷卡\n饭都是靠防空洞菩萨卡夫卡的披萨\n饭都是",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:01:03",
          "update_time": "2020-08-23 19:04:49",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 1,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-23 19:04:51",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 2,
          "name": "第三道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-23 19:05:17",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 3,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 4,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 5,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 6,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 7,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 8,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        },
        {
          "id": 9,
          "name": "第二道菜",
          "img": "",
          "food": "[{\"id\":266,\"cnname\":\"苹果\",\"ctype\":\"g\",\"weightval\":10},{\"id\":268,\"cnname\":\"青苹果\",\"ctype\":\"g\",\"weightval\":10}]",
          "seasoning": "[{\"id\":266,\"cnname\":\"盐\",\"ctype\":\"g\",\"weightval\":5},{\"id\":267,\"cnname\":\"海盐\",\"ctype\":\"g\",\"weightval\":5}]",
          "attion": "粉底哦撒风的披萨看佛片\n浮动送怕看佛片的卡萨婆看佛排队刷卡破疯狂披萨",
          "method": "佛道佛撒\n佛撒开发看懂撒开票房可怕的撒开发",
          "miaoshu": "",
          "user_code": "",
          "user_wx_name": "",
          "user_wx_head": "",
          "status": false,
          "create_time": "2020-08-22 16:07:02",
          "update_time": "2020-08-22 16:07:02",
          "delete_flag": false,
          "cfood": [
            {
              "id": 266.0,
              "cnname": "苹果",
              "ctype": "g",
              "weightval": 10.0
            },
            {
              "id": 268.0,
              "cnname": "青苹果",
              "ctype": "g",
              "weightval": 10.0
            }
          ],
          "cseasoning": [
            {
              "id": 266.0,
              "cnname": "盐",
              "ctype": "g",
              "weightval": 5.0
            },
            {
              "id": 267.0,
              "cnname": "海盐",
              "ctype": "g",
              "weightval": 5.0
            }
          ]
        }
      ];
      if(!res || res.length == 0){
        return;
      }
      console.log("RES:", res)
      let contentlist = this.data.contentlist;
      let rows = contentlist[status].rows;
      console.log("rows:", rows)
      for(var i = 0 ; i<res.length ; i++){
        rows.push(res[i]);
      }
      let content = {
        rows: rows,
        page: page+1
      }
      contentlist[status] = content;
      console.log("contentlist:", contentlist)
      this.setData({
        contentlist: contentlist
      })
    return;

    sapi.searchCbookListByStatus(params, (res)=>{
      if(!res || res.length == 0){
        return;
      }
      console.log("RES:", res)
      let contentlist = this.data.contentlist;
      let rows = contentlist[status].rows;
      console.log("rows:", rows)
      for(var i = 0 ; i<res.length ; i++){
        rows.push(res[i]);
      }
      let content = {
        rows: rows,
        page: page+1
      }
      contentlist[status] = content;
      console.log("contentlist:", contentlist)
      this.setData({
        contentlist: contentlist
      })
      console.log("contentlist1111:", this.data.contentlist[status])
    });
  },
  hotload: function(){
    console.log("jiazai")
    let status = this.data.tabCurrent;
    let page = this.data.contentlist[status].page;
    this.searchCbookList(status, page);
  }
})