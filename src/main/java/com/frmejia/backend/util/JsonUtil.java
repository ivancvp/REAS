package com.frmejia.backend.util;

import java.sql.SQLException;
import json.JSONArray;
import json.JSONException;
import json.JSONObject;
import org.postgresql.util.PGobject;

/**
 * Clase util para convertir objetos a json
 *
 * @author Leonardo Cardona : leocardonapiedrahita@gmail.com
 * @author Maicol Camargo : mfcamargoh@gmail.com
 */
public class JsonUtil {

    /**
     * Método que permite convertir un DefaultTableModel a un objeto Json
     *
     * @param rs <code> DefaultTableModel </code>
     * @return <code> JSONArray </code>pppppppppppppppppppppppppp
     */
    public static JSONArray convertResultSetToJSON(java.sql.ResultSet rs) {

        JSONArray json = new JSONArray();

        try {

            java.sql.ResultSetMetaData rsmd = rs.getMetaData();

            while (rs.next()) {
                int numColumns = rsmd.getColumnCount();
                JSONObject obj = new JSONObject();

                for (int i = 1; i < numColumns + 1; i++) {

                    String column_name = rsmd.getColumnName(i);
                    try {
                        switch (rsmd.getColumnType(i)) {
                            case java.sql.Types.ARRAY:
                                obj.put(column_name, rs.getArray(column_name));
                                break;
                            case java.sql.Types.BIGINT:
                                obj.put(column_name, rs.getLong(column_name));
                                break;
                            case java.sql.Types.BOOLEAN:
                                obj.put(column_name, rs.getBoolean(column_name));
                                break;
                            case java.sql.Types.BLOB:
                                obj.put(column_name, rs.getBlob(column_name));
                                break;
                            case java.sql.Types.DOUBLE:
                                obj.put(column_name, rs.getDouble(column_name));
                                break;
                            case java.sql.Types.FLOAT:
                                obj.put(column_name, rs.getFloat(column_name));
                                break;
                            case java.sql.Types.INTEGER:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.NVARCHAR:
                                obj.put(column_name, rs.getNString(column_name));
                                break;
                            case java.sql.Types.VARCHAR:
                                obj.put(column_name, rs.getString(column_name));
                                break;
                            case java.sql.Types.TINYINT:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.SMALLINT:
                                obj.put(column_name, rs.getInt(column_name));
                                break;
                            case java.sql.Types.DATE:
                                obj.put(column_name, rs.getDate(column_name));
                                break;
                            case java.sql.Types.TIMESTAMP:
                                obj.put(column_name, rs.getTimestamp(column_name));
                                break;
                            case java.sql.Types.OTHER:
                                Object o = rs.getObject(column_name);
                                if (o instanceof PGobject) {
                                    if (((PGobject) o).getType().equals("json")) {
                                        String jsonString = ((PGobject) o).getValue();
                                        if (jsonString.startsWith("[")) {
                                            JSONArray j = new JSONArray(jsonString);
                                            obj.put(column_name, j);
                                        } else if (jsonString.startsWith("{")) {
                                            JSONObject j = new JSONObject(jsonString);
                                            obj.put(column_name, j);
                                        }
                                    }
                                } else {
                                    obj.put(column_name, rs.getObject(column_name));
                                }   break;
                            case java.sql.Types.JAVA_OBJECT:
                                obj.put(column_name, rs.getObject(column_name));
                                break;
                            default:
                                obj.put(column_name, rs.getObject(column_name));
                                break;
                        }
                    } catch (SQLException | JSONException ex) {
                        System.err.println("Error en la conversion de resultset a json: " + ex.getMessage());
                    }

                }//end foreach
                json.put(obj);

            }//end while

        } catch (SQLException e) {
            System.err.println("Error en la conversion de resultset a json: " + e.getMessage());
        }
        // TODO Auto-generated catch block

        return json;
    }

}
