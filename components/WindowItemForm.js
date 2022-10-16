import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from "react-native";
import './sprites/mountainHex.png'
import "./sprites/fieldHex.png"
import "./sprites/forestHex.png"
import "./sprites/hillHex.png"
import "./sprites/waterHex.png"
import "./sprites/emptyHex.png"

const WindowItemForm = (props) => {
    let emptyHex = './sprites/emptyHex.png/'
    let nowSprite = ''
    let s = props.infos.s
    if (s == 'mon1') {nowSprite = require("./sprites/mountainHex.png")}
    if (s=='fld1'){nowSprite = require("./sprites/fieldHex.png")}
    if (s=='frs1'){nowSprite = require("./sprites/forestHex.png")}
    if (s=='hil1'){nowSprite = require("./sprites/hillHex.png")}
    if (s=='wtr1'){nowSprite = require("./sprites/waterHex.png")}
    if (s=='cst1'){nowSprite = require("./sprites/coastHorizontalHex.png")}
    //else {nowSprite = require("./sprites/emptyHex.png")}
    return (

        <View style={{
            //borderColor: 'red', borderWidth: 1,
            width: 32,
            height: 18,
            flexDirection: 'column-reverse'
        }}>
            <ImageBackground source={nowSprite} style={{
                position: 'absolute',
                width: 32,
                height: 32,}}>
                <View style={st.container}>
                    <Text style={st.tx}>{props.infos.key}</Text>
                    <Text style={{fontSize: 8,}}>{props.infos.x},{props.infos.y}</Text>
                </View>
            </ImageBackground>

        </View>


    );
};

export default WindowItemForm;

const st = StyleSheet.create({
    container: {
        width: 32,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        //flexDirection: 'row',
        //borderColor: 'green',
        //borderWidth: 1,
    },
    tx: {
        fontSize: 10,

    }
})