const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  );
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

const isEmptyStr = (str) => {
  return str == 'undefined' || !str || !/[^\s]/.test(str);
};

const isEmptyCollection = (c) => {
  var t;
  for (t in c) return !1;
  return !0;
};

const removeRow = (list, row, n) => {
  if(list.length != 0){
    list.map((index, item) => {
      if(item[n] == row[n]){
        list.splice(index,1);
        return;
      }
    })
  }
  return list;
}

const removeOne = (arr, val, n) => {
  console.log("removeOne:before", arr)
  if(arr.length != 0){
    arr.map((item, index) => {
      if(item[n] == val){
        arr.splice(index,1);return
      }
    })
  }
  console.log("removeOne:after", arr)
  return arr;
}

module.exports = {
  formatTime: formatTime,
  isEmptyStr: isEmptyStr,
  isEmptyCollection:  isEmptyCollection,
  removeRow: removeRow,
  removeOne: removeOne
};
