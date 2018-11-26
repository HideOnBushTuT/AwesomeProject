import React from 'react';
import { View, Text } from 'react-native';

export default class PromiseBasic extends React.Component {
    cutUp = () => {
        console.log('开始切菜');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('切菜切坏了');
                reject('切菜失败');
                // resolve('菜切好了');
            }, 1000);
        });
    }

    boil = () => {
        console.log('开始烧水');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('水烧开了');
                resolve('水烧开了');
            }, 2000);
        });
    }

    doTogether = () => {
        // Promise
        //     .all([this.cutUp, this.boil])
        //     .then((result) => {
        //         console.log('准备完毕');
        //         console.log(result);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // this.cutUp()
        //     .then(this.boil)
        //     .then((result) => {
        //         console.log(result);
        //     });

        this.boil()
            .then(this.cutUp)
            .then((result) => {
                console.log(result);
            });
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text onPress={() => {this.doTogether()}}>Click Me To Make Promise</Text>
            </View>
        )
    }
}