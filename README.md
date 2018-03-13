# react-native
React Native 日常开发通用组件

# NoData
  数据为空时，展示给用户的提示信息; 多用于列表展示
  <NoData desc="暂无数据..." img={require("app/assets/nodata.png")} />
  <NoData onlyIcon={true} icon={require("app/assets/nodata-text.png")} />

# NoMore
  列表划至最末时，需要显示的提示信息
  <NoMore desc="已加载全部内容，没有更多了" />

# StarRating
  星级，支持0.5分显示
  <StarRating stars={3.5} total={5} starSize={12} starSpacing={2} style={{marginTop: 5,}} />

# toMoney(money, n)
  money 为要格式化的金额
  n 为小数位数，默认显示 2 为小数
