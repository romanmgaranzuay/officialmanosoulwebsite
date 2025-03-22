function openInNewTab(url) {
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.opener = null; // Ensures no reference to the opening window
    }
}
