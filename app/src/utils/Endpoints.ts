import ApiSettings from "../config/ApiSettings";

enum Endpoints {
    SIGNUP = `${ApiSettings.BASEURL}/user/signup`,
    LOGIN = `${ApiSettings.BASEURL}/user/login`,
    UPDATE_NAME = `${ApiSettings.BASEURL}/user/update_name`,
    UPDATE_EMAIL = `${ApiSettings.BASEURL}/user/update_email`,
    UPDATE_PASSWORD = `${ApiSettings.BASEURL}/user/update_password`,
    DELETE_ACCOUNT = `${ApiSettings.BASEURL}/user/delete`,
    BOX = `${ApiSettings.BASEURL}/box`,
    BOX_ALL = `${ApiSettings.BASEURL}/all/box`,
    BUDGET = `${ApiSettings.BASEURL}/budget`,
    BUDGET_ALL = `${ApiSettings.BASEURL}/all/budget`,
    EXPENSE = `${ApiSettings.BASEURL}/expense`,
    EXPENSE_ALL = `${ApiSettings.BASEURL}/all/expense`,
    REVENUE = `${ApiSettings.BASEURL}/revenue`,
    REVENUE_ALL = `${ApiSettings.BASEURL}/all/revenue`,
    FIXED_EXPENSE = `${ApiSettings.BASEURL}/fixedexpense`,
    FIXED_EXPENSE_ALL = `${ApiSettings.BASEURL}/all/fixedexpense`,
    FIXED_REVENUE = `${ApiSettings.BASEURL}/fixedrevenue`,
    FIXED_REVENUE_ALL = `${ApiSettings.BASEURL}/all/fixedrevenue`,
}


export default Endpoints