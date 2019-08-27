$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Olkar Sidiqui"
    }
  ],
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21239858964,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I click on login Button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfully sign into the freeCRM page",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCRMloginStepDef.i_click_on_login_Button()"
});
formatter.result({
  "duration": 8645479873,
  "status": "passed"
});
formatter.match({
  "location": "FreeCRMloginStepDef.i_enter_valid_email_address()"
});
formatter.result({
  "duration": 362010442,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.100)\n  (Driver info: chromedriver\u003d2.39.562718 (9a2698cba08cf5a471a29d30c8b3e12becabb0e9),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-54U4NOG\u0027, ip: \u0027192.168.229.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.39.562718 (9a2698cba08cf5..., userDataDir: C:\\Users\\user\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.100, webStorageEnabled: true}\nSession ID: dd88fed4814334330db508201812acde\n*** Element info: {Using\u003dxpath, value\u003d//input[@placeholder\u003d\u0027E-mail address\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.TrustedQA.utils.CommonMethods.enterValue(CommonMethods.java:16)\r\n\tat com.TrustedQA.stepDefinitions.FreeCRMloginStepDef.i_enter_valid_email_address(FreeCRMloginStepDef.java:22)\r\n\tat ✽.And I enter valid email address(src/test/resources/features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FreeCRMloginStepDef.i_enter_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCRMloginStepDef.i_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCRMloginStepDef.i_successfully_sign_into_the_freeCRM_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 946797116,
  "status": "passed"
});
});