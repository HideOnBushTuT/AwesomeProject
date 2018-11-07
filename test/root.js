import React from 'react';
import { View, Text } from 'react-native';

import { Router, Lightbox, Scene, Stack, Modal, Actions } from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Connect, Provider } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

import BlueSky from './BlueSky';
import PickerBasic from './Picker';
import WebViewBasic from './SliderBasic';
import Touchables from './Touchables';


// const AppNavigator = Actions.create(
//     <Stack key="root">
//         <Scene key="rootScene">
//             <Scene key="bluesky" component={BlueSky} title="bluesky" />
//             <Scene key="touchables" component={Touchables} title="touchables" />
//             <Scene key="picker" component={PickerBasic} title="pickers" />
//         </Scene>
//         <Scene key="webviewbasic" component={WebViewBasic} title="WebViewBasic" />
//     </Stack>
// );

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('bluesky'));
// const navReducer = (state = initialState, action) => {
//     const nextState = AppNavigator.router.getStateForAction(action, state);
//     return nextState || state;
// }

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                {/* <Modal> */}
                <Stack key="root">
                    {/* <Lightbox> */}
                    <Scene key="bl" tabs={true} backTitle="返回" tabBarStyle={{ backgroundColor: '#FFFFFF' }} title="navi">
                        <Scene key="bluesky" initial={true} component={BlueSky} title="bluesky" hideNavBar />
                        <Scene key="touchables" component={Touchables} title="Touchables" hideNavBar />
                        <Scene key="PickerBasic" component={PickerBasic} title="PickerBasic" hideNavBar />
                    </Scene>
                    {/* <Scene key="ta" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} > */}
                    <Scene key="webviewbasic" component={WebViewBasic} title="WebViewBasic" />

                    {/* </Scene> */}
                    {/* </Lightbox> */}
                </Stack>
                {/* </Modal> */}
            </Router>
        )
    }
}
