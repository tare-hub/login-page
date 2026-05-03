# Login & Register Page

A clean, animated login and register UI built with HTML, CSS, and vanilla JavaScript.

## Features

- Smooth slide animation between login and register forms
- Curved SVG divider between the two panels
- Color swap — gradient moves from right to left when switching to register
- Inline field validation with red error messages
- Toast notifications for success and error feedback
- Password strength validation (uppercase, lowercase, number required)
- Username validation (cannot be numbers only)

## Files

| File | Description |
|------|-------------|
| `login.html` | Main HTML structure with both forms and overlay panel |
| `login.css` | All styles including animations, transitions, and error states |
| `login.js` | Form validation logic, panel switching, toast and field error handling |

## Validation Rules

**Username / Full Name**
- Cannot be empty
- Cannot consist of numbers only

**Password**
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number

## How to Run

Open `login.html` in any browser — no build step or dependencies required.
