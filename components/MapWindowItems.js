import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import WindowItemForm from "./WindowItemForm";

const MapWindowItems = (props) => {
    const tableMaper = (l) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignContent: 'flex-start',}}>
                {l.map(infos => <WindowItemForm infos={infos} key={infos.id}></WindowItemForm>)}
            </View>
            )
    }
    const tableRender = () => {
        return (
            <>
                {props.infoTable.map((l, i) => {
                    let dublator = i % 2

                        if (dublator == 1) {
                            return (
                            <View style={{flexDirection: 'row'}}>
                                {tableMaper(l)}
                            </View>
                            )}else{
                            return (
                                <View style={{flexDirection: 'row'}}>
                                    <View style={st.dubl}/>
                                    {tableMaper(l)}
                                </View>
                            )}})}</>)}
    return (
        tableRender()
    );
};

export default MapWindowItems;

const st = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: 32,
        height: 32
    },
    tx: {
        fontSize: 10,
    },
    dubl: {
       width: 16,
       height: 16,
    }
})