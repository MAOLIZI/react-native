import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

/** 组件示例
 * <StarRating style={{marginTop: 5,}} stars={0} total={5} starSize={12} starSpacing={0} />
 */

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.total = this.props.total || 5; //星星的数量
    this.starSize = this.props.starSize || 12; //星星的大小
    this.starSpacing = this.props.starSpacing || 0; //星星之间的间隔

    let stars = this.props.stars || 0; //评分
    if (stars > this.total) {
      stars = this.total;
    }

    // 计算星星样式
    this.starStyle = {
      width: this.starSize,
      height: this.starSize,
      marginHorizontal: this.starSpacing,
    };

    this.state = {
      stars: stars
    };
  }

  render() {
    return <View>
      {this.renderStar()}
    </View>;
  }

  renderStar() {
    let {stars} = this.state;

    // 计算完全填充星星总数
    let FullStar = (stars < Math.ceil(stars)) ? Math.floor(stars) : stars;
    let _fullStars = [];
    for (let i = 0; i < FullStar; i++) {
      _fullStars.push(<View key={"star" + i}>
        <Image style={[this.starStyle, this.props.style]} source={require("app/assets/star.png")} />
      </View>);
    }

    // 判断并计算半个星星总数
    let HalfStar = 0;
    let _halfStars = null;
    if( stars > 0 && (stars < Math.ceil(stars)) ) {
      HalfStar = 1;
      _halfStars = <View>
        <Image style={[this.starStyle, this.props.style]} source={require("app/assets/star-half.png")} />
      </View>;
    }

    // 计算空的星星总数
    let EmptyStar = this.total - FullStar - HalfStar;
    let _emptyStars = [];
    for (let i = 0; i < EmptyStar; i++) {
      _emptyStars.push(<View key={"star-o" + i}>
        <Image style={[this.starStyle, this.props.style]} source={require("app/assets/star-o.png")} />
      </View>);
    }

    // 依据星星间距和星星大小 计算整体的星星排布
    let width = Math.floor(stars) * (this.starSize * 0.93 + 2 * this.starSpacing);

    if (stars > Math.floor(stars)) {
      width += this.starSpacing;
      width += this.starSize * 0.93 * (stars - Math.floor(stars));
    }

    return <View style={{flexDirection: 'row', justifyContent: "flex-end",}}>
      {_fullStars}
      {_halfStars}
      {_emptyStars}
    </View>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stars !== this.props.stars) {
      let stars = nextProps.stars || 0;
      if (stars > this.total) {
        stars = this.total;
      }

      this.setState({stars: stars});
    }
  }
}
