# Interactive-Image-and-Input-Validation

### Project Description:
The Interactive Image and Input Validation project is a web page that includes an image with an event listener for double-click events and an input field with validation for a minimum character length. The project uses HTML, CSS, and JavaScript to provide an interactive user experience.

#### File: `index.html`

### Description:
This HTML file contains an image, an input field, and a button. The image has a double-click event listener that triggers an alert message. The input field validates its content to ensure it has a minimum length of 9 characters, changing its border color based on the validation result. A button allows the user to remove the event listener from the image.

#### Key Features:
- **Double-Click Event on Image**: Displays an alert when the image is double-clicked.
- **Remove Event Listener**: Button to remove the double-click event listener from the image.
- **Input Validation**: Changes the input field's border color to red if the input is less than 9 characters and reverts it to black if it meets the requirement.

#### JavaScript Functions:
- `f()`: Displays an alert message when the image is double-clicked.
- `f2()`: Validates the input field length and changes the border color accordingly.
- Event Listener Removal: Removes the double-click event listener from the image.

#### HTML Structure:
- **Image Element**: 
  - Displays an example image.
  - Has a double-click event listener.
- **Input Field**: 
  - Placeholder instructs the user to enter a value with a minimum of 9 characters.
  - Blur event triggers validation.
- **Button**: 
  - Removes the event listener from the image.

### Usage:
1. **Image Interaction**: Double-clicking the image will trigger an alert message.
2. **Remove Event Listener**: Clicking the button will remove the double-click event listener from the image.
3. **Input Validation**: Enter a value in the input field; the border color will turn red if the input is less than 9 characters and black if it is 9 characters or more.

### Example:
1. **Double-Click the Image**: An alert saying "vous avez cliquer deux fois sur l’image" will appear.
2. **Click the Button**: The double-click event on the image will be removed, and subsequent double-clicks will not trigger the alert.
3. **Input Field**: Enter "12345678" (less than 9 characters), and the border will turn red. Enter "123456789" (9 characters or more), and the border will turn black.
