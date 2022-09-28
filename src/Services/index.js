export const getMeals = (input, radio) => {
  switch (radio) {
  case 'ingredient':
    return `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
  case 'name':
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  case 'first-letter':
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    } else {
      return `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
    }
  default:
  }
};

export const getDrinks = (input, radio) => {
  switch (radio) {
  case 'ingredient':
    return `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${input}`;
  case 'name':
    return `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  case 'first-letter':
    if (input.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      break;
    } else {
      return `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`;
    }
  default:
  }
};

export const fetchMeals = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data;
};

export const fetchDrinks = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const data = await response.json();
  return data;
};

export const fetchMealsByCategory = async (value) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
  const data = await response.json();
  return data;
};

export const fetchDrinksByCategory = async (value) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
  const data = await response.json();
  return data;
};

export const fetchMealsCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data;
};

export const fetchDrinksCategories = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data;
};

const searchAPI = async (api, input, radio) => {
  const URL = api(input, radio);
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export default searchAPI;
