$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/FeatureFile/AcaciumFeatureFile.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: gayathridevi_g@mindwaveventures.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Acacium Portal",
  "description": "",
  "id": "acacium-portal",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@AcaciumPortal"
    }
  ]
});
formatter.scenario({
  "line": 23,
  "name": "Sign in",
  "description": "",
  "id": "acacium-portal;sign-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Signin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Pass the Url",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "scroll down to sign in",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "wait for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User inputs the email id",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user enters the password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user clicks not robot",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "scroll to enter",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "wait to click enter",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user clicks enter",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "waits to navigate to new tab and copies the otp and gets back to the portal",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user should paste code using robo class",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user allows delay to verify",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user clicks verify",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefnition.pass_the_Url()"
});
formatter.result({
  "duration": 17084148900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.scroll_down_to_sign_in()"
});
formatter.result({
  "duration": 248773099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.wait_for_some_seconds()"
});
formatter.result({
  "duration": 2040930001,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.click_sign_in_button()"
});
formatter.result({
  "duration": 4765020900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_inputs_the_email_id()"
});
formatter.result({
  "duration": 3458699700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_enters_the_password()"
});fformatter.result({
  "duration": 2503859900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_clicks_not_robot()"
});formatter.result({
  "duration": 25060857100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.scroll_to_enter()"
});
formatter.result({
  "duration": 129305300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.wait_to_click_enter()"
});
formatter.result({
  "duration": 1002354100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_clicks_enter()"
});
formatter.result({
  "duration": 1629941600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (759, 753)\n  (Session info: chrome\u003d108.0.5359.99)\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e885614d9ac08470236b6b0ab66ea233, clickElement {id\u003dd0966fbf-3d73-4723-a088-c1f2521caf87}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MEDIWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59021}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59021/devtoo..., se:cdpVersion: 108.0.5359.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (e885614d9ac08470236b6b0ab66ea233)] -\u003e xpath: //button[@id\u003d\u0027loginBtn\u0027]]\nSession ID: e885614d9ac08470236b6b0ab66ea233\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat com.Base.Base_Class.clickOnElement(Base_Class.java:34)\r\n\tat com.StepDefnition.StepDefnition.user_clicks_enter(StepDefnition.java:82)\r\n\tat ✽.And user clicks enter(src/test/java/com/FeatureFile/AcaciumFeatureFile.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefnition.waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.user_should_paste_code_using_robo_class()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.user_allows_delay_to_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steformatter.result({
  "duration": 23114600401,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[normalize-space()\u003d\u0027Book assessment\u0027])[1]\"}\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.4.0\u0027, revision: \u0027e5c75ed026a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9e20083d0f3b985f0ae6b22e56f8d5f3, findElement {using\u003dxpath, value\u003d(//a[normalize-space()\u003d\u0027Book assessment\u0027])[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MEDIWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58977}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58977/devtoo..., se:cdpVersion: 108.0.5359.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9e20083d0f3b985f0ae6b22e56f8d5f3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:547)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:478)\r\n\tat com.Base.Base_Class.jsScrollDownElementFalse(Base_Class.java:100)\r\n\tat com.StepDefnition.StepDefnition.scroll_down_to_book_assessment_cta(StepDefnition.java:148)\r\n\tat ✽.When scroll down to book assessment cta(src/test/java/com/FeatureFile/AcaciumFeatureFile.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefnition.click_the_book_assessment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_yes_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_ok_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.scroll_down_to_calendar_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_previous_and_next_dates_to_show_all_available_dates()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_a_date_randomly_from_a_list_of_dates_available_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_next_after_few_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.choose_a_time_slot_randomly_from_the_available_list_after_few_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_view_appointments_after_some_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_rearrange_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_yes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.scroll_down_to_calendar_again_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_previous_and_next_dates_again_to_show_all_available_dates()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_a_date_randomly_from_a_list_of_dates_available_again_after_waiting_for_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_next_after_few_seconds_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.choose_a_time_slot_randomly_from_the_available_list_againafter_few_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_view_appointments_after_some_time_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.scroll_to_care_progress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.logout()"
});
formatter.result({
  "status": "skipped"
});
});or_some_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_next_after_few_seconds_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.choose_a_time_slot_randomly_from_the_available_list_againafter_few_seconds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_view_appointments_after_some_time_again()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.click_on_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.scroll_to_care_progress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefnition.logout()"
});
formatter.result({
  "status": "skipped"
});
});