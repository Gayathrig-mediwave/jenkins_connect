package com.Page_Object_Model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * @author Gayathri Devi G
 *
 */
public class DashboardPage {
	// initialize web driver
	public WebDriver driver;
	// Xpath for Book assessment
	@FindBy(xpath = "(//a[normalize-space()='Book assessment'])[1]")
	private WebElement book_assessment;

	public WebElement getBook_assessment() {
		return book_assessment;
	}

	// Xpath for view assessment
	@FindBy(xpath = "(//a[normalize-space()='View assessment details'])[1]")
	private WebElement view_assessment;

	public WebElement getView_assessment() {
		return view_assessment;
	}

	// Xpath for rearrange
	@FindBy(xpath = "(//button[normalize-space()='Re-arrange'])[1]")
	private WebElement rearrange;

	public WebElement getRearrange() {
		return rearrange;
	}

	// Xpath for view appointment
	@FindBy(xpath = "(//a[normalize-space()='View'])[1]")
	private WebElement view_appt;

	public WebElement getView_appt() {
		return view_appt;
	}

	// Xpath for view details
	@FindBy(xpath = "(//a[normalize-space()='View details'])[1]")
	private WebElement view_details;

	public WebElement getView_details() {
		return view_details;
	}

	// Xpath for view details
	@FindBy(xpath = "//p[@id='dashboard-cp-step-para']")
	private WebElement care_progress;

	public WebElement getCare_progress() {
		return care_progress;
	}

	// Xpath for view details
	@FindBy(xpath = "//div[@class='ham-blk']")
	private WebElement ham_block;

	public WebElement getHam_block() {
		return ham_block;
	}

	// Xpath for appointments
	@FindBy(xpath = "//a[normalize-space()='Appointments']")
	private WebElement appointments;

	public WebElement getAppointments() {
		return appointments;
	}

	// Xpath for home
	@FindBy(xpath = "//a[normalize-space()='Home']")
	private WebElement home;

	public WebElement getHome() {
		return home;
	}
	// Xpath for logout

	@FindBy(xpath = "//a[normalize-space()='Log Out']")
	private WebElement log_out;

	public WebElement getLog_out() {
		return log_out;
	}

	// Xpath for logout yes
	@FindBy(xpath = "//button[normalize-space()='Yes']")
	private WebElement log_out_yes;

	public WebElement getLog_out_yes() {
		return log_out_yes;
	}
	
	// Xpath for logout ok
		@FindBy(xpath = "//button[normalize-space()='OK']")
		private WebElement log_out_ok;

	public WebElement getLog_out_ok() {
			return log_out_ok;
		}

	// Constructor
	public DashboardPage(WebDriver dashboard) {
		this.driver = dashboard;
		PageFactory.initElements(driver, this);
	}
}
