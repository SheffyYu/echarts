/**
 * Created by yushihui on 2019/1/10.
 */
/**
 * 获取当前日期 yyyy-MM-dd
 * @returns {string}
 */
function getCurentDateStr()
{
  var now = new Date();
  var year = now.getFullYear();       //年
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();            //日
  var clock = year + "-";
  if(month < 10) clock += "0";
  clock += month + "-";
  if(day < 10) clock += "0";
  clock += day;
  return clock;
}

/**
 * 获取昨天日期 yyyy-MM-dd
 * @returns {string}
 */
function getYesDateStr()
{
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate()-1;            //日
    var clock = year + "-";
    if(month < 10) clock += "0";
    clock += month + "-";
    if(day < 10) clock += "0";
    clock += day;
    return clock;
}

/**
 * 获取yyyy-MM-dd HH:mm:ss
 * @returns {string}
 */
function currentTimeToString() {
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var mi = date.getMinutes();
  var s=date.getSeconds();
  m = m > 9 ? m : '0' + m;
  d = d > 9 ? d : '0' + d;
  h = h > 9 ? h : '0' + h;
  s = s > 9 ? s : '0' + s;
  mi=mi>9?mi:'0'+mi;
  return y + '-' + m + '-' + d + ' ' + h + ':' + mi+':'+s;
}
