import { DateFormatter } from '@angular/common/src/pipes/intl';
/**
 * meal object
 */
export class Meal{
    constructor(
        public _id: any,
        public imageName: string,
        public name: string,
        public description: string,
        public contributor: string,
        public ingredients: string[],
        public contributionDate: DateFormatter,
        public estimatedCalories: number,
        public directions: string,
        public category: string,
        public likes: number
    ){}
}

/*db.meals.insert(
[
    {
    imageName:"baked_turkey_wrap.jpg",
    name: "Baked Turkey Wrap",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Turkey",
    likes: 10
},
{
    imageName:"baked_turkey_wrap.jpg",
    name: "Tacos",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Turkey",
    likes: 20
},
{
    imageName:"baked_turkey_wrap.jpg",
    name: "Pulled Pork",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Pork",
    likes: 30
},
{
    imageName:"baked_turkey_wrap.jpg",
    name: "Chicken Wrap",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Turkey",
    likes: 40
},
{
    imageName:"baked_turkey_wrap.jpg",
    name: "Goat Burger",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Chicken",
    likes: 50
},
{
    imageName:"baked_turkey_wrap.jpg",
    name: "Swarma",
    description: "hasdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    contributor: "Larry Hastings",
    ingredients: ["salt","pepper","chives"],
    contributionDate: "09/01/2017",
    estimatedCalories: 400,
    directions: "adsf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf",
    category: "Chicken",
    likes: 60
},
]
)*/
