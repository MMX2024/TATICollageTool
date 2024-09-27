// Function to call the API and generate a new session link
async function generateLink() {
    const response = await fetch('/api/generate-link');
    const data = await response.json();
    document.getElementById('generatedLink').value = data.link;
}

// Function to copy the generated link to the clipboard
function copyLink() {
    const linkField = document.getElementById('generatedLink');

    if (linkField.value) {
        linkField.select();  // Select the text in the input field
        document.execCommand('copy');  // Copy the text
        document.getElementById('statusMessage').innerText = 'Link copied to clipboard!';
    } else {
        document.getElementById('statusMessage').innerText = 'Please generate a link first.';
    }
}
