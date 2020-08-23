import {ServerApi} from '../../api/serverapi'
import { $wuxDialog } from '../../lib/index'

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
    sapi.searchCbookListByStatus(params, (res)=>{
      if(!res || res.length == 0){
        return;
      }
      let contentlist = this.data.contentlist;
      let rows = contentlist[status].rows;
      for(var i = 0 ; i<res.length ; i++){
        rows.push(res[i]);
      }
      let content = {
        rows: rows,
        page: page+1
      }
      contentlist[status] = content;
      this.setData({
        contentlist: contentlist
      })
    });
  },
  predeleteCookBook: function(e) {
    $wuxDialog().confirm({
        content: '确定要删除【'+e.currentTarget.dataset.name+'】吗？',
        onConfirm(e) {
            this.deleteCookBook(e);
        }
    })
  },
  deleteCookBook: function(e){
    sapi.deleteCookBookById(e.currentTarget.dataset.deleteid, (res)=>{
      if(res.code == 200){
        let contentlist = this.data.contentlist;
        let status = this.data.tabCurrent;
        contentlist[status].rows = [];
        contentlist[status].page = 1;
        this.setData({
          contentlist:contentlist
        })
        this.searchCbookList(status, 1)
      }
    });
  },
  hotload: function(){
    let status = this.data.tabCurrent;
    let page = this.data.contentlist[status].page;
    this.searchCbookList(status, page);
  }
})