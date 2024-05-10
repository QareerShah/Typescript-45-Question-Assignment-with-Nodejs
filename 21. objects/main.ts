interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
    mileage: number;
}

let myCar: Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 15000
};

console.log(myCar);