## ВВЕДЕНИЕ

В последние годы Интернет стал неотъемлемой частью нашей повседневной жизни. Использование игр приобрело заметную роль в этой вселенной, позволяя миллионам людей получать доступ к развлечениям быстро и бесплатно. 

Наш заказчик сделал срочный заказ: необходимо разработать игру и воплотить желание заказчика в реальность! Все что вам необходимо – это реализовать логику игры.  

* Название игры: Рыцарь. 

* Технологии этого модуля: HTML 5, CSS3, JavaScript, jQuery, Граф. дизайн, PHP 

* Время модуля: 3 часа 

Вам необходимо реализовать функционал игры. Готовый шаблон и все необходимые файлы предоставлены. Использование шаблона обязательно. 

## ОПИСАНИЕ ПРОЕКТА И ЗАДАЧ 

В игре используются элементы, описанные ниже: 

Рыцарь: элемент, который контролируется игроком. 

Монстры: элементы, которые необходимо уничтожить игроку. 

Шкала жизней (HP): шкала, отражающая запас жизненной энергии игрока. 

Шкала энергии (MP): шкала, отражающая запас магической энергии игрока. 

Имя игрока: имя игрока, которое он ввел на стартовом экране. 

Убийства: количество убитых монстров. 

Панель умений: умения, которые может использовать игрок, для сражения с монстрами. 

 
--
Игра должна начинаться со стартового экрана с инструкцией к игре, полем для ввода имени игрока и кнопкой "Начать", если поле имени пустое, то кнопка не активна. Инструкция к игре должна быть представлена анимировано. 

 

#### Игровой функционал: 

По нажатию на кнопку "Начать игру" игрок попадает на экран игры. Изначально у игрока 0 очков, 100 HP и 100 MP, таймер 00:00 (в формате mm:ss). 

В начале игры запускается таймер, персонаж располагается в левой стороне игрового поля, что является начальной границей карты. 

Игрок может передвигаться с помощью клавиш-стрелок: налево и направо. Когда игрок находиться в левой половине видимой части экрана фон не передвигается, а «замирает». Когда игрок доходит центральной точки он остается в центральной части экрана, происходит анимация его передвижения, а фон в свою очередь начинает «прокручиваться». При этом когда фон достигает конца, игрок должен передвигаться в правую часть экрана. 

По мере прохождения игры на игрока нападают монстры, которые случайно генерируются в видимой части игрового поля и движутся справа налево. Игра заканчивается, как только игрок доходит до конца карты и достигает правого местоположения или происходит смерть рыцаря, а таймер останавливается. 

За каждого убитого монстра дается 1 очко. 

Если жизни игрока кончаются (0HP), то игра заканчивается. 

Жизни игрока (HP) регенерируются со скоростью 2HP/с. 

Энергия игрока (MP) регенерируется со скоростью 5MP/с. 

Игрок может использовать умения. 
Каждое умение тратит какое-то количество MP и имеет время перезарядки.

### Вот список умений: 

**Удар мечом**.
 
Описание: Игрок делает удар мечом, нанося урон монстрам перед собой. 
Клавиша активации: 1. 
Время перезарядки: 0 сек. 
Количество потребляемой MP: 0. 
Урон: 15 ед. 

**Блок**.
 
Описание: Игрок выставляет щит перед собой. Щит блокирует весь урон. Монстры не могут пройти за щит. 
Клавиша активации: 2. 
Время перезарядки: 0 сек. 
Количество потребляемой MP: 5. 

**Трио мечей**.
 
Описание: Игрок выпускает три меча перед собой. Мечи летят, нанося 40 единиц урона всем монстрам на своем пути. 
Клавиша активации: 3. 
Время перезарядки: 3 сек. 
Количество потребляемой MP: 10. 
Урон: 40 ед. 

**Град мечей**.
 
Описание: в радиусе нескольких метров от игрока на землю обрушивается град мечей уничтожая всех, кто был в данном радиусе. 
Клавиша активации: 4. 
Время перезарядки: 15 сек. 
Количество потребляемой MP: 30. 
Урон: 100 ед. 

 
---

При нажатии на кнопку ESC игра ставится на паузу, а при повторном нажатии - снимается с паузы. Во время паузы останавливаются все интерактивные действия, а также вся анимация, таймер тоже замирает, умениями пользоваться нельзя, игрок и монстры не двигаются.  

При ударе мечом урон наносится один раз каждому монстру, который находится в зоне поражения мечом, т.е. если перед игроком находится один монстр, то он получит 15 ед. урока, а если 3 монстра, то каждый из них получит по 15 ед. урона. 

Монстры должны следовать за игроком. Если игрок пробежал монстров, то они должны развернуться и следовать за ним. 

Когда игрок идет обратно, он поворачивается в обратную сторону. 

Каждый из монстров имеет свою скорость атаки и скорость движения, которая не превышает скорость движения игрока. 
На экране не должно находиться более 10 монстров. 


### Вот описания монстров: 
 
**Пёс**

* Наносит 2ед урона 
* Имеет 15HP  

**Эльф**
* Наносит 5ед урона 
* Имеет 30HP 

**Гринч**
* Наносит 10ед урона 
* Имеет 60HP 

---

### Качество кода
Ваша игра должна работать без отображения JavaScript ошибок или сообщений в консоли браузера.  

Ваш HTML/CSS и JavaScript код должен быть организован и понятным. Используйте корректные наименования переменных, методов и не забывайте оставлять комментарии для дальнейшей поддержки в будущем. 

После завершения игры результаты должны быть сохранены на сервере и показана таблица с рейтингом. 

Вам дан PHP файл, который сохраняет данные в базу данных и возвращает массив с результатами. Используйте этот файл для сохранения результатов и получения данных для рейтинга. 
В этом файле можно изменять только данные доступа к базе данных (логин, пароль, имя базы данных). 

#### Этот файл принимает следующий AJAX запрос:
метод: POST 
* username - имя пользователя 
* score - количество убитых монстров 
* time – время игры 

```
В ответ возвращается массив с данными: 

[ 

{"id":"1","username":"Player 1","score":"10","time":"20"}, 
{"id":"2","username":"Player 2","score":"8","time":"30"} 

] 
```
 
### Экран результатов
После завершения игры открывается экран результатов, в котором формируется таблица с лучшими 10 игроками, если игрок не вошел в таблицу, то выводятся 9 лучших игроков, а в последней строке указывается место и результат игрока только что завершившего игру. 

Данные в таблице должны быть отсортированы по количеству убитых монстров по убыванию. Если несколько строк имеют одинаковое кол-во убитых монстров, то они сортируются между собой по времени по возрастанию. Если несколько строк имеют одинаковое количество убитых монстров и одинаковое время, то они занимают одинаковую позицию в рейтинге. 

На экране результатов должна быть кнопка «Играть сначала», которая позволяет начать игру с начала, первый экран не отображается. 

Проявите все свои навыки для создания качественной игры, с анимацией и интерактивностью. 
