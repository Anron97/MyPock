#Требования к проекту MyPock
##1. Введение
Как часто возникает у вас необходимость запоминать название сайта с полезной для вас информацией или оставлять вкладку открытой в браузере?
Теперь, когда вы наткнетесь на статью или ссылку, которые захотите прочитать или просмотреть позднее, просто сохраните их в MyPock.
Позднее вы сможете найти эти материалы в приложении и легко открыть их.
Данное приложение поможет вам не запоминать названия сайтов, или отправлять   ссылки  себе на почту или в социальные сети. Достаточно их просто сохранить в приложении и они будут там храниться, пока вы не удалите их.

##2. Требования пользователя
###2.1 Программные интерфейсы
Проект будет выполнен в формате SPA(Single page application)  при помощи технологии Angular 2 и фреймворка Spring.  
###2.2 Интерфейс пользователя
При запуске приложения пользователь увидит веб-страницу, на которой будет отображаться список сохраненных материалов, по которым можно перейти к их прочтению. Пользователь может добавить ресурс в избранное, наведя курсор на форму закладки и кликнув на иконку «Favorite»(иконка звезды) или удалить ресурс из списка, нажав на иконку «trash» (иконка мусорного бака).
![my list](https://user-images.githubusercontent.com/26232533/31591254-634a36b4-b226-11e7-97c6-bf782277d19c.png)
Кнопка добавления нового материала откроет модальное окно, в котором пользователю будет предложено ввести название материала , добавить картинку, ввести теги для быстрого поиска и ввести ссылку на ресурс. 
![modal window](https://user-images.githubusercontent.com/26232533/31591291-de4b6cc0-b226-11e7-9021-5f70b20e67d1.png)
Все материалы, добавленные в избранное, будут отображаться на странице Favorite, перейти на которую можно выбрав в меню пункт Favorite. 
![favorite](https://user-images.githubusercontent.com/26232533/31591297-ed0ced9c-b226-11e7-8d32-8b953319b500.png)
###2.3 Характеристики пользователей  
Приложение будет полезно всем пользователям, использующим для поиска информации World Wide Web. Если пользователь нашел в сети что-то интересное для себя и не хочет потерять ссылку на этот ресурс, он может сохранить его в приложении и позже просмотреть.
###2.4 Предположения и зависимости
Старые браузеры могут не поддерживать данное приложение.
##3. Системные требования
Для запуска приложения необходим персональный компьютер с установленным одним из любых браузеров на выбор пользователя.
###3.1 Функциональные требования
1) Просмотр всех сохраненных материалов.
2) Сохранение материала в приложении.
3) Добавление материала в избранное.
4) Просмотр всех материалов, добавленных в избранное.
5) Полнотекстовый поиск по сохраненным материалам.
6) Поиск материалов по тегам.
###3.2 Нефункциональные требования
####3.2.1 АТРИБУТЫ КАЧЕСТВА
1) Адаптивность. Приложение должно быть читаемым на любом устройстве, на котором оно запущено.
2) Надежность. Пользователи должны быть уверены, что приложение работает без сбоев, но могут произойти ситуации, не позволяющие запустить приложение.
Предполагается, что число таких ситуаций должно быть сведено к минимуму (не более 3 ситуаций в сутки). 
3) Многоязычность. Приложение должно быть понятно любому пользователю, запустившему его. На данном этапе разработки рассматриваются 2 языка: Английский, Русский. Возможно дальнейшее расширение.
4) Производительность. Пользователь не должен долго ждать загрузки веб страниц приложения. Максимальное время перехода между страницами 1с.
####3.2.1 ОГРАНИЧЕНИЯ
1) Frontend приложения должен быть реализован с помощью  CSS фреймворка Twitter Bootstrap версии 3.0.0 выше (для адаптивной верстки) и  фреймворка Angular 2 и выше.
2)  Backend должен быть реализован с помощью языка Java 8 и фреймворка Spring  версии 4.0.0 и выше.
