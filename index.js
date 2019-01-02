/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import BlueSky from './test/BlueSky';
import PizzaTranslator from './test/PizzaTranslator';
import ButtonBasics from './test/ButtonTest';
import Touchables from './test/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './test/ScrollViewTest';
// import FlatListBasic from './test/FlatListTest';
import SectionListTest from './test/SectionListTest';
import FetchExample from './test/FetchExample';
import PickerBasic from './test/Picker';
import WebViewBasic  from './test/SliderBasic';
import NavigatorIOSApp from './test/Navigators';
import Home from './test/ReactNavigationBasic';
import TabBasic from './test/TabNavigatorBasic';
import Root from './test/root';
import RootRedux from './test/redux/root';
import ControlPanel from './test/react-redux/views/ControlPanel';
import StorageBasic from './test/StorageBasic';
import PromiseBasic from './test/PromiseBasic';
import SwipeableFlatListBasic from './test/SwipeableFlatListBasic';
import ImmutableBasic from './test/ImmutableBasic';
import VictoryNativeBasic from './test/VictoryNativeBasic';
// import ReactNativeDataTableBasic from 'test/ReactNativeDataTableBasic';
import TableComponentBasic from './test/TableComponentBasic';
import CustomTheme from "./test/VictoryChart";
import BloodPressure from './test/PatientPage/BloodPressurePage/BloodPressure';
import BloodSugar from './test/PatientPage/BloodSuger/BloodSugar';
import PatientPage from './test/PatientPage/PatientPage';
import SvgBasic from './test/SvgBasic'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Touchables);

