
<%@page import="java.util.Iterator"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="java.util.Map"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="com.frmejia.backend.manager.UsuarioManager"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html lang="en">
    <head>
        <%
            session = request.getSession(false);
            String params = "";
            if (request.getParameter("source") != null) {
                params += (params.isEmpty() ? "?" : "&") + "source=" + request.getParameter("source").toString();
            } else if (request.getParameter("secondlogin") != null) {
                params += (params.isEmpty() ? "?" : "&") + "secondlogin=" + request.getParameter("secondlogin").toString();
            }

            if (session.getAttribute("user") != null) {
                String urlParams = "";
                Map parametros = new LinkedHashMap(request.getParameterMap());

                if (parametros.size() > 0) {
                    Iterator itr = parametros.entrySet().iterator();
                    while (itr.hasNext()) {
                        Map.Entry e = (Map.Entry) itr.next();
                        urlParams += (urlParams.isEmpty() ? "?" : "&") + e.getKey().toString() + "=" + ((String[]) e.getValue())[0];
                    }
                }
                session.invalidate();
                response.sendRedirect("./" + urlParams);
            } else {
                response.sendRedirect("login.jsp" + params);
            }
        %>

    </head>
</body>
</html>