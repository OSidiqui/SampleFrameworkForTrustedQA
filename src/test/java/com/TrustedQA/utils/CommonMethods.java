package com.TrustedQA.utils;

import java.util.List;

import org.junit.internal.runners.model.EachTestNotifier;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonMethods extends BaseClass {

	public static void enterValue(WebElement element, String value) {
		// element.clear();
		element.sendKeys(value);
	}

	public static WebElement waiting(WebElement element) {
		WebDriverWait wait = new WebDriverWait(driver, 30);
		return wait.until(ExpectedConditions.elementToBeClickable(element));
	}

	public static void click(WebElement element) {
		WebElement elm = waiting(element);
		elm.click();
	}

	public static void selectValue(WebElement element, String visibleText) {
		Select select = new Select(element);
		select.selectByVisibleText(visibleText);
	}

	public static void clickLink(WebElement element, String linkText) {
		driver.findElement(By.linkText(linkText)).click();
	}

	
	public static void verfication(WebElement element,String name, String xpath){
		List<WebElement> customers = driver.findElements(By.xpath(xpath));
		for (WebElement customer : customers) {
			String value = customer.getText();
			if (value.equalsIgnoreCase(name)){
				System.out.println("THIS IS PROOF OF:  "+ value);
			}
		}
	}

}
