package com.TrustedQA.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features/Login.feature" }, 
        glue = {"com/TrustedQA/stepDefinitions" },plugin = { "pretty", "html:test-output" }
        , monochrome = true , tags = {}, dryRun = false)

public class TestRunner {

}
