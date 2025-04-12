// script.js

function showFunction(functionName) {
    const functionContents = document.querySelectorAll('.function-content');
    functionContents.forEach(content => {
        content.style.display = 'none';
    });

    const activeFunction = document.getElementById(functionName);
    if (activeFunction) {
        activeFunction.style.display = 'block';
    }
}
