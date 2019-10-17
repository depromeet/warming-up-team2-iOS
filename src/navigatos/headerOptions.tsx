// TODO: 네비게이션 헤더 옵션정의

// import React from 'react';
// import styled from 'styled-components/native';

// export const headerElementPadding = {
//   paddingLeft: 16,
//   paddingRight: 16,
// };

// export const defaultHeaderStyle = {
//   height: 52,
//   backgroundColor: 'white',
//   borderBottomWidth: 1,
//   borderBottomColor: '#f0f0f0',
//   elevation: 0,
// };

// export const defaultHeaderTitleStyle = {
//   fontSize: 18,
//   lineHeight: 24,
//   color: '#2c3744',
//   fontWeight: 'normal',
// };

// export const transparentHeaderStyle = {
//   height: 52,
//   borderBottomWidth: 0,
// };

// export const noHeaderStyle = {
//   height: 0,
// };

// export const noLineHeaderStyle = {
//   ...defaultHeaderStyle,
//   // borderBottomWidth: 0,
//   borderBottomColor: 'transparent',
// };

// export const userMainHeaderStyle = {
//   ...noLineHeaderStyle,
//   backgroundColor: '#ffdb00',
// };

// export const defaultBottomTabStyle = {
//   height: 50,
//   backgroundColor: '#fdfdfd',
//   borderTopWidth: 1,
//   borderTopColor: '#f0f0f0',
// };

// export const baseStackConfig = {
//   headerLayoutPreset: 'center',
//   headerBackTitleVisible: false,
// };

// export const baseStackNavigationOptions = {
//   headerStyle: defaultHeaderStyle,
//   headerTitleStyle: defaultHeaderTitleStyle,
//   headerBackTitle: null,
//   // headerBackImage: () => <HeaderBackImage />,
// };

// export const noHeaderNavigationOptions = {
//   headerStyle: noHeaderStyle,
//   headerTransparent: true,
// };

// export const userMainNavigationOptions = {
//   headerStyle: userMainHeaderStyle,
//   // headerTransparent: true,
// };

// export const transparentHeaderNavigationOptions = {
//   headerStyle: transparentHeaderStyle,
//   headerTransparent: true,
// };

// export const hideTabBarNavigationOptions = ({ navigation }) => {
//   const isMain = navigation.state.index === 0;
//   return {
//     tabBarVisible: isMain,
//   };
// };

// export const eventMainNavigationOptions = ({ navigation }) => ({
//   headerTitle: <BiImage />,
//   headerLeft: (
//     <View style={{ flexDirection: 'row' }}>
//       <HeaderBookmarkButton
//         onPress={() =>
//           tryLogin(navigation, true, () => navigation.push('EventBookmark'))
//         }
//       />
//       <HeaderAlarmContainer
//         onPress={() =>
//           tryLogin(navigation, true, () => navigation.push('UserMessage'))
//         }
//       />
//     </View>
//   ),
//   headerRight: (
//     <View style={{ flexDirection: 'row' }}>
//       <HeaderSearchButton onPress={() => navigation.push('SearchMain')} />
//       <HeaderMyButton onPress={() => navigation.push('UserMain')} />
//     </View>
//   ),
// });

// export const mainScreenNavigationOptions = initOptions => ({ navigation }) => ({
//   ...initOptions,
//   headerLeft: (
//     <View style={{ flexDirection: 'row' }}>
//       <HeaderCoinButton
//         onPress={() =>
//           tryLogin(navigation, true, () => navigation.push('UserCoin'))
//         }
//       />
//       <HeaderAlarmContainer
//         onPress={() =>
//           tryLogin(navigation, true, () => navigation.push('UserMessage'))
//         }
//       />
//     </View>
//   ),
//   headerRight: (
//     <View style={{ flexDirection: 'row' }}>
//       <HeaderSearchButton onPress={() => navigation.push('SearchMain')} />
//       <HeaderMyButton onPress={() => navigation.push('UserMain')} />
//     </View>
//   ),
// });

// export const reviewMainNavigationOptions = mainScreenNavigationOptions({
//   headerTitle: <BiImage />,
// });
// export const articleMainNavigationOptions = mainScreenNavigationOptions({
//   title: '익명수다',
//   headerStyle: noLineHeaderStyle,
// });
// export const channelMainNavigationOptions = mainScreenNavigationOptions({
//   // title: '채팅',
//   headerStyle: noLineHeaderStyle,
// });
