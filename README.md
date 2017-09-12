ENG

This is a test Node.js project.

Technologies used:
1. Front-end technology: jade, html, css, bootstrap, js, jQuery, ajax, datatables.
2. Back-end technology: Node.js, Express, morgan, random-org, pg-promise, Postgresql..


The purpose of this project is to create a service for getting random integer and character sequenсe from
random.org. To achieve this goal, the following tasks were identified and implemented:
1. Configuring a Express frameworg to work with html templates and mapping resources.
2. Building a graphic web interface.
3. Building an rest interface for information exchange.
4. Separating of Ajax controller logic from the controller for page routing.
5. Creation of separate layers for work with a database and service random.org.
6. Implementation of asynchronous queries and storing in the database answers from random.org according to a given range of numbers or
in accordance with a given number of characters. And also informing about the stored sequence.
7. Implementation of the query of stored sequences in a given range of numbers or in accordance with a given number
signs. And displaying them.
8. If the database tables are not yet created, then automatic creation of tables at the time of server start.


RUS

Это тестовый Node.js проект. Использованные технологии:
1. Клиентская сторона: jade, html, css, bootstrap, js, jQuery, ajax, datatables.
2. Серверная сторона: Node.js, Express, morgan, random-org, pg-promise, Postgresql.

Целью данного проекта является создание сервиса для получения случайных числовых и символьных последовательностей с 
random.org. Для достижения данной цели были выделены и реализованы следующие задачи:
1. Настройка express framework для работы с html шаблонами, а также маппинг ресурсов.
2. Построение графического веб интерфейса.
3. Построение rest интерфейса для информационного обмена между клиентом и сервером.
4. Разделение логики Ajax контроллера и контроллера для маршрутизации.
5. Выделение отдельных слоёв для работы с БД и сторонним сервисом random.org.
6. Реализация асинхронных запросов и сохранения в БД ответов от random.org в заданном диапазоне чисел или
в соответствии с заданным количеством знаков с информированием о сохраненной последовательности.
7. Реализация запроса сохраненных в БД последовательностях в заданном диапазоне чисел или в соответствии с заданным количеством 
знаков с отображением на экране.
8. Если таблицы базы данных ещё не созданы, то реализация автоматического создания таблиц во время старта сервера, 

Сервер стартует на 3000 порту (по умолчанию у node.js). По умолчанию название базы данных, имя пользователя,
и пароль к БД: postgres, порт номер 5432. Изменить можно в src/repository во второй строке:
"postgres://name:password@localhost:5432/bdname".
