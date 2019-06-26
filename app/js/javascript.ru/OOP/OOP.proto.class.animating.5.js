/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

function Menu() {
    this.count = 0;
    this.STATE_OPEN = false;
    this.STATE_CLOSED = false;
    this.open = function () {
        col(new Date());
        col(` 'open' parent is run `)
    }
    this.close = function () {
        col(new Date());
        col(` 'close' parent is run `)
    }
}

function AnimatingMenu() {
    Menu.apply(this, arguments);
    this.STATE_ANIMATING = false;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;
AnimatingMenu.prototype.open = function () {

    this.STATE_ANIMATING = true;

    this.ts = setTimeout(() => {
        col(new Date());
        col(` 'open' child is run `);

        this.run();

    }, 1000);

}

AnimatingMenu.prototype.close = function () {

    this.ts = clearTimeout(this.ts);

    col(new Date());
    col(` 'close' child is run `);

    this.close();

}

debugger;
let ms = new AnimatingMenu();
ms.open();