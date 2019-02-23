var ficha_social_v7_options = {
    "fields": {
        "fecha_concepto": {
            "dateFormat": "DD/MM/YYYY",
            "placeholder": "dd/mm/aaaa",
            "readonly": true
        },
        "tipo_familia": {
            "type": "select",
            "dataSource": "./GestionConsultas?op=ficha_social_v7_consulta_tipo_famillia",
            "noneLabel": "Seleccione...",
            "emptySelectFirst": false,
            "removeDefaultNone": false
        },
        "miembros": {
            "type": "table",
            "label": "2 IDENTIFICACIÓN DE LA FAMILIA",
            "showActionsColumn": false,
            "fieldClass": "display nowrap",
            "items": {
                "fields": {
                    "parentesco": {
                        "type": "select",
                        "dataSource": "./GestionConsultas?op=ficha_social_v7_consulta_tipo_parentesco",
                        "noneLabel": "Seleccione...",
                        "emptySelectFirst": false,
                        "removeDefaultNone": false,
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    },
                    "primer_nombre": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }

                    }, "segundo_nombre": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    },
                    "primer_apellido": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    },
                    "segundo_apellido": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    },
                    "fecha_nacimiento": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        },
                        "dateFormat": "DD/MM/YYYY",
                        "placeholder": "dd/mm/aaaa",
                        "picker": {
                            "allowInputToggle": true,
                            "maxDate": new Date(),
                            "viewMode": "decades",
                            "locale": "es",
                            "widgetPositioning": {
                                "vertical":"bottom"
                            }
                        }
                    },
                    "lugar_nacimiento": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    },
                    "tipo_identificacion": {
                        "fieldClass": "alpaca-datable-form-control-minwidth-250",
                        "events": {
                            "ready": function () {
                                $(this.control).parent().removeClass('col-sm-9').addClass('col-sm-12');
                            }
                        }
                    }
                }
            }
        }
    }
};