document.addEventListener('DOMContentLoaded', function() {
    // Fetch the current multiplier value from storage when the popup loads
    chrome.storage.local.get(['multiplier'], function(result) {
        const currentMultiplier = result.multiplier || '4'; // Use 4 as a fallback if not set
        document.getElementById('multiplier').value = currentMultiplier;
    });

    // Save button event listener
    document.getElementById('saveBtn').addEventListener('click', function() {
        const multiplier = document.getElementById('multiplier').value;
        chrome.storage.local.set({ 'multiplier': multiplier }, function() {
            alert('Multiplier saved!');
            window.close(); // Close the popup after saving
        });
    });
});
