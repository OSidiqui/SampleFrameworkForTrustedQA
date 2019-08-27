package com.TrustedQA.stepDefinitions;

import org.openqa.selenium.By;

import com.TrustedQA.pages.FreeCRMLoginPage;
import com.TrustedQA.utils.BaseClass;
import com.TrustedQA.utils.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FreeCRMloginStepDef extends BaseClass{
	FreeCRMLoginPage loginPage = new FreeCRMLoginPage();
	
	@When("^I click on login Button$")
	public void i_click_on_login_Button() throws Throwable {
		CommonMethods.click(loginPage.loginBtn);
	   	}

	@When("^I enter valid email address$")
	public void i_enter_valid_email_address() throws Throwable {
	 CommonMethods.enterValue(loginPage.emailID, prop.getProperty("email"));
	}

	@When("^I enter valid password$")
	public void i_enter_valid_password() throws Throwable {
	   CommonMethods.enterValue(loginPage.password, prop.getProperty("password"));
	}

	@When("^I click on login$")
	public void i_click_on_login() throws Throwable {
	
		CommonMethods.click(loginPage.login);
	}

	@Then("^I successfully sign into the freeCRM page$")
	public void i_successfully_sign_into_the_freeCRM_page() throws Throwable {

		System.out.println(loginPage.verification.isDisplayed());
	}

}
