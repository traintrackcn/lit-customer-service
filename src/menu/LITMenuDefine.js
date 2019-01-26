export let MENU_DASHBOARD = "dashboard";
export let MENU_INVOICE = "invoice";
export let MENU_BILLING = "billing";
export let MENU_APP_PREFERENCES = "app-preferences";

export let menuTitles = ["Dashboard", "Invoice", "Billing", "App Preferences"];
export let menuKeys = [MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING, MENU_APP_PREFERENCES];
export const currentMenu = (current) => {
    // if (!current) return MENU_DASHBOARD;
    if (!current) return MENU_BILLING;
    return current;
}