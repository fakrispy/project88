import React, {Component} from 'react';
import{Text,View} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default class LoginScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.appTitle}>
                    <Image
                    source={require("../assets/logo.png")}
                    style={styles.appIcon}
                    ></Image>
                    <Text style={styles.appTitleText}>{'Story Telling\nApp'}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.signInWithGoogleAsync()}
                    >
                        <Image
                        source={require("../assets/google_icon.png")}
                        style={styles.googleIcon}
                        > </Image>
                        <Text style={styles.googleText}>Sign In With Google</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cloudContainer}>
                    <Image 
                    source={require("../assets/cloud.png")}
                    style={styles.cloudImage}
                    ></Image>
                </View>
            </View> 

        );
            toggleSwitch(){
                const previous_state=this.state.isEnabled;
                const theme = !this.state.isEnabled?"dark":"light"
                var updates={}
                updates["/users/"+firebase.auth().currentUser.uid+"/current_theme"]=
                theme
                firebase.database().ref().update(updates);
                this.setState({isEnabled:!previous_state, light_theme: previous_state})
            }
            
        
    }
}