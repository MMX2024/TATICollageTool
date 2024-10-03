let linkGenerated = false; // Flag to track if the link has been generated

// Function to handle button click for both generating and copying link
function handleButtonClick() {
    const linkInput = document.getElementById('generatedLink');
    const actionButton = document.getElementById('actionButton');
    const statusMessage = document.getElementById('statusMessage');

    if (!linkGenerated) {
        // Generate the link
        const generatedLink = `https://tati-session-link.com/${Math.random().toString(36).substr(2, 8)}`;
        linkInput.value = generatedLink;
        linkGenerated = true;

        // Update button text to "Copy Link"
        actionButton.textContent = "Copy Link";
        statusMessage.textContent = "Session link created! You can now copy it.";
    } else {
        // Copy the link to the clipboard
        linkInput.select();
        document.execCommand('copy');
        statusMessage.textContent = "Link copied to clipboard!";
    }
}


