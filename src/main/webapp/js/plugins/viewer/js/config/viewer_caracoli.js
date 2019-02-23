define([
    'esri/units',
    'esri/geometry/Extent',
    'esri/config',
    'esri/urlUtils',
    'esri/tasks/GeometryService',
    'esri/layers/ImageParameters',
    'gis/plugins/Google',
    'dojo/i18n!./nls/main',
    'dojo/topic',
    'dojo/sniff'
], function (units, Extent, esriConfig, urlUtils, GeometryService, ImageParameters, GoogleMapsLoader, i18n, topic, has) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy.jsp';
    esriConfig.defaults.io.alwaysUseProxy = false;

    // add a proxy rule to force specific domain requests through proxy
    // be sure the domain is added in proxy.config
    urlUtils.addProxyRule({
         urlPrefix: 'http://201.245.172.43:6080/arcgis/rest/services',
//        urlPrefix: 'http://geo.cajaviviendapopular.gov.co:6080/arcgis/rest/services',
        proxyUrl: 'proxy.jsp'
    });


    // url to your geometry server.
    esriConfig.defaults.geometryService = new GeometryService('https://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer');

    // Use your own Google Maps API Key.
    // https://developers.google.com/maps/documentation/javascript/get-api-key
    GoogleMapsLoader.KEY = 'NOT-A-REAL-API-KEY';

    // helper function returning ImageParameters for dynamic layers
    // example:
    // imageParameters: buildImageParameters({
    //     layerIds: [0],
    //     layerOption: 'show'
    // })
    function buildImageParameters(config) {
        config = config || {};
        var ip = new ImageParameters();
        //image parameters for dynamic services, set to png32 for higher quality exports
        ip.format = 'png32';
        for (var key in config) {
            if (config.hasOwnProperty(key)) {
                ip[key] = config[key];
            }
        }
        return ip;
    }

    //some example topics for listening to menu item clicks
    //these topics publish a simple message to the growler
    //in a real world example, these topics would be used
    //in their own widget to listen for layer menu click events
    topic.subscribe('layerControl/hello', function (event) {
        topic.publish('growler/growl', {
            title: 'Hello!',
            message: event.layer._titleForLegend + ' ' +
                    (event.subLayer ? event.subLayer.name : '') +
                    ' says hello'
        });
    });
    topic.subscribe('layerControl/goodbye', function (event) {
        topic.publish('growler/growl', {
            title: 'Goodbye!',
            message: event.layer._titleForLegend + ' ' +
                    (event.subLayer ? event.subLayer.name : '') +
                    ' says goodbye'
        });
    });

    return {
        // used for debugging your app
        isDebug: true,
        //default mapClick mode, mapClickMode lets widgets know what mode the map is in to avoid multipult map click actions from taking place (ie identify while drawing).
        defaultMapClickMode: 'identify',
        // map options, passed to map constructor. see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
        mapOptions: {
            basemap: 'streets',
            center: [-74.172445,4.573759],
            zoom: 18,
            sliderStyle: 'small'
        },
        titles: {
            header: i18n.viewer.titles.header,
            subHeader: i18n.viewer.titles.subHeader,
            pageTitle: i18n.viewer.titles.pageTitle
        },
        layout: {
        
        },
        operationalLayers: [
            {
                type: 'dynamic',
                url: 'http://geo.cajaviviendapopular.gov.co:6080/arcgis/rest/services/REAS/CARACOLI/MapServer?token=' + getURLParams("token"),
                title: 'Caracolí',
                options: {
                    id: 'caracoli',
                    visible: true
                },
                layerControlLayerInfos: {
                }
            },        
            {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/emergencias/gestionderiesgos/MapServer',
                title: 'Riesgos',
                options: {
                    id: 'riesgos',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/salud/instituciones/MapServer',
                title: 'Salud',
                options: {
                    id: 'salud',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/seguridad/infraestructuraseguridad/MapServer',
                title: 'Seguridad',
                options: {
                    id: 'seguridad',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/educacion/infraestructuraeducativa/MapServer',
                title: 'Educación',
                options: {
                    id: 'educacion',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/gestionpublica/centrosadministrativos/MapServer',
                title: 'Centros Administrativos',
                options: {
                    id: 'centros_administrativos',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/movilidad/transportepublico/MapServer',
                title: 'Transporte público',
                options: {
                    id: 'transporte_publico',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/mujeres/centroatencion/MapServer',
                title: 'Atención a la mujer',
                options: {
                    id: 'atencion_mujer',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }, {
                type: 'dynamic',
                url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/espaciopublico/inventarios/MapServer',
                title: 'Espacio público',
                options: {
                    id: 'espacio_publico',
                    visible: false
                },
                layerControlLayerInfos: {
                    layerGroup: 'IDECA'
                }
            }
        ],
        // set include:true to load. For titlePane type set position the the desired order in the sidebar
        widgets: {
            growler: {
                include: true,
                id: 'growler',
                type: 'domNode',
                path: 'gis/dijit/Growler',
                srcNodeRef: 'growlerDijit',
                options: {}
            },
            dnd: {
                include: true,
                id: 'dnd',
                type: 'titlePane',
                canFloat: true,
                position: 7,
                path: 'gis/dijit/DnD',
                title: 'Añadir capas',
                options: {
                    map: true
                }
            },
            search: {
                include: true,
                type: has('phone') ? 'titlePane' : 'domNode',
                path: 'esri/dijit/Search',
                srcNodeRef: 'geocoderButton',
                title: i18n.viewer.widgets.search,
                iconClass: 'fa-search',
                position: 0,
                options: {
                    map: true,
                    visible: true,
                    enableInfoWindow: false,
                    enableButtonMode: has('phone') ? false : true,
                    expanded: has('phone') ? true : false
                }
            },
            basemaps: {
                include: true,
                id: 'basemaps',
                type: 'domNode',
                path: 'gis/dijit/Basemaps',
                srcNodeRef: 'basemapsDijit',
                options: 'config/basemaps'
            },
            identify: {
                include: true,
                id: 'identify',
                type: 'titlePane',
                path: 'gis/dijit/Identify',
                title: i18n.viewer.widgets.identify,
                iconClass: 'fa-info-circle',
                open: false,
                preload: true,
                position: 3,
                options: 'config/identify'
            },
            mapInfo: {
                include: false,
                id: 'mapInfo',
                type: 'domNode',
                path: 'gis/dijit/MapInfo',
                srcNodeRef: 'mapInfoDijit',
                options: {
                    map: true,
                    mode: 'dms',
                    firstCoord: 'y',
                    unitScale: 3,
                    showScale: true,
                    xLabel: '',
                    yLabel: '',
                    minWidth: 286
                }
            },
            scalebar: {
                include: true,
                id: 'scalebar',
                type: 'map',
                path: 'esri/dijit/Scalebar',
                options: {
                    map: true,
                    attachTo: 'bottom-left',
                    scalebarStyle: 'line',
                    scalebarUnit: 'dual'
                }
            },
            locateButton: {
                include: true,
                id: 'locateButton',
                type: 'domNode',
                path: 'gis/dijit/LocateButton',
                srcNodeRef: 'locateButton',
                options: {
                    map: true,
                    publishGPSPosition: true,
                    highlightLocation: true,
                    useTracking: true,
                    geolocationOptions: {
                        maximumAge: 0,
                        timeout: 15000,
                        enableHighAccuracy: true
                    }
                }
            },
            overviewMap: {
                include: has('phone') ? false : true,
                id: 'overviewMap',
                type: 'map',
                path: 'esri/dijit/OverviewMap',
                options: {
                    map: true,
                    attachTo: 'bottom-right',
                    color: '#0000CC',
                    height: 100,
                    width: 125,
                    opacity: 0.30,
                    visible: false
                }
            },
            homeButton: {
                include: true,
                id: 'homeButton',
                type: 'domNode',
                path: 'esri/dijit/HomeButton',
                srcNodeRef: 'homeButton',
                options: {
                    map: true,
                    center: [-74.081497, 4.623044],
                    zoom: 11
                }
            },
            layerControl: {
                include: true,
                id: 'layerControl',
                type: 'titlePane',
                path: 'gis/dijit/LayerControl',
                title: i18n.viewer.widgets.layerControl,
                iconClass: 'fa-th-list',
                open: true,
                position: 0,
                options: {
                    map: true,
                    layerControlLayerInfos: true,
                    separated: true,
                    vectorReorder: true,
                    overlayReorder: true,
                    // create a custom menu entry in all of these feature types
                    // the custom menu item will publish a topic when clicked
                    /*
                     menu: {
                     feature: [{
                     topic: 'hello',
                     iconClass: 'fa fa-smile-o',
                     label: 'Say Hello'
                     }]
                     },
                     */
                    //create a example sub layer menu that will
                    //apply to all layers of type 'dynamic'
                    /*subLayerMenu: {
                     dynamic: [{
                     topic: 'goodbye',
                     iconClass: 'fa fa-frown-o',
                     label: 'Say goodbye'
                     }]
                     }*/
                }
            },
            find: {
                include: true,
                id: 'find',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Find',
                title: i18n.viewer.widgets.find,
                iconClass: 'fa-search',
                open: false,
                position: 3,
                options: 'config/find'
            },
            draw: {
                include: true,
                id: 'draw',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Draw',
                title: i18n.viewer.widgets.draw,
                iconClass: 'fa-paint-brush',
                open: false,
                position: 4,
                options: {
                    map: true,
                    mapClickMode: true
                }
            },
            measure: {
                include: true,
                id: 'measurement',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Measurement',
                title: i18n.viewer.widgets.measure,
                iconClass: 'fa-expand',
                open: false,
                position: 5,
                options: {
                    map: true,
                    mapClickMode: true,
                    defaultAreaUnit: units.SQUARE_METERS,
                    defaultLengthUnit: units.METERS
                }
            },
            print: {
                include: true,
                id: 'print',
                type: 'titlePane',
                canFloat: true,
                path: 'gis/dijit/Print',
                title: i18n.viewer.widgets.print,
                iconClass: 'fa-print',
                open: false,
                position: 6,
                options: {
                    map: true,
                    //printTaskURL: 'https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
                    printTaskURL: 'http://geo.cajaviviendapopular.gov.co:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
                    copyrightText: 'CVP',
                    authorText: 'Caja de la vivienda popular',
                    defaultTitle: 'Mapa',
                    defaultFormat: 'PDF',
                    defaultLayout: 'Letter ANSI A Landscape'
                }
            },
            /*directions: {
             include: true,
             id: 'directions',
             type: 'titlePane',
             path: 'gis/dijit/Directions',
             title: i18n.viewer.widgets.directions,
             iconClass: 'fa-map-signs',
             open: false,
             position: 7,
             options: {
             map: true,
             mapRightClickMenu: true,
             options: {
             routeTaskUrl: 'https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Network/USA/NAServer/Route',
             routeParams: {
             directionsLanguage: 'es-CO',
             directionsLengthUnits: units.METERS
             },
             active: false //for 3.12, starts active by default, which we dont want as it interfears with mapClickMode
             }
             }
             },
             */
            help: {
                include: has('phone') ? false : true,
                id: 'help',
                type: 'floating',
                path: 'gis/dijit/Help',
                title: i18n.viewer.widgets.help,
                iconClass: 'fa-info-circle',
                paneOptions: {
                    draggable: false,
                    html: '<a href="#"><i class="fa fa-fw fa-info-circle"></i>link</a>'.replace('link', i18n.viewer.widgets.help),
                    domTarget: 'helpDijit',
                    style: 'height:345px;width:450px;'
                },
                options: {}
            }

        }
    };
});
