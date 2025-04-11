import Bakery from '~/assets/icons/bakery.svg?react';
import Bbq from '~/assets/icons/bbq.svg?react';
import ChildDishes from '~/assets/icons/child-dishes.svg?react';
import Drinks from '~/assets/icons/drinks.svg?react';
import FirstCourse from '~/assets/icons/first-course.svg?react';
import LocalDishes from '~/assets/icons/local-dishes.svg?react';
import MainCourseIcon from '~/assets/icons/main-course.svg?react';
import Salad from '~/assets/icons/salad.svg?react';
import Sauces from '~/assets/icons/sauces.svg?react';
import Snacks from '~/assets/icons/snacks.svg?react';
import TherapeuticNutrition from '~/assets/icons/therapeutic-nutrition.svg?react';
import Vegan from '~/assets/icons/vegan.svg?react';
import Workpieces from '~/assets/icons/workpieces.svg?react';

export const menuItems = [
    {
        label: 'Салаты',
        icon: <Salad />,
        paths: [
            { linkLabel: 'Мясные салаты', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Рыбные салаты', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Овощные салаты', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Теплые салаты', path: '/vegan-cuisine/main-course' },
        ],
    },
    {
        label: 'Закуски',
        icon: <Snacks />,
        paths: [
            { linkLabel: 'Мясные закуски', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Рыбные закуски', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Овощные закуски', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Бутреброды', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Фастфуд', path: '/vegan-cuisine/main-course' },
        ],
    },
    {
        label: 'Первые блюда',
        icon: <FirstCourse />,
        paths: [
            { linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Овощные овощные', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Бульоны', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Холодные супы', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Диектические супы', path: '/vegan-cuisine/main-course' },
        ],
    },
    {
        label: 'Вторые блюда',
        icon: <MainCourseIcon />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Десерты, выпечка',
        icon: <Bakery />,
        paths: [
            { linkLabel: 'Блины и оладьи', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Пироги и пончики', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Торты', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Рулеты', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Кексы и маффины', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Сырники и ватрушки', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Из слоеного теста', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Из заварного теста', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Из дрожжевого теста', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Булочки и сдоба', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Хлеб', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Тесто на пиццу', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Кремы', path: '/vegan-cuisine/main-course' },
        ],
    },
    {
        label: 'Блюда на гриле',
        icon: <Bbq />,
        paths: [
            { linkLabel: 'Говядина', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Свинина', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Птица', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Рыба', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Грибы', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Овощи', path: '' },
        ],
    },
    {
        label: 'Веганская кухня',
        icon: <Vegan />,
        paths: [
            { linkLabel: 'Закуски', path: '/vegan-cuisine/snacks' },
            { linkLabel: 'Первые блюда', path: '/vegan-cuisine/first-course' },
            { linkLabel: 'Вторые блюда', path: '/vegan-cuisine/main-course' },
            { linkLabel: 'Гарниры', path: '/vegan-cuisine/first-course' },
            { linkLabel: 'Десерты', path: '/vegan-cuisine/first-course' },
            { linkLabel: 'Выпечка', path: '/vegan-cuisine/first-course' },
            { linkLabel: 'Сыроедческие блюда', path: '/vegan-cuisine/first-course' },
            { linkLabel: 'Напитки', path: '/vegan-cuisine/first-course' },
        ],
        testId: 'vegan-cuisine',
    },
    {
        label: 'Детские блюда',
        icon: <ChildDishes />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Лечебное питание',
        icon: <TherapeuticNutrition />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Национальные',
        icon: <LocalDishes />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Соусы',
        icon: <Sauces />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Напитки',
        icon: <Drinks />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
    {
        label: 'Заготовки',
        icon: <Workpieces />,
        paths: [{ linkLabel: 'Мясные супы', path: '/vegan-cuisine/main-course' }],
    },
];
