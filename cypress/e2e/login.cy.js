
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видимое
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })


    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio11'); //ввели неверный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видимое
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

        })
    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov6.ru'); //ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видимое
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

        })
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#mailForgot').should('be.visible');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

        })

    it('Проверка валидации полей', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без собачки
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видимое
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

        })

    it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //захожу на сайт
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видимое
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

        })


})




