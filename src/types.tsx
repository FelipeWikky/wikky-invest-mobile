/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    // interface RootParamList extends RootStackParamList {}
    interface RootParamList extends MainStackParams {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type MainStackParams = {
  Signin: undefined;
  Drawer: NavigatorScreenParams<MainDrawerParams> | undefined;
  NotFound: undefined;
}

export type MainDrawerParams = {
  Home: undefined;
  Calculate: undefined;
}

type IRouteTitles = {
  'Home': string;
  'Drawer': string;
  'Calculate': string;
  'Signin': string;
  'NotFound': string;
  [x:string]: string;
}
export const RouteTitles: IRouteTitles = {
  'Home': 'Início',
  'Drawer': 'Menu',
  'Calculate': 'Calcular',
  'Signin': 'Login',
  'NotFound': 'Não encontrado',
}