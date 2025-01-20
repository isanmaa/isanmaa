const sounds = ['Ei pronssia ei hopiaa','Ei voioioioi', 'Ihmeellinen asia', 'Ja jokohan nyt taittuu', 'Jokinen siirtää','Koivu lyö Suomen finaaliin', 'Lauo Helminen lauo', 'Tulee', 
    'Valssia', 'Yrheily jä isänmää'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopPlaying();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').append(btn);
})


function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}