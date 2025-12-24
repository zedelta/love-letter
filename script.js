function goToScene2() {
    document.getElementById("scene1").classList.remove("active");
    document.getElementById("scene2").classList.add("active");

    createKisses();
}

function createKisses() {
    for (let i = 0; i < 20; i++) {
        let kiss = document.createElement("div");
        kiss.innerText = "💋";
        kiss.style.position = "absolute";
        kiss.style.left = Math.random() * window.innerWidth + "px";
        kiss.style.top = Math.random() * window.innerHeight + "px";
        kiss.style.fontSize = "30px";
        kiss.style.animation = "float 2s infinite";
        document.body.appendChild(kiss);
    }
}
