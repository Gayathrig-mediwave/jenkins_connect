package com.StepDefnition;

import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.Base.Base_Class;
import com.Runner.Runner;
import com.sdp.Singleton;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author Gayathri Devi G
 *
 */
public class StepDefnition extends Base_Class {
	public static WebDriver driver = Runner.driver;
	public static Singleton sl = new Singleton(driver);

	@Given("^Pass the Url$")
	public void pass_the_Url() throws Throwable {
		geturl("https://testing.acacium.mindwave.site/");
	}

	@When("^scroll down to sign in$")
	public void scroll_down_to_sign_in() throws Throwable {
		jsScrollDownElement(sl.getMain().getSign_in());
	}

	@When("^wait for some seconds$")
	public void wait_for_some_seconds() throws Throwable {
		Thread.sleep(2000);
	}

	@When("^click sign in button$")
	public void click_sign_in_button() throws Throwable {
		clickOnElement(sl.getMain().getSign_in());	    
	}

	@When("^User inputs the email id$")
	public void user_inputs_the_email_id() throws Throwable {
		Inputvalues(sl.getLogin().getEmail_address(), "juneprune@mailinator.com");
	}

	@When("^user enters the password$")
	public void user_enters_the_password() throws Throwable {
		Inputvalues(sl.getLogin().getPassword(), "Test@123");
	}

	@When("^user clicks not robot$")
	public void user_clicks_not_robot() throws Throwable {
		Thread.sleep(2000);
		clickOnElement(sl.getLogin().getNot_robot());
	}

	@When("^scroll to enter$")
	public void scroll_to_enter() throws Throwable {
		jsScrollDownElement(sl.getLogin().getEnter());
	}

	@When("^wait to click enter$")
	public void wait_to_click_enter() throws Throwable {
		Thread.sleep(1000);
	}
	
	@When("^user clicks enter$")
	public void user_clicks_enter() throws Throwable {
		clickOnElement(sl.getLogin().getEnter());
	}
	
	@When("^waits to navigate to new tab and copies the otp and gets back to the portal$")
	public void waits_to_navigate_to_new_tab_and_copies_the_otp_and_gets_back_to_the_portal() throws Throwable {
		Thread.sleep(2000);
		Robot rb = new Robot();
		rb.keyPress(KeyEvent.VK_CONTROL);
		rb.keyPress(KeyEvent.VK_T);
		rb.delay(1000);
		rb.keyRelease(KeyEvent.VK_CONTROL);
		rb.keyRelease(KeyEvent.VK_T);
		ArrayList<String> tabs2 = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs2.get(1));
		driver.get("https://www.mailinator.com/v4/public/inboxes.jsp?trialshow=true&to=Julietkandru");
		Thread.sleep(2000);
		//WebDriverWait wait = new WebDriverWait(driver, 50);
		//wait.until(ExpectedConditions.elementToBeClickable(sl.getLogin().getClose_dialog()));
		clickOnElement(sl.getLogin().getClose_dialog());
		clickOnElement(sl.getLogin().getSearch_mail());
		Actions a1 = new Actions(driver);
		a1.keyDown(Keys.CONTROL);
		a1.sendKeys("a");
		a1.keyUp(Keys.CONTROL);
		a1.perform();		
		Inputvalues(sl.getLogin().getSearch_mail(), "juneprune@mailinator.com");
		clickOnElement(sl.getLogin().getSearch_go());
		Thread.sleep(2000);
		clickOnElement(sl.getLogin().getClick_code());
		driver.switchTo().frame("html_msg_body");
		Actions a = new Actions(driver);
		a.doubleClick(sl.getLogin().getVerify_code()).perform();
		driver.switchTo().defaultContent();
		Actions ac = new Actions(driver);
		ac.keyDown(Keys.CONTROL);
		ac.sendKeys("c");
		ac.keyUp(Keys.CONTROL);
		ac.perform();
		driver.switchTo().window(tabs2.get(0));
	}

	@When("^user should paste code using robo class$")
	public void user_should_paste_code_using_robo_class() throws Throwable {
		clickOnElement(sl.getLogin().getPaste_code());
		Actions act = new Actions(driver);
		act.keyDown(Keys.CONTROL);
		act.sendKeys("v");
		act.keyUp(Keys.CONTROL);
		act.perform();	    
	}

	@When("^user allows delay to verify$")
	public void user_allows_delay_to_verify() throws Throwable {
	   
	    
	}

	@Then("^user clicks verify$")
	public void user_clicks_verify() throws Throwable {
		clickOnElement(sl.getLogin().getVerification());
		Thread.sleep(5000);    
	}
	
	@When("^scroll down to book assessment cta$")
	public void scroll_down_to_book_assessment_cta() throws Throwable {
		Thread.sleep(3000);
		jsScrollDownElementFalse(sl.getDashboard().getBook_assessment());
		Thread.sleep(2000);
	}

	@When("^click the book assessment button$")
	public void click_the_book_assessment_button() throws Throwable {
		clickOnElement(sl.getDashboard().getBook_assessment());
		Thread.sleep(2000);
	}

	@When("^click yes after waiting for some seconds$")
	public void click_yes_after_waiting_for_some_seconds() throws Throwable {
		clickOnElement(sl.getAssessmentCalendar().getYes());
		Thread.sleep(2000);
	}

	@When("^click ok after waiting for some seconds$")
	public void click_ok_after_waiting_for_some_seconds() throws Throwable {
		clickOnElement(sl.getAssessmentCalendar().getOk());
		Thread.sleep(2000);
	}


@When("^scroll down to calendar after waiting for some seconds$")
public void scroll_down_to_calendar_after_waiting_for_some_seconds() throws Throwable {
	jsScrollDownElementFalse(sl.getAssessmentCalendar().getGo_calendar());
}

@When("^click previous and next dates to show all available dates$")
public void click_previous_and_next_dates_to_show_all_available_dates() throws Throwable {
	WebElement nxt_button = sl.getAssessmentCalendar().getNext_date();
	String nxt_classes = nxt_button.getAttribute("class");
	boolean next_date_disabled = nxt_classes.contains("disabled");
		
	while(next_date_disabled == false) {
		Thread.sleep(2000);
		clickOnElement(sl.getAssessmentCalendar().getNext_date());
		break;
	}
	WebElement prev_button = sl.getAssessmentCalendar().getPrevious_date();
	String prev_classes = prev_button.getAttribute("class");
	boolean prev_date_disabled = prev_classes.contains("disabled");		
	
	while(prev_date_disabled == false ) {
		Thread.sleep(2000);
		clickOnElement(sl.getAssessmentCalendar().getPrevious_date());
		break;
	}	
}

@When("^click on a date randomly from a list of dates available after waiting for some seconds$")
public void click_on_a_date_randomly_from_a_list_of_dates_available_after_waiting_for_some_seconds() throws Throwable {
	Thread.sleep(2000);	
	WebElement table = driver.findElement(By.xpath("//table[@class='ui-datepicker-calendar']"));
	List<WebElement> rows = table.findElements(By.xpath("//td[@title='Available']"));
	int max_elements = rows.size();
	if (max_elements > 0) {
		Random random = new Random();
		int randomProduct = random.nextInt(max_elements);
		System.out.println("---------");
		System.out.println(randomProduct);
		System.out.println("---------");
		rows.get(randomProduct).click();
		Thread.sleep(2000);
		screenshot("date.png");
		Thread.sleep(2000);
	} else {
		clickOnElement(sl.getAssessmentCalendar().getNext_date());
		System.err.println("No dates available");
	}
}

@When("^click on next after few seconds$")
public void click_on_next_after_few_seconds() throws Throwable {
	jsScrollDownElement(sl.getAssessmentCalendar().getNext());
	Thread.sleep(2000);
	clickOnElement(sl.getAssessmentCalendar().getNext());
	Thread.sleep(2000);
}

@When("^choose a time slot randomly from the available list after few seconds$")
public void choose_a_time_slot_randomly_from_the_available_list_after_few_seconds() throws Throwable {
	WebElement slot_table = driver.findElement(By.xpath("(//div[@id='available-slots-container'])[1]"));
	List<WebElement> slot_rows = slot_table.findElements(By.xpath("//input[@name='time-select-radio']"));
	int max_slots = slot_rows.size();
	if (max_slots > 0) {
		Random rand = new Random();
		int randomSlot = rand.nextInt(max_slots);
		System.out.println("---------");
		System.out.println(randomSlot);
		System.out.println("---------");
		jsScrollDownElementFalse(slot_rows.get(randomSlot));
		Thread.sleep(2000);
		slot_rows.get(randomSlot).click();
		screenshot("timeslot.png");
	} else {
		System.err.println("No time slots available");
	}
	jsScrollDownElementFalse(sl.getAssessmentTimeSlot().getConfirm());
	Thread.sleep(2000);
	clickOnElement(sl.getAssessmentTimeSlot().getConfirm());
	Thread.sleep(3000);
	screenshot("booked_success.png");
	Thread.sleep(2000);
}

@When("^click on view appointments after some time$")
public void click_on_view_appointments_after_some_time() throws Throwable {
	jsScrollDownElementFalse(sl.getAppointmentBookedSuccessfully().getGo_home());
	Thread.sleep(2000);
	clickOnElement(sl.getAppointmentBookedSuccessfully().getView_appt());
	Thread.sleep(3000);
}

@When("^click on rearrange cta$")
public void click_on_rearrange_cta() throws Throwable {
	jsScrollDownElementFalse(sl.getAppointmentsStatus().getRe_arrange());
	Thread.sleep(1000);
	clickOnElement(sl.getAppointmentsStatus().getRe_arrange());
	Thread.sleep(2000);
}

@When("^click on yes$")
public void click_on_yes() throws Throwable {
	clickOnElement(sl.getAssessmentCalendar().getRearrange_yes());
	Thread.sleep(2000);
}

@When("^scroll down to calendar again after waiting for some seconds$")
public void scroll_down_to_calendar_again_after_waiting_for_some_seconds() throws Throwable {
	jsScrollDownElementFalse(sl.getAssessmentCalendar().getGo_calendar());
	Thread.sleep(2000);
}

@When("^click previous and next dates again to show all available dates$")
public void click_previous_and_next_dates_again_to_show_all_available_dates() throws Throwable {
	WebElement nxt_button = sl.getAssessmentCalendar().getNext_date();
	String nxt_classes = nxt_button.getAttribute("class");
	boolean next_date_disabled = nxt_classes.contains("disabled");
		
	while(next_date_disabled == false) {
		Thread.sleep(2000);
		clickOnElement(sl.getAssessmentCalendar().getNext_date());
		break;
	}
	WebElement prev_button = sl.getAssessmentCalendar().getPrevious_date();
	String prev_classes = prev_button.getAttribute("class");
	boolean prev_date_disabled = prev_classes.contains("disabled");		
	
	while(prev_date_disabled == false ) {
		Thread.sleep(2000);
		clickOnElement(sl.getAssessmentCalendar().getPrevious_date());
		break;
	}		
}

@When("^click on a date randomly from a list of dates available again after waiting for some seconds$")
public void click_on_a_date_randomly_from_a_list_of_dates_available_again_after_waiting_for_some_seconds() throws Throwable {
	WebElement table = driver.findElement(By.xpath("//table[@class='ui-datepicker-calendar']"));
	List<WebElement> rows = table.findElements(By.xpath("//td[@title='Available']"));
	int max_elements = rows.size();
	if (max_elements > 0) {
		Random random = new Random();
		int randomProduct = random.nextInt(max_elements);
		System.out.println("---------");
		System.out.println(randomProduct);
		System.out.println("---------");
		rows.get(randomProduct).click();
		Thread.sleep(2000);
		screenshot("date.png");
		Thread.sleep(2000);
	} else {
		clickOnElement(sl.getAssessmentCalendar().getNext_date());
		System.err.println("No dates available");
	}


}

@When("^click on next after few seconds again$")
public void click_on_next_after_few_seconds_again() throws Throwable {
	jsScrollDownElement(sl.getAssessmentCalendar().getNext());
	Thread.sleep(2000);
	clickOnElement(sl.getAssessmentCalendar().getNext());
	Thread.sleep(2000);
}

@When("^choose a time slot randomly from the available list  againafter few seconds$")
public void choose_a_time_slot_randomly_from_the_available_list_againafter_few_seconds() throws Throwable {
	WebElement slot_table = driver.findElement(By.xpath("(//div[@id='available-slots-container'])[1]"));
	List<WebElement> slot_rows = slot_table.findElements(By.xpath("//input[@name='time-select-radio']"));
	int max_slots = slot_rows.size();
	if (max_slots > 0) {
		Random rand = new Random();
		int randomSlot = rand.nextInt(max_slots);
		System.out.println("---------");
		System.out.println(randomSlot);
		System.out.println("---------");
		jsScrollDownElementFalse(slot_rows.get(randomSlot));
		Thread.sleep(5000);
		slot_rows.get(randomSlot).click();
		screenshot("timeslot.png");
	} else {
		System.err.println("No time slots available");
	}
	Thread.sleep(5000);
	jsScrollDownElementFalse(sl.getAssessmentTimeSlot().getConfirm());
	Thread.sleep(2000);
	clickOnElement(sl.getAssessmentTimeSlot().getConfirm());
	Thread.sleep(3000);
	screenshot("booked_success.png");
	Thread.sleep(2000);
}

@When("^click on view appointments after some time again$")
public void click_on_view_appointments_after_some_time_again() throws Throwable {
	jsScrollDownElementFalse(sl.getAppointmentBookedSuccessfully().getGo_home());
	Thread.sleep(2000);
	clickOnElement(sl.getAppointmentBookedSuccessfully().getView_appt());
	Thread.sleep(3000);
}

@When("^click on logo$")
public void click_on_logo() throws Throwable {
	clickOnElement(sl.getDashboard().getHam_block());
	Thread.sleep(2000);
	clickOnElement(sl.getDashboard().getHome());
}

@When("^scroll to care progress$")
public void scroll_to_care_progress() throws Throwable {
	Thread.sleep(2000);
	jsScrollDownElementFalse(sl.getDashboard().getCare_progress());
}

@When("^logout$")
public void logout() throws Throwable {
   Thread.sleep(2000);
   clickOnElement(sl.getDashboard().getHam_block());
   Thread.sleep(2000);
   clickOnElement(sl.getDashboard().getLog_out());
   Thread.sleep(2000);
   clickOnElement(sl.getDashboard().getLog_out_yes());
   Thread.sleep(2000);
   clickOnElement(sl.getDashboard().getLog_out_ok());  
}










}
 