/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.trelta.commons.web;

import java.io.File;
import java.io.InputStream;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;

import org.apache.commons.io.FilenameUtils;

/**
 * Cache Buster which appends the last modified time of a file to it's name and
 * generates the appropriate tag which can then be included in a jsp
 *
 * @author Varun Achar
 * @version 1.0
 */
public class CacheBuster {

    /**
     * Generate the tag that should be added to the jsp using the last modified
     * time of the file. This will bust the cache in case the file is changed
     *
     * @param path The path to the file starting from the document root, i.e.
     * the path that is used normally in a tag.
     * @param type The type of file to build. Possible values are <b>js</b> and
     * <b>css</b>
     * @return The tag to include in the jsp
     */
    public static String bust(String realPath, String path, String type) {
        if (path.isEmpty()) {
            throw new IllegalArgumentException("path is invalid. Value passed was : " + String.valueOf(path));
        }

        if (type.isEmpty() || ((!type.equalsIgnoreCase("js")) && (!type.equalsIgnoreCase("css")))) {
            throw new IllegalArgumentException("type is invalid. Value passed was : " + String.valueOf(type));
        }

        File file = new File(realPath + path);
        //String extensionLess = FilenameUtils.removeExtension(path);
        if (type.equalsIgnoreCase("js")) {
            return buildScript(path + "?v=" + file.lastModified());
        }
        return buildStyle(path + "?v=" + file.lastModified());

    }

    private static String buildScript(String path) {
        return "<script type=\"text/javascript\" src=\"" + path + "\"></script>";
    }

    private static String buildStyle(String path) {
        return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + path + "\" media=\"screen\"></link>";
    }
}
