import React from 'react';
import { View, Text, Button, Image, } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
    // const didBlurSubscription = this.props.navigation.addListener(
    //     'didBlur',
    //     payload => {
    //         console.debug('didBlur', payload);
    //     }
    // );
    static navigationOptions = {
        title: 'Home',
        // headerTitle: <LogoTitle />
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
    };

    componentDidMount() {
        console.log('home componentDidMount');
    }

    componentWillUnmount() {
        // this.didBlurSubscription.remove();
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 10,
                            otherParam: 'something you should known',
                        });
                        // this.props.navigation.dispatch(StackActions.reset({
                        //   index: 0,
                        //   actions: [
                        //     NavigationActions.navigate({ routeName: 'Details' })
                        //   ],
                        // }))
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Detailss',
    //   };
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'default title'),
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    componentDidMount() {
        console.log('detail componentDidMount');
    }
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO_ID');
        const otherParam = navigation.getParam('otherParam', 'The Default Value');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>{JSON.stringify(itemId)}</Text>
                <Text>{JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details ... again"
                    onPress={() => {
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random * 100),
                        })
                    }}
                />
                <Button
                    title="Go To Home"
                    onPress={() => { this.props.navigation.navigate('Home') }}
                />
                <Button
                    title="Go Back"
                    onPress={() => { this.props.navigation.goBack() }}
                />
                <Button
                    title="Go To Top"
                    onPress={() => { this.props.navigation.popToTop() }}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
            </View>
        );
    }
}

// class LogoTitle extends React.Component {
//     render() {
//         return (
//             <Image
//                 source={require('./')}
//                 style={{ width: 30, height: 30 }}
//             />
//         );
//     }
// }

export default createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
}, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });