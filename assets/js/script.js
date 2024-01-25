const gameContainer = document.querySelector('.container'),
    useResult = document.querySelector('.use_result img'),
    cpuResult = document.querySelector('.cpu_result img'),
    result = document.querySelector('.result'),
    optionImgs = document.querySelectorAll('.option_img');

optionImgs.forEach((img, index) => {
    setTimeout(() => {
    img.addEventListener('click', (e) => {
            img.classList.add("active");
            optionImgs.forEach((img2, index2) => {
                if (index !== index2) {
                    img2.classList.remove("active")
                }
            })
            let imgCrs = e.target.querySelector("img").src;
    
            useResult.src = imgCrs;
    
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImg = ["assets/img/tosh.jpg", "assets/img/qog'oz.png", "assets/img/qaychi.png"];
            let abc = cpuImg[randomNumber];
            cpuResult.src = cpuImg[randomNumber];
            let useValue = ["R", "P", "S"][index];
            let cpuValue = ["R", "P", "S"][randomNumber];
            
            let outComes = {
                RR: "Draw",
                RP: "Komp",
                RS: "Siz",
                PP: "Draw",
                PR: "Siz",
                PS: "Komp",
                SS: "Draw",
                SR: "Komp",
                SP: "Siz",
            };
            
            let outcomesValue = outComes[useValue + cpuValue];
            result.textContent = useValue === cpuValue ? "Durrang" : `${outcomesValue} G'olib!!`;
            console.log(useValue,cpuValue);
            if (abc === "assets/img/qaychi.png") {
                cpuResult.style.transform = `rotate(0deg) rotateY(180deg)`;
            }
        })
    }, 1000);
})