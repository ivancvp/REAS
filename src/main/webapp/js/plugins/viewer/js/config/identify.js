define([
    'dojo/i18n!./nls/main',
    'dojo/_base/lang',
    'dojo/number',
    'dojo/dom-construct'
], function (i18n, lang, number, domConstruct) {

    var linkTemplate = '<a href="{url}" target="_blank">{text}</a>';
    function directionsFormatter(noValue, attributes) {
        return lang.replace(linkTemplate, {
            url: 'https://www.google.com/maps/dir/' + attributes.Address + ' Louisville, KY',
            text: 'Get Directions'
        });
    }

    function setContentInfo(feature, b, c) {
        alert();
        var url = feature.getLayer().url;
        var oidfield = feature.getLayer().objectIdField;
        var oid = feature.attributes[oidfield];
//        var token = feature.getLayer().credential.token;
        
        console.log(feature.getLayer());

        var request = new XMLHttpRequest();
//        request.open('GET', url + '/' + oid + '/htmlPopup?f=json&token=' + token, false);  // `false` makes the request synchronous
        request.open('GET', url + '/' + oid + '/htmlPopup?f=json', false);  // `false` makes the request synchronous
        request.send(null);

        if (request.status === 200) {
            var responseText = request.responseText;
            if (responseText) {
                var response = eval('(' + request.responseText + ')');
                var node = domConstruct.create("div", {innerHTML: response.content});
                return node;
            }

        }

        // create a chart for example
        //http://201.245.172.43:6080/arcgis/rest/services/REAS/proyectos_vivienda/FeatureServer/0/5/htmlPopup?token=lcuwKx3Go5648ogndqrHgopdt4ItgzLKwVXlSVsmaDI
        var node = domConstruct.create("div", {innerHTML: "No fué posible enontrar la información del elemento selecccionado"});
        return node;
    }

    return {
        map: true,
        mapClickMode: true,
        mapRightClickMenu: true,
        identifyLayerInfos: true,
        identifyTolerance: 5,
        draggable: false,
        // config object definition:
        //  {<layer id>:{
        //      <sub layer number>:{
        //          <pop-up definition, see link below>
        //          }
        //      },
        //  <layer id>:{
        //      <sub layer number>:{
        //          <pop-up definition, see link below>
        //          }
        //      }
        //  }

        // for details on pop-up definition see: https://developers.arcgis.com/javascript/jshelp/intro_popuptemplate.html

        identifies: {
            cities: {
                0: {
                    fieldInfos: [{
                            visible: true,
                            fieldName: 'CITY_NAME',
                            label: 'Name'
                        }, {
                            visible: true,
                            fieldName: 'POP',
                            label: 'Population',
                            formatter: function (value) {
                                return number.format(value);
                            }
                        }]
                }
            },
            proyectos_vivienda: {
                2: {
                    title: i18n.identify.louisvillePubSafety.policeStation,
                    fieldInfos: [{
                            // example of adding a 'calculated' or formatted field
                            // click on a louisville kentucky police station to see
                            // the result
                            fieldName: 'Directions',
                            visible: true,
                            formatter: directionsFormatter
                        }, {
                            fieldName: 'Name',
                            visible: true
                        }, {
                            fieldName: 'Address',
                            visible: true
                        }, {
                            fieldName: 'Type',
                            visible: true
                        }, {
                            fieldName: 'Police Function',
                            visible: true
                        }, {
                            fieldName: 'Last Update Date',
                            visible: true
                        }]
                },
                10: {
                    title: i18n.identify.louisvillePubSafety.trafficCamera,
                    content: setContentInfo
                            /*description: 'http://201.245.172.43:6080/arcgis/rest/services/REAS/proyectos_vivienda/FeatureServer/0/{objectid}/',
                             mediaInfos: [{
                             title: '',
                             caption: '',
                             type: 'image',
                             value: {
                             sourceURL: '{objectid}',
                             linkURL: '{Location URL}'
                             }
                             }]
                             */
                }
            }
        }
    };
});
