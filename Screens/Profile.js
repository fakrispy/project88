import React, { Component } from 'react';
import {Text, View} from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        if(!this.state.fontsLoaded){
            return <AppLoading/>;
        } else {
        return(
            <View
            style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button 
                title="Sign in with google"
                onPress={() => this.signInWithGoogleAsync()}></Button>
            </View>
        )
    }
}
}