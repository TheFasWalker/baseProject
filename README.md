completed
html:
fileinclude
img - подключение webp автоматом
автозамена при сборке "../" на "" для подключение картинок
Подключение webp автоматическое
Версионирование файлов js css ( борьба с кэшем)
поднятие веб сервера с лоступом внутри локальной сети

styles
добавление префиксов
группировка медиа запросов
чистка итогового файла стилей от комментариев и прописанных классов без стилей

js
es6 синтаксис
Корректный импорт функций из других файлов

js-css
так как стоит автоматческое подключение webp то специально написан скрипт который делает проверку - на поддержку браузером webp если браузер поддерживает то на body вешается класс webp в противном случае no-webp
возможна установка пакетов типа swiper в npm и импортирование оного в js (без подключения отдельным модулем)

img
минификация изображения + переделка в webp настройки качества в файле config.js





планово:
2. автоматическая конвертация svg в спрайты
3. конвертация шрифтов(конвертация в разные форматы из 1го) и автоматическое подключение в файлы стилей
5. обработка js через babel (настройки в конфиге)




не разобрался с форматированием otf -> ttf
Возможно из за OS конвертер gulp-fonter вроде как написан на винде.
gulp-fonter-unx не помогю шрифт просто копируется из папки в папку


проблемы!
возможна некорректная работа конвертера шрифтов на windows.
решение:
gulp/tasks/fonts.js
расскоментировать строку
    import fonter from 'gulp-fonter';
закоментировать строку
    import fonter from 'gulp-fonter-unx'




скрипты
npm run fonts
компиляция шрифтов ttf->woff->woff2, копирование файлов в папку готовй сборки public/fonts/
подключение сконвертированных шрифтов в создаваемый файл src/public/fonts.scss
При запуске скрипта недолжно существовать файла src/public/fonts.scss . Сделано для того, что бы была возможность внести свои правки в итоговый файл после подключения шрифтов

npm run svgsprite
сборка svg файлов из папки src/svgsprite в svg спрайт папку готовой сборки /public/images/icons/icons.svg
свойства fill и stroke если нужно - придётся тереть в ручную.
id нужной иконки будет исходным названием файла