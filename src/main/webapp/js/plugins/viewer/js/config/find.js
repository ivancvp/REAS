/*eslint no-console: 0, no-alert: 0*/
define([
    'dojo/i18n!./nls/main'
], function (i18n) {

    return {
        map: true,
        zoomExtentFactor: 2,
        queries: [
            {
                description: 'Predios en alto riesgo',
                url: 'http://201.245.172.43:6080/arcgis/rest/services/REAS/predios_alto_riesgo/MapServer',
                layerIds: [0],
                searchFields: ['id', 'direccion', 'chip', 'barrio', 'localidad', 'sector_cvp'],
                minChars: 1,
                gridColumns: [
                    {
                        field: 'id', label: 'Identificador', visible: true, get: function (result) {
                            var id = result.feature.attributes.id;
                            return id;
                        }
                    },
                    {
                        field: 'layerName',
                        label: 'Layer',
                        width: 100,
                        sortable: false,
                        resizable: false
                    }
                ],
                sort: [
                    {
                        attribute: 'id',
                        descending: false
                    }
                ],
                prompt: 'Identificador, Dirección, CHIP, Barrio, Localidad',
                selectionMode: 'multiple'
            },
            {
                description: 'Proyectos de vivienda',
                url: 'http://201.245.172.43:6080/arcgis/rest/services/REAS/proyectos_vivienda/MapServer',
                layerIds: [0],
                searchFields: ['nombre','dirección','localidad','barrio'],
                minChars: 1,
                gridColumns: [
                    {
                        field: 'nombre', label: 'Identificador', visible: true, get: function (result) {
                            var id = result.feature.attributes.id;
                            return id;
                        }
                    },
                    { field: 'NOMBRE', label:'nombre'},
                    {
                        field: 'layerName',
                        label: 'Layer',
                        width: 100,
                        sortable: false,
                        resizable: false
                    }
                ],
                sort: [
                    {
                        attribute: 'nombre',
                        descending: false
                    }
                ],
                prompt: 'Identificador, Dirección, CHIP, Barrio, Localidad',
                selectionMode: 'multiple'
            }
        ],
        selectionSymbols: {
            polygon: {
                type: 'esriSFS',
                style: 'esriSFSSolid',
                color: [255, 0, 0, 62],
                outline: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: [255, 0, 0, 255],
                    width: 3
                }
            },
            point: {
                type: 'esriSMS',
                style: 'esriSMSCircle',
                size: 25,
                color: [255, 0, 0, 62],
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    type: 'esriSLS',
                    style: 'esriSLSSolid',
                    color: [255, 0, 0, 255],
                    width: 2
                }
            }
        },
        selectionMode: 'extended'
    };
});