/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.frmejia.backend.util;

/**
 *
 * @author frmejia
 */
import java.util.Date;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class TestJob implements Job {

    @Override
    public void execute(final JobExecutionContext ctx)
            throws JobExecutionException {

        System.out.println("Executing Job " + (new Date()));

    }

}
