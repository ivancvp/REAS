define([
    'esri/dijit/Basemap',
    'esri/dijit/BasemapLayer',
    'dojo/i18n!./nls/main'
], function (Basemap, BasemapLayer, i18n) {

    return {
        map: true, // needs a reference to the map
        //mode: 'agol', // mut be either 'agol' or 'custom'

        /* optional starting basemap
        / otherwise uses the basemap from the map
        / must match one of the keys in basemaps object below
        */
        mapStartBasemap: 'mapa_referencia_hibrido',

        /* optional array of  basemaps to show in menu.
        / otherwise uses keys in basemaps object below
        / values in array must match keys in basemaps object
        */
        //basemapsToShow: ['streets', 'satellite', 'hybrid', 'topo', 'lightGray', 'gray', 'national-geographic', 'osm', 'oceans'],

        // define all valid basemaps here.
        basemaps: {
             mapa_referencia_hibrido: {
                title: 'Mapa de referencia Hibrido - IDECA',
                basemap: new Basemap({
                    id: 'mapa_referencia_hibrido',
                    layers: [new BasemapLayer({
                        url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/Mapa_Referencia/mapa_hibrido/MapServer'  
                    })]
                })
            },
            ortofoto: {
                title: 'Ortofoto 2014-2015',
                basemap: new Basemap({
                    id: 'ortofoto',
                    layers: [new BasemapLayer({
                        url: 'http://serviciosgis.eastus.cloudapp.azure.com/arcgis/rest/services/Imagenes/Ortho2015/MapServer'  
                    }), new BasemapLayer({
                        url: 'http://serviciosgis.eastus.cloudapp.azure.com/arcgis/rest/services/Imagenes/Ortho2014/MapServer'
                    })]
                })
            },
            mapa_referencia: {
                title: 'Mapa de referencia IDECA',
                basemap: new Basemap({
                    id: 'mapa_referencia',
                    layers: [new BasemapLayer({
                        url: 'http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/Mapa_Referencia/mapa_base_3857/MapServer'  
                    })]
                })
            },
           
            streets: {},
            'streets-night-vector': {}, // requires v3.16 or higher
            'streets-navigation-vector': {}, // requires v3.16 or higher
            'streets-relief-vector': {}, // requires v3.16 or higher
            satellite: {},
            hybrid: {},
            topo: {},
            terrain: {},
            'gray-vector': {}, // requires v3.16 or higher
            'dark-gray-vector': {}, // requires v3.16 or higher
            oceans: {},
            'national-geographic': {},
            osm: {},
            earthAtNight: {
                title: i18n.basemaps.earthAtNight,
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Earth_at_Night_WM/MapServer'
                        }
                    ]
                }
            }

            // additional examples of vector tile basemaps (requires v3.16 or higher)
            /*
            streetsVector: {
                title: 'Streets',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/3b8814f6ddbd485cae67e8018992246e/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            satelliteVector: {
                title: 'Satellite',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                        }
                    ]
                }
            },
            hybridVector: {
                title: 'Hybrid',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                        },
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/1854498c7e35420b963a514a32689c80/resources/styles/root.json',
                            type: 'VectorTile',
                            isReference: true
                        }
                    ]
                }
            },
            lightGrayVector: {
                title: 'Light Gray Canvas',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/bdf1eec3fa79456c8c7c2bb62f86dade/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            'dark-gray-vector': {
                title: 'Dark Gray Canvas',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/3e3099d7302f4d99bc6f916dcc07ed59/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            navigationVector: {
                title: 'Navigation',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/00cd8e843bae49b3a040423e5d65416b/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            'streets-night-vector': {
                title: 'Streets Night',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/f96366254a564adda1dc468b447ed956/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            streetsReliefVector: {
                title: 'Streets w/ Relief',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/ad06088bd1174866aad2dddbf5ec9642/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            },
            topoVector: {
                title: 'Topographic',
                basemap: {
                    baseMapLayers: [
                        {
                            url: 'https://www.arcgis.com/sharing/rest/content/items/be44936bcdd24db588a1ae5076e36f34/resources/styles/root.json',
                            type: 'VectorTile'
                        }
                    ]
                }
            }
            */

            //examples of custom basemaps
            /*
            streets: {
                title: 'Streets',
                basemap: new Basemap({
                    id: 'streets',
                    layers: [new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                    })]
                })
            },
            satellite: {
                title: 'Satellite',
                basemap: new Basemap({
                    id: 'satellite',
                    layers: [new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    })]
                })
            },
            hybrid: {
                title: 'Hybrid',
                basemap: new Basemap({
                    id: 'hybrid',
                    layers: [new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
                    }), new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer',
                        isReference: true,
                        displayLevels: [0, 1, 2, 3, 4, 5, 6, 7]
                    }), new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer',
                        isReference: true,
                        displayLevels: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
                    })]
                })
            },
            lightGray: {
                title: 'Light Gray Canvas',
                basemap: new Basemap({
                    id: 'lightGray',
                    layers: [new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer'
                    }), new BasemapLayer({
                        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer',
                        isReference: true
                    })]
                })
            },
            stamenToner: {
                title: 'Toner (maps.stamen.com)',
                basemap: new Basemap({
                    id: 'stamenToner',
                    layers: [new BasemapLayer({
                        url: 'https://tile.stamen.com/toner/${level}/${col}/${row}.png',
                        copyright: 'stamen, 2016',
                        id: 'stamenToner',
                        type: 'WebTiledLayer'
                    })]
                })
            },
            stamenTerrain: {
                title: 'Terrain (stamen.com)',
                basemap: new Basemap({
                    id: 'stamenTerrain',
                    layers: [new BasemapLayer({
                        url: 'https://tile.stamen.com/terrain/${level}/${col}/${row}.png',
                        copyright: 'stamen, 2016',
                        id: 'stamenTerrain',
                        type: 'WebTiledLayer'
                    })]
                })
            },
            stamenWatercolor: {
                title: 'Watercolor (stamen.com)',
                basemap: new Basemap({
                    id: 'stamenWatercolor',
                    layers: [new BasemapLayer({
                        url: 'https://tile.stamen.com/watercolor/${level}/${col}/${row}.png',
                        copyright: 'stamen, 2016',
                        id: 'stamenWatercolor',
                        type: 'WebTiledLayer'
                    })]
                })
            },
            */
        }
    };
});