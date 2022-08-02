document.addEventListener("touchstart", function() {}, false);

var textarea = document.querySelector('textarea');
    
    textarea.addEventListener('input', (e) => {
        textarea.style.height = '40px';
        textarea.style.height = e.target.scrollHeight + 'px';
    });
