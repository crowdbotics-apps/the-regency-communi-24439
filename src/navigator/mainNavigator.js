import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen36203711Navigator from '../features/BlankScreen36203711/navigator';
import UserProfile36203709Navigator from '../features/UserProfile36203709/navigator';
import Settings203692Navigator from '../features/Settings203692/navigator';
import Settings203466Navigator from '../features/Settings203466/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen36203711: { screen: BlankScreen36203711Navigator },
UserProfile36203709: { screen: UserProfile36203709Navigator },
Settings203692: { screen: Settings203692Navigator },
Settings203466: { screen: Settings203466Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
