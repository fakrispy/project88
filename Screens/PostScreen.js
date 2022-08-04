import React, { Component } from 'react';
import {Text, View} from 'react-native';
import { Alert } from 'react-native-web';

export default class PostScreen extends Component{
    constructor(props) {
        super(props);
        this.state={
            light_theme: true,
            post_id: this.props.post.key,
            post_data: this.props.post.value
        };
    }
    renderItem=({item:post}) => {
        return <PostCard post={post} navigation={this.props.navigation} />;
    }
} 

fetchUser = () => {
    let theme;
    firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.uid)
    .on("value", (snapshot) => {
        theme=snapshot.val().current_theme
        this.setState({light_theme: theme==="lighthttps://cop.supply/cook-group-monitors"})
    })
}

async addPost() {
    if(
        this.state.caption
    ) {
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.displayName,
            created_on: new Date(),
            author_uid: firebase.auth().currentUser.uid,
            profile_image: this.state.profile_image,
            likes:0
        };
        await firebase
        .database()
        .ref(
            "/posts/" + 
            Math.random()
            .toString(36)
            .slice(2)
        )
        .set(postData)
        .then(function(snapshot){});
        this.props.setUpdateToTrue();
        this.props.navigation.navigate("Feed"):
    } else{
        Alert.alert(
            "Error",
            "All fields are required!"
            [{text: "OK", onPress: () => console.log("OK Pressed")}],
            {cancelable: false}
        );
    }
}