import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

/* 示例
 * <NoData desc="暂无数据..." img={require("app/assets/nodata.png")} />
 * <NoData onlyIcon={true} icon={require("app/assets/nodata-text.png")} />
 */

export default class NoData extends Component {
  constructor(props) {
    super(props);

    let info = this.props;
    this.state = {
      desc: info.desc || "暂无数据...",
      img: info.img || require("app/assets/nodata.png"),
      onlyIcon: info.onlyIcon || false,
      icon: info.icon || require("app/assets/nodata-text.png"),
    };
  }

  render() {
    let {desc, img, onlyIcon, icon} = this.state;

    if(onlyIcon) {
      return <View style={styles.view}>
        <Image style={styles.img} source={icon} />
      </View>;
    }else {
      return <View style={styles.view}>
        <Image style={styles.img} source={img} />
        <Text style={styles.desc}>{desc}</Text>
      </View>;
    }
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingTop: 40,
  },
  desc: {
    color: "#BBBBBB",
    fontSize: 12,
    marginTop: 4,
  },
});
