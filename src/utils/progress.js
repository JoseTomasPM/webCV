export function animateProgressBar (barId, targetPercent){
    const bar = document.getElementById(barId);
    let progess = 0;

    const interval = setInterval(() =>{
        if(!bar) return clearInterval(interval);
        if (progess >= targetPercent){
            clearInterval(interval);
            return;
        }
        progress++
        bar.style.width = progress + "%";
    }, 15)
}