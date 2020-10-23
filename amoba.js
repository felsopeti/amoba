var div;
var mezo;
var kijon = true;
// true = x,false = kör
var bf, bk, bl, kf, kk, kl, jf, jk, jl;
var bft = 0;
// b = bal, j = jobb, f = fent, k = kozep, l = lent (pl: bf = bal fent)


function Start()
{
    
    div = document.getElementById("div");

    mezo = document.createElement("img");
    mezo.src = "Border.png";

    
    Kezdes();
    Jatek();

    

}


function Jatek() {
    
    bf.onclick = function () {
        if (kijon) {
            bf.innerHTML = "x";
            kijon = false;
            
        } else {
            bf.innerHTML = "o";
            kijon = true;
            
        }
        bf.disabled = true;
    }
        
        
    

     
    bk.onclick = function () {
        if (kijon) {
            bk.innerHTML = "x";
            kijon = false;
        } else {
            bk.innerHTML = "o";
            kijon = true;
        }
        bk.disabled = true;
    }
        
    bl.onclick = function () {
        if (kijon) {
            bl.innerHTML = "x";
            kijon = false;
        } else {
            bl.innerHTML = "o";
            kijon = true;
        }
        bl.disabled = true;
    }

    kf.onclick = function () {
        if (kijon) {
            kf.innerHTML = "x";
            kijon = false;
        } else {
            kf.innerHTML = "o";
            kijon = true;
        }
        kf.disabled = true;
    }
    
    kk.onclick = function () {
        if (kijon) {
            kk.innerHTML = "x";
            kijon = false;
        } else {
            kk.innerHTML = "o";
            kijon = true;
        }
        kk.disabled = true;
    }

    kl.onclick = function () {
        if (kijon) {
            kl.innerHTML = "x";
            kijon = false;
        } else {
            kl.innerHTML = "o";
            kijon = true;
        }
        kl.disabled = true;
    }

    jf.onclick = function () {
        if (kijon) {
            jf.innerHTML = "x";
            kijon = false;
        } else {
            jf.innerHTML = "o";
            kijon = true;
        }
        jf.disabled = true;
    }

    jk.onclick = function () {
        if (kijon) {
            jk.innerHTML = "x";
            kijon = false;
        } else {
            jk.innerHTML = "o";
            kijon = true;
        }
        jk.disabled = true;
    }

    jl.onclick = function () {
        if (kijon) {
            jl.innerHTML = "x";
            kijon = false;
        } else {
            jl.innerHTML = "o";
            kijon = true;
        }
        jl.disabled = true;
    }

    
    
    
}

function Kezdes()
{
    //Gombok letrehozasa
    bf = document.createElement("button");
    bk = document.createElement("button");
    bl = document.createElement("button");
    kf = document.createElement("button");
    kk = document.createElement("button");
    kl = document.createElement("button");
    jf = document.createElement("button");
    jk = document.createElement("button");
    jl = document.createElement("button");

    
    //Gombok divhez fûzése
    div.appendChild(bf);
    div.appendChild(bk);
    div.appendChild(bl);
    div.appendChild(kf);
    div.appendChild(kk);
    div.appendChild(kl);
    div.appendChild(jf);
    div.appendChild(jk);
    div.appendChild(jl);
    

    //Gombok méretezése
    bf.style.height = "100px";
    bf.style.width = "100px";

    bk.style.height = "100px";
    bk.style.width = "100px";

    bl.style.height = "100px";
    bl.style.width = "100px";

    kf.style.height = "100px";
    kf.style.width = "100px";

    kk.style.height = "100px";
    kk.style.width = "100px";

    kl.style.height = "100px";
    kl.style.width = "100px";

    jf.style.height = "100px";
    jf.style.width = "100px";

    jk.style.height = "100px";
    jk.style.width = "100px";

    jl.style.height = "100px";
    jl.style.width = "100px";

    //Gombok rendezése
    bf.style.position = "relative";
    bk.style.position = "relative";
    bl.style.position = "relative";
    kf.style.position = "relative";
    kk.style.position = "relative";
    kl.style.position = "relative";
    jf.style.position = "relative";
    jk.style.position = "relative";
    jl.style.position = "relative";

    //Gombok igazítása
    bf.style.top = "10px";
    kf.style.top = "10px";
    jf.style.top = "10px";

    bk.style.top = "115px";
    kk.style.top = "115px";
    jk.style.top = "115px";

    bl.style.top = "220px";
    kl.style.top = "220px";
    jl.style.top = "220px";

    bf.style.left = "10px";
    bk.style.left = "-90px";
    bl.style.left = "-190px";

    kf.style.left = "-185px";
    kk.style.left = "-285px";
    kl.style.left = "-385px";

    jf.style.left = "-380px";
    jk.style.left = "-480px";
    jl.style.left = "-580px";

  
}
