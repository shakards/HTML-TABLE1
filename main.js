document.getElementById('copy-btn').addEventListener('click', function() {
    const code = document.getElementById('code-box').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Change button text
    this.textContent = 'Copied!';
    this.classList.add('copied');

    // Reset button text after 2 seconds
    setTimeout(() => {
        this.textContent = 'Copy';
        this.classList.remove('copied');
    }, 2000);
});