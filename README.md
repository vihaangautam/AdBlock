# LinkedIn AdBlocker Extension

A Chrome extension that blocks ads on LinkedIn by hiding "Promoted" posts from your feed.

## Features

- **Blocks ads** on LinkedIn by targeting "Promoted" posts.
- **Lightweight** and simple to use.
- Works automatically as you browse LinkedIn.
- Uses **Manifest V3** with a service worker for background functionality.

## Installation

### Option 1: Install from Chrome Web Store
1. [Link to Chrome Web Store](#) (once published).
2. Click **Add to Chrome** and follow the prompts to install the extension.

### Option 2: Manual Installation (Without Chrome Web Store)

1. **Download the ZIP file** containing the extension files.
2. **Extract the ZIP file** to a folder on your computer.
3. **Enable Developer Mode** in Chrome:
   - Open **chrome://extensions/** in your browser.
   - Enable **Developer Mode** at the top right.
4. **Load the extension**:
   - Click **Load unpacked** and select the folder where you extracted the extension files.
5. The extension will be installed, and you can start browsing LinkedIn with ads blocked!

## Usage

Once the extension is installed, simply navigate to **LinkedIn**, and any "Promoted" posts will be automatically hidden from your feed.

## Technologies Used

- **Manifest V3** for Chrome extensions.
- **Service Worker** background script (`extension.js`).
- **WebNavigation API** for detecting page loads.
- **Scripting API** for executing content scripts (`linkedin.js`).

## Development

### Clone the Repository

To get started with development, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/LinkedIn-AdBlocker.git
