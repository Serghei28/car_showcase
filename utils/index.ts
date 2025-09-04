import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-API-Key':
        'i+l+psNV+1EqCHNVgYjgGA==PiLjFqfYz798Lcjt',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response =await fetch(     'https://api.api-ninjas.com/v1/cars?model=camry',
{
        headers: headers,
    });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
};
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const{make, model, year} = car;
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", car.make);
    url.searchParams.append("modelFamily", car.model.split(' ')[1]|| car.model);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);
    return `${url}`;
}