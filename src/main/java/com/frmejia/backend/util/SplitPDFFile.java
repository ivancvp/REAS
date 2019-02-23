/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.util;

/**
 *
 * @author user
 */
import java.io.FileOutputStream;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.pdf.PdfCopy;
import com.lowagie.text.pdf.PdfImportedPage;
import com.lowagie.text.pdf.PdfReader;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class SplitPDFFile {

    /**
     * @param args
     */
    public static void main(String[] args) {

        String inFile = "C:\\tmp\\2014-Q21-01069.pdf";
        List<Integer> steps = new ArrayList<>(Arrays.asList(2, 8, 15, 35, 60, 80));

        System.out.println(splitFile(inFile, steps));

        /*
        try {
            //String inFile = args[0].toLowerCase();
            
            System.out.println("Reading " + inFile);
            PdfReader reader = new PdfReader(inFile);
            int n = reader.getNumberOfPages();
            System.out.println("Number of pages : " + n);
            int i = 0;
            while (i < n) {
                String outFile = inFile.substring(0, inFile.indexOf(".pdf"))
                        + "-" + String.format("%03d", i + 1) + ".pdf";
                System.out.println("Writing " + outFile);
                Document document = new Document(reader.getPageSizeWithRotation(1));
                PdfCopy writer = new PdfCopy(document, new FileOutputStream(outFile));
                document.open();
                PdfImportedPage page = writer.getImportedPage(reader, ++i);
                writer.addPage(page);
                document.close();
                writer.close();
            }
             
        } catch (Exception e) {
            e.printStackTrace();
        }
         */

 /* example :
            java SplitPDFFile d:\temp\x\tx.pdf

            Reading d:\temp\x\tx.pdf
            Number of pages : 3
            Writing d:\temp\x\tx-001.pdf
            Writing d:\temp\x\tx-002.pdf
            Writing d:\temp\x\tx-003.pdf
         */
    }

    public static List<String> splitFile(String file, List<Integer> intervals) {

        try {
            List<String> out = new ArrayList<>();
            PdfReader reader = new PdfReader(file);
            int n = reader.getNumberOfPages();

            if ((intervals.get(intervals.size() - 1) < n)) {
                intervals.add(n);
            }

            for (Integer i = 0; i < intervals.size(); i++) {

                Integer start = (i > 0 ? intervals.get(i - 1) + 1 : 1);
                Integer end = (intervals.get(i) <= n ? intervals.get(i) : n);
                String outFile = file.substring(0, file.indexOf(".pdf"))
                        + "_" + String.format("%03d", start) + "-" + String.format("%03d", end) + ".pdf";

                Document document = new Document(reader.getPageSizeWithRotation(1));
                //FileOutputStream outString = new FileOutputStream(outFile);
                ByteArrayOutputStream outStream = new ByteArrayOutputStream();
                PdfCopy writer = new PdfCopy(document, outStream);
                document.open();

                for (Integer p = start; p <= end; p++) {
                    PdfImportedPage page = writer.getImportedPage(reader, p);
                    writer.addPage(page);
                }
                document.close();
                writer.close();

                try {
                    String zipOutFile = file.substring(0, file.indexOf(".pdf"))
                            + "_" + String.format("%03d", start) + "-" + String.format("%03d", end) + ".zip";

                    ZipEntry entry = new ZipEntry(String.format("%03d", start) + "-" + String.format("%03d", end) + ".pdf");
                    FileOutputStream dest = new FileOutputStream(zipOutFile);
                    ZipOutputStream o = new ZipOutputStream(new BufferedOutputStream(dest));
                    o.putNextEntry(entry);
                    o.write(outStream.toByteArray());
                    /*int count;
                    while ((count = content.read(data, 0, 2048)) != -1) {
                        o.write(data, 0, count);
                    }
                    content.close();
                    */
                    outStream.close();
                    o.close();

                } catch (IOException e) {
                    System.out.println("Se produjo el error : " + e.toString());
                }

                out.add(outFile);
            }
            return out;
        } catch (IOException ex) {
            Logger.getLogger(SplitPDFFile.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        } catch (DocumentException ex) {
            Logger.getLogger(SplitPDFFile.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
}
