/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { MainStackParams } from '../types';

const linking: LinkingOptions<MainStackParams> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Signin: 'signin',
      Drawer: {
        screens: {
          Home: {
            path: 'home',
            exact: true,
          }
        }
      },
      NotFound: '*',
    },
  },
};

export default linking;


// import { LinkingOptions } from '@react-navigation/native';
// import * as Linking from 'expo-linking';

// import { RootStackParamList } from '../types';

// const linking: LinkingOptions<RootStackParamList> = {
//   prefixes: [Linking.makeUrl('/')],
//   config: {
//     screens: {
//       Signin: {
//         screens: {
//           TabOne: {
//             screens: {
//               TabOneScreen: 'one',
//             },
//           },
//           TabTwo: {
//             screens: {
//               TabTwoScreen: 'two',
//             },
//           },
//         },
//       },
//       Modal: 'modal',
//       NotFound: '*',
//     },
//   },
// };

// export default linking;
