import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from "react-native";
import './hexagon.png'

const WindowItemForm = (props) => {
    let backColor = props.infos.c

    return (

        <View style={{
            //backgroundColor: backColor,
            //borderWidth: 1,
            //width: 32,
            //height: 32,
        }}>
            <ImageBackground source={require('./hexagon.png/')} style={{backgroundColor: backColor}}>
                <View style={st.container}>
                    <Text style={st.tx}>{props.infos.key}</Text>
                    <Text style={{fontSize: 8}}>{props.infos.x} , {props.infos.y}</Text>
                </View>
            </ImageBackground>

        </View>


    );
};

export default WindowItemForm;

const st = StyleSheet.create({
    container: {
        width: 32,
        height: 27,
    },
    tx: {
        fontSize: 10,
    }
})