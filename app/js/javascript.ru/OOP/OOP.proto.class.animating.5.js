function Menu() {

    this.count = 0;
    this.STATE_OPEN = false;
    this.STATE_CLOSED = false;

}

Menu.prototype.open = function () {
    col(new Date());
    col(` 'open' parent is run `)
}

Menu.prototype.close = function () {
    col(new Date());
    col(` 'close' parent is run `)
}

function AnimatingMenu() {
    Menu.apply(this, arguments);
    this.STATE_ANIMATING = false;
}

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;
AnimatingMenu.prototype.open = function () {

    this.STATE_ANIMATING = true;

    col(new Date());
    col(` 'open' child is run `);
    this.ts = setTimeout(() => {

        col(`STATE_CLOSED =  ${this.STATE_CLOSED}`)
        this.__proto__.__proto__.open();

    }, 2000);

}

AnimatingMenu.prototype.close = function () {
    this.STATE_CLOSED = false;

    this.ts = clearTimeout(this.ts);

    col(new Date());
    col(` 'close' child is run `);

    this.__proto__.__proto__.close();

}

debugger;
let ms = new AnimatingMenu();
ms.open();
ms.close();