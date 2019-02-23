<%-- 
    Document   : index
    Created on : 17/05/2017, 07:42:26 PM
    Author     : Fabian
--%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.io.InputStreamReader"%>
<%@page import="java.io.BufferedReader"%>
<%@page import="java.io.InputStream"%>
<%@page import="java.io.DataOutputStream"%>
<%@page import="java.net.URL"%>
<%@page import="java.net.HttpURLConnection"%>
<%@page import="java.util.Map"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta name="application-name" content="cmv">
        <meta name="description" content="CMV - The Configurable Map Viewer. Community supported open source mapping framework. Works with the Esri JavaScript API, ArcGIS Server, ArcGIS Online and more. Make it your own!">
        <meta name="author" content="cmv.io">


        <title>Reasentamientos | Beneficiarios</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <!--<link href="font-awesome/css/font-awesome.css" rel="stylesheet">-->

        <!-- Text spinners style -->
        <link href="css/plugins/textSpinners/spinners.css" rel="stylesheet">

        <link href="css/animate.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="https://js.arcgis.com/3.21compact/esri/css/esri.css">
        <link rel="stylesheet" type="text/css" href="js/plugins/viewer/css/theme/flat/flat.css">
        <link rel="stylesheet" type="text/css" href="js/plugins/viewer/css/cmv-theme-overrides.css">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="js/plugins/viewer/css/main.css">


        <script type="text/javascript">
            function insertParam(key, value) {
                key = encodeURI(key);
                value = encodeURI(value);

                var kvp = document.location.search.substr(1).split('&');

                var i = kvp.length;
                var x;
                while (i--)
                {
                    x = kvp[i].split('=');

                    if (x[0] === key)
                    {
                        x[1] = value;
                        kvp[i] = x.join('=');
                        break;
                    }
                }

                if (i < 0) {
                    kvp[kvp.length] = [key, value].join('=');
                }

                //this will reload the page, it's likely better to store this until finished
                document.location.search = kvp.join('&');
            }

            function getURLParams(k) {
                var p = {};
                location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                    p[k] = v;
                });
                return k ? p[k] : p;
            }

            function setToken(token) {
                if (!getURLParams("token") && token && token.token) {
                    insertParam("token", token.token);
                }
            }


        </script>
    </head>
    <body class="skin-1 cmv flat">
        <%
            session = request.getSession(false);
            if (session.getAttribute("user") == null) {

                String uri = request.getRequestURI();
                String pageName = uri.substring(uri.lastIndexOf("/") + 1);
                String urlParams = "?source=" + pageName;

                Map parametros = new LinkedHashMap(request.getParameterMap());

                if (parametros.size() > 0) {
                    Iterator itr = parametros.entrySet().iterator();
                    while (itr.hasNext()) {
                        Map.Entry e = (Map.Entry) itr.next();
                        urlParams += "&" + e.getKey().toString() + "=" + ((String[]) e.getValue())[0];
                    }
                }
                response.sendRedirect("login.jsp" + urlParams);
            }
            if (request.getParameter("token") == null) {
                String tokenURL = "http://192.168.2.98:6080/arcgis/tokens/generateToken";
                String tokenUser = "sig_reas";
                String tokenPass = "S1g_R34s!";
                
                HttpURLConnection connection = null;
                try {
                    String urlParameters = "f=json&username=" + tokenUser + "&password=" + tokenPass + "&client=referer&referer=" + request.getRequestURL() + "&expiration=60";
                    //Create connection
                    URL url = new URL(tokenURL);
                    connection = (HttpURLConnection) url.openConnection();
                    connection.setRequestMethod("POST");
                    connection.setRequestProperty("Content-Type",
                            "application/x-www-form-urlencoded");

                    connection.setRequestProperty("Content-Length",
                            Integer.toString(urlParameters.getBytes().length));
                    connection.setRequestProperty("Content-Language", "en-US");

                    connection.setUseCaches(false);
                    connection.setDoOutput(true);

                    //Send request
                    DataOutputStream wr = new DataOutputStream(
                            connection.getOutputStream());
                    wr.writeBytes(urlParameters);
                    wr.close();

                    //Get Response  
                    InputStream is = connection.getInputStream();
                    BufferedReader rd = new BufferedReader(new InputStreamReader(is));
                    StringBuilder rsp = new StringBuilder(); // or StringBuffer if Java version 5+
                    String line;
                    while ((line = rd.readLine()) != null) {
                        rsp.append(line);
                        rsp.append('\r');
                    }
                    rd.close();
                    out.print("<script type='text/javascript'>setToken(" + rsp.toString() + ");</script>");
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (connection != null) {
                        connection.disconnect();
                    }
                }
            }

        %>
        <div class="appHeader" style="margin-left: 0px">
            <!--                        <div class="headerLogo">
                                        <img alt="logo" src="images/rocket-logo.png" height="54" />
                                    </div>-->
            <div class="headerTitle col-xs-12" style="margin: 0;padding: 0; background: #f3f3f4;">
                <div class="row border-bottom" style="margin: 0;padding: 0;">
                    <nav class="navbar navbar-static-top" role="navigation" style="margin: 0;padding: 0;">
                        <div class="navbar-header" style="margin: 0;padding: 0; height: 70px; background-color: #23B5E6;">
                            <a href="index.jsp">
                                <img alt="logo" src="css/patterns/logo_bogota.png" height="70" />
                            </a>
                        </div>
                        <div class="navbar-top-links navbar-left" style="margin: 0;padding: 0; height: 70px; background-color: #23B5E6; font-size: 12pt;">
                            <div class="headerLinks">
                                <div id="helpDijit">
                                </div>
                            </div>
                        </div>
                        <ul class="hidden-sm nav navbar-top-links navbar-right ">                                                    
                            <li>
                                <span class="m-r-sm text-muted welcome-message" style="padding-left: 50px">Sistema de Información Geográfica, Reasentamientos | CVP</span>
                            </li>
                            <li class="dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <i class="fa fa-user"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-alerts">
                                    <li>
                                        <span class="m-r-sm text-muted welcome-message">
                                            <%  if (session.getAttribute("user") != null) {
                                                    out.print(((Map<String, Object>) session.getAttribute("info")).get("usuario_nombre"));
                                                }
                                            %>   
                                        </span>
                                    </li>
                                    <li class="divider"></li>
                                    <form>
                                        <li>
                                            <div class="m-r-sm " id="qrcode"></div>
                                            <span class="m-r-sm text-muted welcome-message">
                                                <%  if (session.getAttribute("user") != null) {
                                                        out.print(((Map<String, Object>) session.getAttribute("info")).get("codigo"));
                                                    }
                                                %>   
                                            </span>
                                        </li>
                                    </form>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="login.jsp" style="color: #888;">
                                            <i class="fa fa-sign-out" ></i> Cerrar sesión
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </nav>
                </div>
                <!--                <span id="headerTitleSpan">
                                    Visor geográfico
                                </span>
                                <div id="subHeaderTitleSpan" class="subHeaderTitle">
                                    Reasentamientos
                                </div>-->
            </div>
            <div class="search">
                <div id='geocodeDijit'>
                </div>
            </div>

        </div>
        <script type="text/javascript">
            var s = window.location.search, q = s.match(/locale=([^&]*)/i);
            var locale = (q && q.length > 0) ? q[1] : null;
            window.dojoConfig = {
                locale: locale,
                async: true
            };
        </script>
        <!--[if lt IE 9]>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.3/es5-shim.min.js"></script>
        <![endif]-->
        <script src="https://js.arcgis.com/3.21compact/"></script>
        <script src="js/plugins/viewer/js/config/app.js"></script>

        <script src="js/jquery-3.1.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>


        <script src="js/plugins/qrcodejs/qrcode.min.js "></script>

        <script type="text/javascript">
            <%  if (session.getAttribute("user") != null) {
                    out.print("var qr = '" + ((Map<String, Object>) session.getAttribute("info")).get("codigo") + "';");
                }
            %>
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: qr,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        </script>


    </body>

</html>
