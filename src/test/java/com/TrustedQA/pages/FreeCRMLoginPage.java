package com.TrustedQA.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.TrustedQA.utils.BaseClass;


public class FreeCRMLoginPage extends BaseClass {

	@FindBy(xpath="//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")
	public WebElement loginBtn;
	
	@FindBy(xpath="//input[@placeholder='E-mail address']")
	public WebElement emailID;
		
	@FindBy(xpath="//input[@placeholder='Password']")
	public WebElement password;
	
	@FindBy(xpath="//div[@class='ui fluid large blue submit button']")
	public WebElement login;
	
	@FindBy(xpath="//span[@class='user-display']")
	public WebElement verification;
	
	
	public FreeCRMLoginPage() {
		PageFactory.initElements(driver, this);
	}
}

	
	

