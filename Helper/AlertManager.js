// AlertManager.js

class AlertManager {
  constructor() {
    // Initialize a placeholder alert function that returns a resolved promise.
    // This is a temporary function until the real one is set from DropdownAlert.
    this.alert = (_data) => new Promise((resolve) => resolve());
  }

  // Method to set the actual alert function from DropdownAlert.
  setAlertFunction(alertFunction) {
    this.alert = alertFunction;
  }

  // Async method to display an alert using the alert function.
  // It accepts the type, title, and message of the alert.
  async showAlert(type, title, message) {
    try {
      // Await the promise returned by the alert function.
      await this.alert({
        type: type,
        title: title,
        message: message,
      });
    } catch (error) {
      // Log any errors that occur during the alert display.
      console.error("Error showing alert:", error);
    }
  }
}

// Export an instance of AlertManager as a Singleton.
export const alertManager = new AlertManager();
