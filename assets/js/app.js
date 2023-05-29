const canvas = document.getElementById('game-canvas'); // холст для рисования
const context = canvas.getContext('2d');

let xPos = 0;
let playerDirection = 1;
const defaultPlayerSpeed = 20;
let isPlayerRunning = 0;
function startGame() {

    loop();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "в" || event.key === "d") {
        xPos += defaultPlayerSpeed;
        playerDirection = 1;
    }
    if (event.key === "ф" || event.key === "a") {
        xPos -= defaultPlayerSpeed;
        playerDirection = -1;
    }
})

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
    const sprite = sprites['player']['sprint'];
    const dwidth = sprite.width / (sprite.height / sprite.dheight);
    image.src = `${sprite.url}${sprite.current}.png`;

    if (playerDirection === -1)
        image.src = `${sprite.url}mirror_${sprite.current}.png`;

    const offsetX = xPos; // для изменения местоположения по горизонтали
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
        attack_1: {
            url: './animation/knight/attack1/',
            count: 21,
            current: 1,
            width: 1965,
            height: 1265,
            dheight: 355,
        },
        attack_2: {
            url: './animation/knight/attack2/',
            count: 26,
            current: 1,
            width: 1826,
            height: 2003,
            dheight: 355,
        },
        block: {
            url: './animation/knight/block/',
            count: 23,
            current: 1,
            width: 1095,
            height: 1342,
            dheight: 355,
        },
        death: {
            url: './animation/knight/death/',
            count: 49,
            current: 1,
            width: 1650,
            height: 1362,
            dheight: 355,
        },
        idle: {
            url: './animation/knight/idle/',
            count: 18,
            current: 1,
            width: 1068,
            height: 1265,
            dheight: 355,
        },
        run: {
            url: './animation/knight/run/',
            count: 17,
            current: 1,
            width: 1372,
            height: 1347,
            dheight: 355,
        },
        sprint: {
            url: './animation/knight/sprint/',
            count: 14,
            current: 1,
            width: 1059,
            height: 1597,
            dheight: 355,
        },
        walk: {
            url: './animation/knight/walk/',
            count: 25,
            current: 1,
            width: 1273,
            height: 1297,
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
