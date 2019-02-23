/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.util;

import com.google.zxing.*;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.common.HybridBinarizer;
import javax.imageio.ImageIO;
import java.io.File;
import java.awt.image.BufferedImage;
import java.io.IOException;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;

/**
 *
 * @author user
 */
public class ConvertPDFPagesToJPEGImage {

    private static String decodeQRCode(File qrCodeimage) throws IOException {
        BufferedImage bufferedImage = ImageIO.read(qrCodeimage);
        LuminanceSource source = new BufferedImageLuminanceSource(bufferedImage);
        BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(source));

        try {
            Result result = new MultiFormatReader().decode(bitmap);
            return result.getText();
        } catch (NotFoundException e) {
            System.out.println("There is no QR code in the image");
            return null;
        }
    }

    public static void main(String[] args) {
        try {
            String pdfFilename = "C:\\tmp\\images.pdf";
            PDDocument document = PDDocument.load(new File(pdfFilename));
            PDFRenderer pdfRenderer = new PDFRenderer(document);
            for (int page = 0; page < document.getNumberOfPages(); ++page) {

                BufferedImage image = pdfRenderer.renderImageWithDPI(page, 300);

                LuminanceSource source = new BufferedImageLuminanceSource(image);
                BinaryBitmap bitmap = new BinaryBitmap(new HybridBinarizer(source));

                try {
                    Result result = new MultiFormatReader().decode(bitmap);
                    System.out.println("Page: " + (page + 1) + " - found text: " + result.getText());
                } catch (NotFoundException e) {
                    System.out.println("Page: " + (page + 1) + " - There is no QR code in the image");
                }

                //ImageIO.write(image, "PNG", new File("C:\\tmp\\2014-Q21-01069_" + page + ".png"));
            }
            document.close();
            /*
            File file = new File("C:\\tmp\\Converted_Image1.jpg");
            String decodedText = decodeQRCode(file);

            if (decodedText == null) {
                System.out.println("No QR Code found in the image");
            } else {
                System.out.println("Decoded text = " + decodedText);
            }
             */
        } catch (IOException e) {
            System.out.println("Could not decode QR Code, IOException :: " + e.getMessage());
        }
    }

}
