
// const count__car = 10;

let name__logo__car = [
    'logo__car__bmw',
    'logo__car__bmw',
    'logo__car__bmw',
    'logo__car__bmw',
    'logo__car__mercedes',
    'logo__car__mercedes',
    'logo__car__kia',
    'logo__car__kia',
    'logo__car__kia',
    'logo__car__vw',
];

let name__car = [
    'BMW i 325 кабриолет ',
    'BMW  320 кабриолет',
    'BMW Z4 кабриолет',
    'BMW 420D кабриолет',
    'Mercedes С180 ',
    'Mercedes Viano',
    'KIA K5',
    'KIA RIO',
    'KIA RIO',
    'Volkswagen Touareg',
];


let year = [
    '2007',
    '2009',
    '2009',
    '2016',
    '2012',
    '2009',
    '2020',
    '2020',
    '2020',
    '2016',
];

let engine__capacity = [
    '2,5',
    '2,0',
    '2,5',
    '2,0',
    '1,8',
    '2,2',
    '2,0',
    '1,6',
    '1,6 ',
    '2,5',
];

let engine__power = [
    '204',
    '177',
    '204',
    '190',
    '173',
    '150',
    '150',
    '123',
    '123',
    '245',
];

let type__fuel = [
    '95',
    'дт',
    '95',
    'дт',
    '95',
    'дт',
    '95',
    '95',
    '95',
    'дт',
];

let price = [
    '4500',
    '4500',
    '7500',
    '9500',
    '4500',
    '4500',
    '4500',
    '4500',
    '4500',
    '9000',
];






let cards = document.getElementById('cards');
// let card = 
for(let i = 0; i < name__logo__car.length; i++){
    cards.innerHTML += `
        <div class="card">
            <div class="card__wrapper">
                <div class="card__header__wrapper">
                <div class="card__header">
                    <div class="logo__car">
                    <img src="img/hero2/${name__logo__car[i]}.png" alt="логотип бмв" width="100%">
                    </div>
                    <h3 class="name__car">${name__car[i]}</h3>
                </div>
                </div>
                <div class="card__image">
                <img src="img/hero2/card__image${i+2}.png" alt="изображение авто на карточке" width="100%">
                </div>
                <div class="properties__car">
                <div class="one__property__car">
                    <div class="property__image">
                    <img src="img/hero2/property__1__image.png" alt="изображение свойства">
                    <p class="property__year">${year[i]}</p>
                    </div>
                    <p class="property__name">год</p>
                </div>
                <div class="one__property__car">
                    <div class="property__image">
                    <img src="img/hero2/property__2__image.png" alt="изображение свойства">
                    </div>
                    <p class="property__name">автомат</p>
                </div>
                <div class="one__property__car">
                    <div class="property__image">
                    <img src="img/hero2/property__3__image.png" alt="изображение свойства">
                    <p class="engine__capacity">${engine__capacity[i]}</p>
                    </div>
                    <p>${engine__power[i]}</p>
                </div>
                <div class="one__property__car">
                    <div class="property__image">
                    <img src="img/hero2/property__4__image.png" alt="изображение свойства">
                    </div>
                    <p class="property__name">${type__fuel[i]}</p>
                </div>
                </div>
                <div class="rental__price">
                <p>от ${price[i]} р. / сутки</p>
                </div>
                <div class="a__rental">
                <a href="page__card.html"><button>Арендовать авто</button></a>
                </div>
            </div>
        </div>
    `;
}