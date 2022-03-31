

// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                themeStylesheet.href = '/assets/css/dark.css';
                themeToggle.innerText = 'Switch to light mode';
                localStorage.setItem('theme',themeStylesheet.href)
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                themeStylesheet.href = '/assets/css/light.css';
                themeToggle.innerText = 'Switch to dark mode';
                localStorage.setItem('theme',themeStylesheet.href)

    }

    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = '/assets/css/dark.css';
            themeToggle.innerText = 'Switch to light mode';


        } else {
            // if it's dark -> go light
            themeStylesheet.href = '/assets/css/light.css';
            themeToggle.innerText = 'Switch to dark mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)  
    })




})














