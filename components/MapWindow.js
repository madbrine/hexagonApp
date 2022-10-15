import React, {useState} from 'react';
import {View} from "react-native";
import MapWindowItems from "./MapWindowItems";

const MapWindow = () => {
    const [infoTable, setInfoTable] = useState([
        [{x:1,y:1,c:'#108c00',key:1},{x:2,y:1,c:'#108c00',key:2},{x:3,y:1,c:'#108c00',key:3},{x:4,y:1,c:'#108c00',key:4},{x:5,y:1,c:'#108c00',key:5},{x:6,y:1,c:'#108c00',key:6},{x:7,y:1,c:'#108c00',key:7},{x:8,y:1,c:'#108c00',key:8},{x:9,y:1,c:'#108c00',key:9},{x:10,y:1,c:'#108c00',key:10},{x:11,y:1,c:'#108c00',key:11},{x:12,y:1,c:'#108c00',key:12},{x:13,y:1,c:'#108c00',key:13},{x:14,y:1,c:'#108c00',key:14},{x:15,y:1,c:'#108c00',key:15}],
        [{x:1,y:2,c:'#108c00',key:16},{x:2,y:2,c:'#108c00',key:17},{x:3,y:2,c:'#108c00',key:18},{x:4,y:2,c:'#108c00',key:19},{x:5,y:2,c:'#108c00',key:20},{x:6,y:2,c:'#108c00',key:21},{x:7,y:2,c:'#108c00',key:22},{x:8,y:2,c:'#108c00',key:23},{x:9,y:2,c:'#108c00',key:24},{x:10,y:2,c:'#108c00',key:25},{x:11,y:2,c:'#108c00',key:26},{x:12,y:2,c:'#108c00',key:27},{x:13,y:2,c:'#108c00',key:28},{x:14,y:2,c:'#108c00',key:29},{x:15,y:2,c:'#108c00',key:30}],
        [{x:1,y:3,c:'#108c00',key:31},{x:2,y:3,c:'#108c00',key:32},{x:3,y:3,c:'#108c00',key:33},{x:4,y:3,c:'#108c00',key:34},{x:5,y:3,c:'#108c00',key:35},{x:6,y:3,c:'#108c00',key:36},{x:7,y:3,c:'#108c00',key:37},{x:8,y:3,c:'#108c00',key:38},{x:9,y:3,c:'#108c00',key:39},{x:10,y:3,c:'#108c00',key:40},{x:11,y:3,c:'#108c00',key:41},{x:12,y:3,c:'#108c00',key:42},{x:13,y:3,c:'#108c00',key:43},{x:14,y:3,c:'#108c00',key:44},{x:15,y:3,c:'#108c00',key:45}],
        [{x:1,y:4,c:'#108c00',key:46},{x:2,y:4,c:'#108c00',key:47},{x:3,y:4,c:'#108c00',key:48},{x:4,y:4,c:'#108c00',key:49},{x:5,y:4,c:'#108c00',key:50},{x:6,y:4,c:'#108c00',key:51},{x:7,y:4,c:'#108c00',key:52},{x:8,y:4,c:'#108c00',key:53},{x:9,y:4,c:'#108c00',key:54},{x:10,y:4,c:'#108c00',key:55},{x:11,y:4,c:'#108c00',key:56},{x:12,y:4,c:'#108c00',key:57},{x:13,y:4,c:'#108c00',key:58},{x:14,y:4,c:'#108c00',key:59},{x:15,y:4,c:'#108c00',key:60}],
        [{x:1,y:5,c:'#108c00',key:61},{x:2,y:5,c:'#108c00',key:62},{x:3,y:5,c:'#108c00',key:63},{x:4,y:5,c:'#108c00',key:64},{x:5,y:5,c:'#108c00',key:65},{x:6,y:5,c:'#108c00',key:66},{x:7,y:5,c:'#108c00',key:67},{x:8,y:5,c:'#108c00',key:68},{x:9,y:5,c:'#108c00',key:69},{x:10,y:5,c:'#108c00',key:70},{x:11,y:5,c:'#108c00',key:71},{x:12,y:5,c:'#108c00',key:72},{x:13,y:5,c:'#108c00',key:73},{x:14,y:5,c:'#108c00',key:74},{x:15,y:5,c:'#108c00',key:75}],
        [{x:1,y:6,c:'#108c00',key:76},{x:2,y:6,c:'#108c00',key:77},{x:3,y:6,c:'#108c00',key:78},{x:4,y:6,c:'#108c00',key:79},{x:5,y:6,c:'#108c00',key:80},{x:6,y:6,c:'#108c00',key:81},{x:7,y:6,c:'#108c00',key:82},{x:8,y:6,c:'#108c00',key:83},{x:9,y:6,c:'#108c00',key:84},{x:10,y:6,c:'#108c00',key:85},{x:11,y:6,c:'#108c00',key:86},{x:12,y:6,c:'#108c00',key:87},{x:13,y:6,c:'#108c00',key:88},{x:14,y:6,c:'#108c00',key:89},{x:15,y:6,c:'#108c00',key:90}],
        [{x:1,y:7,c:'#108c00',key:91},{x:2,y:7,c:'#108c00',key:92},{x:3,y:7,c:'#108c00',key:93},{x:4,y:7,c:'#108c00',key:94},{x:5,y:7,c:'#108c00',key:95},{x:6,y:7,c:'#108c00',key:96},{x:7,y:7,c:'#108c00',key:97},{x:8,y:7,c:'#108c00',key:98},{x:9,y:7,c:'#108c00',key:99},{x:10,y:7,c:'#108c00',key:100},{x:11,y:7,c:'#108c00',key:101},{x:12,y:7,c:'#108c00',key:102},{x:13,y:7,c:'#108c00',key:103},{x:14,y:7,c:'#108c00',key:104},{x:15,y:7,c:'#108c00',key:105}],
        [{x:1,y:8,c:'#108c00',key:106},{x:2,y:8,c:'#108c00',key:107},{x:3,y:8,c:'#108c00',key:108},{x:4,y:8,c:'#108c00',key:109},{x:5,y:8,c:'#108c00',key:110},{x:6,y:8,c:'#108c00',key:111},{x:7,y:8,c:'#108c00',key:112},{x:8,y:8,c:'#108c00',key:113},{x:9,y:8,c:'#108c00',key:114},{x:10,y:8,c:'#108c00',key:115},{x:11,y:8,c:'#108c00',key:116},{x:12,y:8,c:'#108c00',key:117},{x:13,y:8,c:'#108c00',key:118},{x:14,y:8,c:'#108c00',key:119},{x:15,y:8,c:'#108c00',key:120}],
        [{x:1,y:9,c:'#108c00',key:121},{x:2,y:9,c:'#108c00',key:122},{x:3,y:9,c:'#108c00',key:123},{x:4,y:9,c:'#108c00',key:124},{x:5,y:9,c:'#108c00',key:125},{x:6,y:9,c:'#108c00',key:126},{x:7,y:9,c:'#108c00',key:127},{x:8,y:9,c:'#108c00',key:128},{x:9,y:9,c:'#108c00',key:129},{x:10,y:9,c:'#108c00',key:130},{x:11,y:9,c:'#108c00',key:131},{x:12,y:9,c:'#108c00',key:132},{x:13,y:9,c:'#108c00',key:133},{x:14,y:9,c:'#108c00',key:134},{x:15,y:9,c:'#108c00',key:135}],
        [{x:1,y:10,c:'#108c00',key:136},{x:2,y:10,c:'#108c00',key:137},{x:3,y:10,c:'#108c00',key:138},{x:4,y:10,c:'#108c00',key:139},{x:5,y:10,c:'#108c00',key:140},{x:6,y:10,c:'#108c00',key:141},{x:7,y:10,c:'#108c00',key:142},{x:8,y:10,c:'#108c00',key:143},{x:9,y:10,c:'#108c00',key:144},{x:10,y:10,c:'#108c00',key:145},{x:11,y:10,c:'#108c00',key:146},{x:12,y:10,c:'#108c00',key:147},{x:13,y:10,c:'#108c00',key:148},{x:14,y:10,c:'#108c00',key:149},{x:15,y:10,c:'#108c00',key:150}],
        [{x:1,y:11,c:'#108c00',key:151},{x:2,y:11,c:'#108c00',key:152},{x:3,y:11,c:'#108c00',key:153},{x:4,y:11,c:'#108c00',key:154},{x:5,y:11,c:'#108c00',key:155},{x:6,y:11,c:'#108c00',key:156},{x:7,y:11,c:'#108c00',key:157},{x:8,y:11,c:'#108c00',key:158},{x:9,y:11,c:'#108c00',key:159},{x:10,y:11,c:'#108c00',key:160},{x:11,y:11,c:'#108c00',key:161},{x:12,y:11,c:'#108c00',key:162},{x:13,y:11,c:'#108c00',key:163},{x:14,y:11,c:'#108c00',key:164},{x:15,y:11,c:'#108c00',key:165}],
        [{x:1,y:12,c:'#108c00',key:166},{x:2,y:12,c:'#108c00',key:167},{x:3,y:12,c:'#108c00',key:168},{x:4,y:12,c:'#108c00',key:169},{x:5,y:12,c:'#108c00',key:170},{x:6,y:12,c:'#108c00',key:171},{x:7,y:12,c:'#108c00',key:172},{x:8,y:12,c:'#108c00',key:173},{x:9,y:12,c:'#108c00',key:174},{x:10,y:12,c:'#108c00',key:175},{x:11,y:12,c:'#108c00',key:176},{x:12,y:12,c:'#108c00',key:177},{x:13,y:12,c:'#108c00',key:178},{x:14,y:12,c:'#108c00',key:179},{x:15,y:12,c:'#108c00',key:180}],
        [{x:1,y:13,c:'#108c00',key:181},{x:2,y:13,c:'#108c00',key:182},{x:3,y:13,c:'#108c00',key:183},{x:4,y:13,c:'#108c00',key:184},{x:5,y:13,c:'#108c00',key:185},{x:6,y:13,c:'#108c00',key:186},{x:7,y:13,c:'#108c00',key:187},{x:8,y:13,c:'#108c00',key:188},{x:9,y:13,c:'#108c00',key:189},{x:10,y:13,c:'#108c00',key:190},{x:11,y:13,c:'#108c00',key:191},{x:12,y:13,c:'#108c00',key:192},{x:13,y:13,c:'#108c00',key:193},{x:14,y:13,c:'#108c00',key:194},{x:15,y:13,c:'#108c00',key:195}],
        [{x:1,y:14,c:'#108c00',key:196},{x:2,y:14,c:'#108c00',key:197},{x:3,y:14,c:'#108c00',key:198},{x:4,y:14,c:'#108c00',key:199},{x:5,y:14,c:'#108c00',key:200},{x:6,y:14,c:'#108c00',key:201},{x:7,y:14,c:'#108c00',key:202},{x:8,y:14,c:'#108c00',key:203},{x:9,y:14,c:'#108c00',key:204},{x:10,y:14,c:'#108c00',key:205},{x:11,y:14,c:'#108c00',key:206},{x:12,y:14,c:'#108c00',key:207},{x:13,y:14,c:'#108c00',key:208},{x:14,y:14,c:'#108c00',key:209},{x:15,y:14,c:'#108c00',key:210}],
        [{x:1,y:15,c:'#108c00',key:211},{x:2,y:15,c:'#108c00',key:212},{x:3,y:15,c:'#108c00',key:213},{x:4,y:15,c:'#108c00',key:214},{x:5,y:15,c:'#108c00',key:215},{x:6,y:15,c:'#108c00',key:216},{x:7,y:15,c:'#108c00',key:217},{x:8,y:15,c:'#108c00',key:218},{x:9,y:15,c:'#108c00',key:219},{x:10,y:15,c:'#108c00',key:220},{x:11,y:15,c:'#108c00',key:221},{x:12,y:15,c:'#108c00',key:222},{x:13,y:15,c:'#108c00',key:223},{x:14,y:15,c:'#108c00',key:224},{x:15,y:15,c:'#108c00',key:225}],
    ])


    return (
        <View>
            <MapWindowItems infoTable={infoTable}>

            </MapWindowItems>
        </View>
    );
};

export default MapWindow;