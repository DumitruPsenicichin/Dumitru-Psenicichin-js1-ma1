const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1

let cat = {
    complain: function (){
        console.log("Meow!");
    }
}
cat.complain();

//Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading");

//Question 5

let paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}

//Question 6

let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.color = "yellow";

//Question 7

let nameOfPet;
function loopOverList(list){
 for(let i = 0; i < list.length; i++){
     nameOfPet = list[i].name;
     console.log(nameOfPet);
 }
}

loopOverList(cats);

 //Question 8
let catList = document.querySelector(".cat-container");
function createCats(){
    for(i = 0; i < cats.length; i++){
        let catAge = "Unknown age";
        if(!cats[i].age){
            cats[i].age = catAge;
        }
        catList.innerHTML += `<div>
        <h5>${cats[i].name}</h5>
        <p>${cats[i].age}</p>
        </div>`;
    }
    return catList;
}

 
createCats(cats)
   