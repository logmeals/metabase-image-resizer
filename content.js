if (window.location.hostname.includes('metabase')) {
    // Only continue if the hostname contains 'metabase'

    document.addEventListener('click', function(e) {
        let targetSpan = e.target.closest('span.cellData');
    
        if (targetSpan && targetSpan.closest('table') && targetSpan.querySelectorAll('img').length === 1) {
        let img = targetSpan.querySelector('img');
        // Now targeting the parent div of the table
        let divParent = targetSpan.closest('table').parentElement; 
    
        e.stopPropagation();
        e.preventDefault();
    
        chrome.storage.local.get(['multiplier'], function(result) {
            const defaultHeight = 30;
            const multiplier = parseFloat(result.multiplier || '4'); // Default to 4 if not set
            const resizedHeight = defaultHeight * multiplier;
            const isEnlarged = parseInt(img.style.height, 10) === resizedHeight || img.style.height === `${resizedHeight}px`;
    
            if (isEnlarged) {
            img.style.height = `${defaultHeight}px`;
            img.style.width = ''; // Clear width to maintain aspect ratio
    
            // Check if any images are still enlarged within the table
            const anyEnlarged = Array.from(divParent.querySelectorAll('img')).some(i => parseInt(i.style.height, 10) === resizedHeight || i.style.height === `${resizedHeight}px`);
            if (!anyEnlarged) {
                divParent.style.overflowY = ''; // Reset overflow if no images are enlarged
            }
            } else {
            img.style.height = `${resizedHeight}px`;
            img.style.width = ''; // Adjust width accordingly to maintain aspect ratio
            divParent.style.overflowY = 'scroll'; // Enable vertical scrolling on the parent div
            }
        });
        }
    }, true);
  
}