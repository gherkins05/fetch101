/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

async function showMessage(elem, url) {
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        elem.textContent = await res.text();
    } catch (err) {
        console.log(err);
    }
}

async function showList(elem, url) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();

        data.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            elem.appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
}

function startShowingMessage(elem, url) {
    setInterval(async () => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            elem.textContent = await res.text();
        } catch (err) {
            console.log(err);
        }
    }, 1000);
}

async function handleError(elem, url) {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        } else {
            elem.textContent = await res.text();
        }
    } catch (err) {
        elem.textContent = "OH DEAR";
        console.log(err);
    }
}

function drawBox(canvas, url) {
    setInterval(async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();

            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "#000000";
            ctx.fillRect(data.x, data.y, 10, 10);
        } catch (err) {
            console.log(err);
        }
    }, 1000);
}
