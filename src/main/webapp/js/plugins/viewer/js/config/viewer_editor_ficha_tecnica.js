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
    'dojo/sniff',
    'dojo/_base/lang',
    'esri/tasks/QueryTask',
    'esri/tasks/query',
    'esri/graphicsUtils',
    'esri/graphic'
], function (units, Extent, esriConfig, urlUtils, GeometryService, ImageParameters, GoogleMapsLoader, i18n, topic, has,
        lang,
        QueryTask,
        Query,
        graphicsUtils,
        Graphic
        ) {

    // url to your proxy page, must be on same machine hosting you app. See proxy folder for readme.
    esriConfig.defaults.io.proxyUrl = 'proxy.jsp';
    esriConfig.defaults.io.alwaysUseProxy = false;

    // add a proxy rule to force specific domain requests through proxy
    // be sure the domain is added in proxy.config
    urlUtils.addProxyRule({
//        urlPrefix: 'http://192.168.2.98:6080/arcgis/rest/services',
        urlPrefix: 'http://192.168.2.98:6080/arcgis/rest/services',
        proxyUrl: 'proxy.jsp'
    });
    urlUtils.addProxyRule({
//        urlPrefix: 'http://192.168.2.98:6080/arcgis/rest/services',
        urlPrefix: 'https://geo.cajaviviendapopular.gov.co/arcgis/rest/services',
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


    function getQueryParams() {
        qs = document.location.search;
        qs = qs.split('+').join(' ');

        var params = {},
                tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    function getGraphicsExtent(graphics) {
        var extent = null;
        if (graphics && graphics.length > 0) {
            extent = graphicsUtils.graphicsExtent(graphics);
            if (extent.xmin === extent.xmax || extent.ymin === extent.ymax) {
                extent = this.expandExtent(extent);
            }
        }
        return extent;
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
            center: [-74.081497, 4.623044],
            zoom: 11,
            sliderStyle: 'small'
        },
        titles: {
            header: i18n.viewer.titles.header,
            subHeader: i18n.viewer.titles.subHeader,
            pageTitle: i18n.viewer.titles.pageTitle
        },
        layout: {
            /*  possible options for sidebar layout:
             true - always use mobile sidebar, false - never use mobile sidebar,
             'mobile' - use sidebar for phones and tablets, 'phone' - use sidebar for phones,
             'touch' - use sidebar for all touch devices, 'tablet' - use sidebar for tablets only (not sure why you'd do this?),
             other feature detection supported by dojo/sniff and dojo/has- http://dojotoolkit.org/reference-guide/1.10/dojo/sniff.html
             
             default value is 'phone'
             */
            //sidebar: 'phone'
        },
        // user-defined layer types
        /*
         layerTypes: {
         myCustomLayer: 'widgets/MyCustomLayer'
         },
         */

        // user-defined widget types
        /*
         widgetTypes: [
         'myWidgetType'
         ],
         */

        // operationalLayers: Array of Layers to load on top of the basemap: valid 'type' options: 'dynamic', 'tiled', 'feature'.
        // The 'options' object is passed as the layers options for constructor. Title will be used in the legend only. id's must be unique and have no spaces.
        // 3 'mode' options: MODE_SNAPSHOT = 0, MODE_ONDEMAND = 1, MODE_SELECTION = 2
        operationalLayers: [
            {
                type: 'dynamic',
                url: 'http://192.168.2.98:6080/arcgis/rest/services/REAS/predios_alto_riesgo/MapServer/?token=' + getURLParams("token"),
                title: 'Predios en alto riesgo',
                options: {
                    id: 'consulta_par',
                    opacity: 0.8,
                    visible: true
                }
            },
            {
                type: 'feature',
                //url: 'http://192.168.2.98:6080/arcgis/rest/services/REAS/preliminar_par/FeatureServer/0',
                url: 'https://geo.cajaviviendapopular.gov.co/arcgis/rest/services/REAS/preliminar_par_edicion/FeatureServer/0?token=' + getURLParams("token"),
                title: 'Ubicación aproximada del PAR',
                options: {
                    id: 'preliminar_par',
                    opacity: 1.0,
                    visible: true,
                    outFields: ['*'],
                    mode: 1
                },
                editorLayerInfos: {
                    disableGeometryUpdate: false
                },
                preLoad: function (layer) {
                    //called after layer init but before added to map
                    var qp = getQueryParams();
                    if (qp && qp.id) {
                        layer.setDefinitionExpression("identificador ='" + qp.id + "'");

                        var query = new Query();
                        //query.outFields = [layer.getOutFields()];
                        query.outFields = [];
                        query.where = layer.getDefinitionExpression();
                        query.returnGeometry = true;
                        query.outSpatialReference = layer.spatialReference;

                        var queryTask = new QueryTask(layer.url);
                        queryTask.execute(query, function (results) {
                            if (results && results.features && results.features.length > 0) {
                                var extent = getGraphicsExtent(results.features);

                                if (!layer.getMap()) {
                                    layer.on('load', function (lyr) {
                                        lyr.getMap().setExtent(extent.expand(1.5));
                                    });
                                } else {

                                    layer.getMap().setExtent(extent.expand(1.5));
                                }
                            }
                        });


                        //auto calculate id attribute from url param
                        layer.on('before-apply-edits', function (edits) {
                            if (edits.adds) {
                                for (var i = 0; i < edits.adds.length; i++) {
                                    var edit = edits.adds[i];
                                    if (!edit.attributes.identificador) {
                                        edit.attributes.identificador = qp.id;
                                    }
                                }
                            }
                        });
                    }

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
                    overlayReorder: true
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
                    printTaskURL: 'http://192.168.2.98:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
                    copyrightText: 'CVP',
                    authorText: 'Caja de la vivienda popular',
                    defaultTitle: 'Mapa',
                    defaultFormat: 'PDF',
                    defaultLayout: 'Letter ANSI A Landscape'
                }
            },
            editor: {
                include: has('phone') ? false : true,
                id: 'editor',
                type: 'titlePane',
                path: 'gis/dijit/Editor',
                title: i18n.viewer.widgets.editor,
                iconClass: 'fa-pencil',
                open: true,
                position: 1,
                options: {
                    map: true,
                    mapClickMode: true,
                    editorLayerInfos: true,
                    settings: {
                        showDeleteButton: false,
                        toolbarVisible: true,
                        showAttributesOnClick: false,
                        enableUndoRedo: true,
                        createOptions: {
                            polygonDrawTools: ['freehandpolygon', 'autocomplete']
                        },
                        toolbarOptions: {
                            reshapeVisible: true,
                            cutVisible: true,
                            mergeVisible: true
                        }
                    }
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

