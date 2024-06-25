var wms_layers = [];

var format_Maincopy_0 = new ol.format.GeoJSON();
var features_Maincopy_0 = format_Maincopy_0.readFeatures(json_Maincopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maincopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maincopy_0.addFeatures(features_Maincopy_0);
var lyr_Maincopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maincopy_0, 
                style: style_Maincopy_0,
                popuplayertitle: "Main copy",
                interactive: true,
                title: '<img src="styles/legend/Maincopy_0.png" /> Main copy'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Percentage_Units_2 = new ol.format.GeoJSON();
var features_Percentage_Units_2 = format_Percentage_Units_2.readFeatures(json_Percentage_Units_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentage_Units_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percentage_Units_2.addFeatures(features_Percentage_Units_2);
var lyr_Percentage_Units_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Percentage_Units_2, 
                style: style_Percentage_Units_2,
                popuplayertitle: "Percentage_Units",
                interactive: true,
    title: 'Percentage_Units<br />\
    <img src="styles/legend/Percentage_Units_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Percentage_Units_2_1.png" /> 0 - 62<br />\
    <img src="styles/legend/Percentage_Units_2_2.png" /> 62 - 89<br />\
    <img src="styles/legend/Percentage_Units_2_3.png" /> 89 - 100<br />'
        });
var format_Percentage_Routes_3 = new ol.format.GeoJSON();
var features_Percentage_Routes_3 = format_Percentage_Routes_3.readFeatures(json_Percentage_Routes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentage_Routes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Percentage_Routes_3.addFeatures(features_Percentage_Routes_3);
var lyr_Percentage_Routes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Percentage_Routes_3, 
                style: style_Percentage_Routes_3,
                popuplayertitle: "Percentage_Routes",
                interactive: true,
    title: 'Percentage_Routes<br />\
    <img src="styles/legend/Percentage_Routes_3_0.png" /> 0 - 25<br />\
    <img src="styles/legend/Percentage_Routes_3_1.png" /> 25 - 66<br />\
    <img src="styles/legend/Percentage_Routes_3_2.png" /> 66 - 88<br />\
    <img src="styles/legend/Percentage_Routes_3_3.png" /> 88 - 100<br />'
        });
var format_Conso_Units_4 = new ol.format.GeoJSON();
var features_Conso_Units_4 = format_Conso_Units_4.readFeatures(json_Conso_Units_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conso_Units_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conso_Units_4.addFeatures(features_Conso_Units_4);
var lyr_Conso_Units_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conso_Units_4, 
                style: style_Conso_Units_4,
                popuplayertitle: "Conso_Units",
                interactive: true,
    title: 'Conso_Units<br />\
    <img src="styles/legend/Conso_Units_4_0.png" /> 0 - 3665<br />\
    <img src="styles/legend/Conso_Units_4_1.png" /> 3665 - 10181<br />\
    <img src="styles/legend/Conso_Units_4_2.png" /> 10181 - 21149<br />\
    <img src="styles/legend/Conso_Units_4_3.png" /> 21149 - 30819<br />'
        });
var format_Conso_Routes_5 = new ol.format.GeoJSON();
var features_Conso_Routes_5 = format_Conso_Routes_5.readFeatures(json_Conso_Routes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conso_Routes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conso_Routes_5.addFeatures(features_Conso_Routes_5);
var lyr_Conso_Routes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conso_Routes_5, 
                style: style_Conso_Routes_5,
                popuplayertitle: "Conso_Routes",
                interactive: true,
    title: 'Conso_Routes<br />\
    <img src="styles/legend/Conso_Routes_5_0.png" /> 0 - 152<br />\
    <img src="styles/legend/Conso_Routes_5_1.png" /> 152 - 354<br />\
    <img src="styles/legend/Conso_Routes_5_2.png" /> 354 - 699<br />\
    <img src="styles/legend/Conso_Routes_5_3.png" /> 699 - 1046<br />'
        });

lyr_Maincopy_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Percentage_Units_2.setVisible(true);lyr_Percentage_Routes_3.setVisible(true);lyr_Conso_Units_4.setVisible(true);lyr_Conso_Routes_5.setVisible(true);
var layersList = [lyr_Maincopy_0,lyr_OpenStreetMap_1,lyr_Percentage_Units_2,lyr_Percentage_Routes_3,lyr_Conso_Units_4,lyr_Conso_Routes_5];
lyr_Maincopy_0.set('fieldAliases', {'RegName': 'RegName', 'RegShort': 'RegShort', 'RegCode': 'RegCode', 'TOT_MPUJ': 'TOT_MPUJ', 'PUJ_ALL': 'PUJ_ALL', });
lyr_Percentage_Units_2.set('fieldAliases', {'RegShort': 'RegShort', 'Per_Units': 'Per_Units', });
lyr_Percentage_Routes_3.set('fieldAliases', {'RegShort': 'RegShort', 'Per_Routes': 'Per_Routes', });
lyr_Conso_Units_4.set('fieldAliases', {'RegShort': 'RegShort', 'Conso_Unit': 'Conso_Unit', });
lyr_Conso_Routes_5.set('fieldAliases', {'RegShort': 'RegShort', 'Conso_Rout': 'Conso_Rout', });
lyr_Maincopy_0.set('fieldImages', {'RegName': 'TextEdit', 'RegShort': 'TextEdit', 'RegCode': 'TextEdit', 'TOT_MPUJ': 'TextEdit', 'PUJ_ALL': 'TextEdit', });
lyr_Percentage_Units_2.set('fieldImages', {'RegShort': 'TextEdit', 'Per_Units': 'TextEdit', });
lyr_Percentage_Routes_3.set('fieldImages', {'RegShort': 'TextEdit', 'Per_Routes': 'TextEdit', });
lyr_Conso_Units_4.set('fieldImages', {'RegShort': 'TextEdit', 'Conso_Unit': 'TextEdit', });
lyr_Conso_Routes_5.set('fieldImages', {'RegShort': 'TextEdit', 'Conso_Rout': 'TextEdit', });
lyr_Maincopy_0.set('fieldLabels', {'RegName': 'no label', 'RegShort': 'no label', 'RegCode': 'no label', 'TOT_MPUJ': 'no label', 'PUJ_ALL': 'no label', });
lyr_Percentage_Units_2.set('fieldLabels', {'RegShort': 'inline label - always visible', 'Per_Units': 'inline label - always visible', });
lyr_Percentage_Routes_3.set('fieldLabels', {'RegShort': 'inline label - always visible', 'Per_Routes': 'inline label - always visible', });
lyr_Conso_Units_4.set('fieldLabels', {'RegShort': 'inline label - always visible', 'Conso_Unit': 'inline label - always visible', });
lyr_Conso_Routes_5.set('fieldLabels', {'RegShort': 'inline label - always visible', 'Conso_Rout': 'inline label - always visible', });
lyr_Conso_Routes_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});