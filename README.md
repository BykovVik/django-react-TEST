# django-react-test

1. Сверстать первый экран главной страницы
2. Реализовать Front на Vue.js/React.js
3. Реализовать Back на Python Django (возможно реализовать на bitrix или wordpress, в таком случае Front на HTML/CSS. Больший приоритет будет отдаваться соискателям со стеком Vue.js/React.js Python Django)
4. Сделать адаптивную верстку для планшета и телефона. (Да, в PSD нет этих версий, Вы должны сами расставить элементы интерфейса так, чтобы все выглядело гармонично).
5. Через админ панель должна быть возможность редактировать контент блоков преимуществ и управлять пунктами меню.


## Инструкция по установке

1. Создаем директорию для приложения `mkdir app`
2. Переходим в созданную директорию `cd app/`
3. Убедитесь что на вашем ПК установлен Git и выполните команду `git clone git@github.com:BykovVik/django-react-test.git`
4. Переходим в директорию которая создалась в результате выполнения прошлой команды `cd django-react-test/`
5. Создаём виртуальное окружение для python проекта `python3 -m venv env`
6. Запускаем наше виртуальное окружение командой `source env/bin/activate`
7. Устанавливаем все зависимости проекта командой `pip install -r app/requirements.txt`
8. Запускаем backend командой `python app/manage.py runserver`
9. Открываем второй терминал и из корневой директории скачанного проекта `django-react-test` выполняем команду `cd client-app`
10. Ставим зависимости проекта `yarn install`
11. Запускаем frontend `yarn start`

## Примечания

1. `http://localhost:3000/` - Frontend
2. `http://localhost:8000/admin/` - Админка (Login: admin, Password: Pan1cal_DEF_111) Эта та самая админ панель из требования под номером 5, описанного выше.
3. За базу данных взята стандартная SQLite(все миграции выложены в git вместе с проектом)
4. Мобильная адаптация сделана по средствам медиа запросов, в размере от 320px до 1280px включительно
5. Так как конкретизации об архитектуре приложения не было, я разработал SPA + API. Я понимаю что в данном приложении API не уместно. Однако, раз уж тестовое задание это процесс соревновательный, решил блеснуть знаниями :)