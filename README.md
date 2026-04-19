# Credit Card Validator

Бейджик сборки: [![build](https://github.com/sergetfep/credit-card-validator/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/sergetfep/ahj-testing-credit-card-validator/actions/workflows/ci.yml)

Ссылка на Github Pages: [Виджет для проверки номера банковской карты](https://sergetfep.github.io/credit-card-validator/)

## Описание

Виджет для проверки номера банковской карты.

Что сделано:

- определение платёжной системы по префиксу номера;
- проверка номера карты по алгоритму "Luhn";
- выделение найденной платёжной системы в интерфейсе;
- unit-тесты для проверки номера и определения платёжной системы.

Поддерживаемые платёжные системы:

- Visa
- MasterCard
- American Express
- Discover
- JCB
- Diners Club
- Мир

## Команды

```bash
npm i
npm start
npm run build
npm run lint
npm test
```

## Источники

- задание из README
- алгоритм [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm)
- [FreeFormatter](https://www.freeformatter.com/credit-card-number-generator-validator.html) (тестовые номера и диапазоны)
- для поиска изображений использован сервис [icons8.ru](https://icons8.ru/icons)
- пример e2e из каталога `testing/e2e`

## Ссылка за задание

Ссылка: [4.Организация тестирования](https://github.com/netology-code/ahj-homeworks/tree/AHJ-50/testing)
