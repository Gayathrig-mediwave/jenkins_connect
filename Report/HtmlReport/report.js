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
  "duration": 7545085800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.scroll_down_to_sign_in()"
});
formatter.result({
  "duration": 48627000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.wait_for_some_seconds()"
});
formatter.result({
  "duration": 2004939600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.click_sign_in_button()"
});
formatter.result({
  "duration": 2512878000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_inputs_the_email_id()"
});
formatter.result({
  "duration": 132798200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_enters_the_password()"
});
formatter.result({
  "duration": 77959100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_clicks_not_robot()"
});
formatter.result({
  "duration": 2047026900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.scroll_to_enter()"
});
formatter.result({
  "duration": 20184200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.wait_to_click_enter()"
});
formatter.result({
  "duration": 1020356700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.user_clicks_enter()"
});
formatter.result({
  "duration": 54076200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefnition.waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal()"
});
formatter.result({
  "duration": 32094822500,
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027192.168.0.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dab26d8ab7578d5ff4e933cb696da80f, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@3b11620a]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MEDIWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49450}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49450/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dab26d8ab7578d5ff4e933cb696da80f\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:362)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\r\n\tat java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:177)\r\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\r\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:497)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:626)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:656)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:612)\r\n\tat com.StepDefnition.StepDefnition.waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal(StepDefnition.java:113)\r\n\tat ???.And waits to navigate to new tab and copies the otp and gets back to the portal(src/test/java/com/FeatureFile/AcaciumFeatureFile.feature:34)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027192.168.0.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:303)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:40)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\t\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\t\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:626)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:656)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:612)\r\n\t\tat com.StepDefnition.StepDefnition.waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal(StepDefnition.java:113)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\t\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\t\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\t\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\t\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\t\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\t\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\t\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\t\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\t\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\t\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\t\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\t\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\t\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:358)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:154)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:169)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.accept(ForEachOps.java:183)\r\n\tat java.base/java.util.stream.ReferencePipeline$2$1.accept(ReferencePipeline.java:177)\r\n\tat java.base/java.util.Iterator.forEachRemaining(Iterator.java:133)\r\n\tat java.base/java.util.Spliterators$IteratorSpliterator.forEachRemaining(Spliterators.java:1801)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp.evaluateSequential(ForEachOps.java:150)\r\n\tat java.base/java.util.stream.ForEachOps$ForEachOp$OfRef.evaluateSequential(ForEachOps.java:173)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEach(ReferencePipeline.java:497)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$23(JsonOutput.java:169)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:182)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:68)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$25(JsonOutput.java:177)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:287)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:278)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:259)\r\n\tat org.openqa.selenium.remote.codec.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:127)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:172)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:626)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:656)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:612)\r\n\tat com.StepDefnition.StepDefnition.waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal(StepDefnition.java:113)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html[1]/body[1]/b[1]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027192.168.0.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dab26d8ab7578d5ff4e933cb696da80f, findElement {using\u003dxpath, value\u003d/html[1]/body[1]/b[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MEDIWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49450}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49450/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dab26d8ab7578d5ff4e933cb696da80f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:206)\r\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:157)\r\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:73)\r\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:82)\r\n\t... 78 more\r\n",
  "status": "failed"
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
  "location": "StepDefnition.user_clicks_verify()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Book and rearrange initial assessment",
  "description": "",
  "id": "acacium-portal;book-and-rearrange-initial-assessment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@BookAndRearrangeInitialAssessment"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "scroll down to book assessment cta",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click the book assessment button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click yes after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click ok after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "scroll down to calendar after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "click previous and next dates to show all available dates",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on a date randomly from a list of dates available after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on next after few seconds",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "choose a time slot randomly from the available list after few seconds",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click on view appointments after some time",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "click on rearrange cta",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click on yes",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "scroll down to calendar again after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click previous and next dates again to show all available dates",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on a date randomly from a list of dates available again after waiting for some seconds",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click on next after few seconds again",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "choose a time slot randomly from the available list  againafter few seconds",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on view appointments after some time again",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "click on logo",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "scroll to care progress",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "logout",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefnition.scroll_down_to_book_assessment_cta()"
});
formatter.result({
  "duration": 23071637500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[normalize-space()\u003d\u0027Book assessment\u0027])[1]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027GAYATHRI-G\u0027, ip: \u0027192.168.0.124\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [dab26d8ab7578d5ff4e933cb696da80f, findElement {using\u003dxpath, value\u003d(//a[normalize-space()\u003d\u0027Book assessment\u0027])[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MEDIWA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49450}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49450/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dab26d8ab7578d5ff4e933cb696da80f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\r\n\tat com.Base.Base_Class.jsScrollDownElementFalse(Base_Class.java:100)\r\n\tat com.StepDefnition.StepDefnition.scroll_down_to_book_assessment_cta(StepDefnition.java:148)\r\n\tat ???.When scroll down to book assessment cta(src/test/java/com/FeatureFile/AcaciumFeatureFile.feature:41)\r\n",
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
});