document.addEventListener("DOMContentLoaded", () => {
    const navMenu = `
    <ul>
    <li><a id="index" class="primer" href="index">Home</a></li>
    <li><a id="m_leter" class="segon" href="m_leter">Sobre mi</a></li>
    <li><a id="docs" class="tercer" href="docs">Documents</a></li>
    </ul>
    `
    const navContainer = document.getElementById("barr")
    
    if (navContainer) {
        navContainer.innerHTML = navMenu
    } else {
        console.error("Navigation container not found")
    }
    
    const url = window.location.pathname.split('/');
    console.log(url)
    const keys = ["index.html", "m_leter.html", "docs.html", "logo.html"]
    const keys2 = ["index", "m_leter", "docs", "logo"]
    const celsNu = keys.length
    let rr = 0
    for (let i = 0; i < celsNu; i++) {
    console.log("rr")
        if (url[1] === keys[i]) {
            rr = i
            console.log(rr)
        }
    console.log(rr)
    }
    document.getElementById(keys2[rr]).classList.add("color")

})    

