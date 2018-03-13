/**
 * 控制整个 App 的主题色、左右上下边距、导航栏高度等值
 * import CONFIG from "app/config";
 */


import { Dimensions } from "react-native";

// 获取设备的宽、高度值
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;


export default {
  // 颜色
  "mainColor": "#6e5bf4",       // App 主色
  "active": "#fe7d26",          // 激活状态文字颜色
  "subColor": "#BBB",        // 辅助描述文字颜色
  "defaultBGColor": "#F5F5F5",  // App 默认背景色
  "contentBGColor": "#FFF",     // 内容背景色
  "divideColor": "#F5F5F5",     // 分隔线或者分割边框线颜色

  // 设备宽、高
  "screenW": screenW,
  "screenH": screenH,

  // 界面间距
  "LeftRight": 10,    // 界面左右间距
  "TopBottom": 8,     // 界面上下间距
  "RowInfoH": 46,     // 行信息的高度
};
