const canvas = document.getElementById('game-canvas'); // холст для рисования
const context = canvas.getContext('2d');

function startGame() {

    loop();
}

/* Очистка фона и запуск рисования фона, персонажа */
function loop() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawPlayer()

    requestAnimationFrame(loop); // обновление
}


/* Отрисовка фона */
function drawBackground() {
    const image = new Image();
    const sprite = sprites['bg'];
    image.src = sprite.url;
    const offsetX = 0;
    context.drawImage(image, offsetX, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
}

/* Отрисовка персонажа */
function drawPlayer() {
    const image = new Image();
    const sprite = sprites['player']['idle'];
    const dwidth = sprite.width / (sprite.height / sprite.dheight);
    image.src = `${sprite.url}${sprite.current}.png`;

    const offsetX = 0; // для изменения местоположения по горизонтали
    const offsetY = canvas.height - sprite.dheight;

    context.drawImage(image, 0, 0, sprite.width, sprite.height, offsetX, offsetY, dwidth, sprite.dheight);

    // переход к следующей картинке анимации персонажа
    sprite.current += 1;
    if(sprite.current >= sprite.count) {
        sprite.current = 1;
    }
}

const user = {
    login: '' // логин игрока
}

// все анимации
const sprites = {
    bg: {
        url: './animation/bg/1.png',
        width: 9558,
        height: 1080,
    },
    player: {
        // анимация стояния
        idle: {
            url: './animation/knight/idle/',
            count: 18,
            current: 1,
            width: 1068,
            height: 1265,
            dheight: 355,
        }
    }
}

// отправка формы регистрации игрока
document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();

    // запоминание логина игрока
    user.login = document.getElementsByClassName("username-input")[0].value;
    document.getElementsByClassName("user-info")[0].innerHTML = user.login;


    // скрыть начальный экран
    document.getElementsByClassName('screen-start')[0].classList.remove('show');

    // показать экран игры
    document.getElementsByClassName('screen-game')[0].classList.add('show');

    // запуска игры
    startGame();
})
