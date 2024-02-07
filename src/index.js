console.log("%c HI", "color: firebrick");

// Fetch request for random images
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    displayRandomDogs(data.message);
  });

// Function to display random images
function displayRandomDogs(images) {
  let dogImageContainer = document.querySelector("#dog-image-container");
  images.forEach((imageUrl) => {
    let img = document.createElement("img");
    img.src = imageUrl;
    dogImageContainer.appendChild(img);
  });
}

// Fetch request for a list of all dog breeds
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    displayDogBreeds(data.message);
  });

// Function to display dog breeds in a list
function displayDogBreeds(breeds) {
  let breedList = document.querySelector("#dog-breeds");

  // Add each dog breed to the breed list unordered list
  Object.keys(breeds).forEach((dogBreed) => {
    let listItem = document.createElement("li");
    listItem.textContent = dogBreed;
    listItem.className = "dog-breed-item";
    breedList.appendChild(listItem);

    listItem.addEventListener("click", () => {
      listItem.style.color = "pink";
    });
  });

  let breedDropdown = document.querySelector("#breed-dropdown");

  breedDropdown.addEventListener("change", (event) => {
    let totalBreedListItems = document.querySelectorAll(".dog-breed-item");

    if (event.target.value === "a") {
      console.log("a was here");

      totalBreedListItems.forEach((breedListItem) => {
        if (breedListItem.innerHTML[0] != "a") {
          breedListItem.remove();
        }
      });
    } else if (event.target.value === "b") {
      console.log("b was here");
      totalBreedListItems.forEach((breedListItem) => {
        if (breedListItem.innerHTML[0] != "b") {
          breedListItem.remove();
        }
      });
    } else if (event.target.value === "c") {
      console.log("c was here");
    } else if (event.target.value === "d") {
      console.log("d was here");
    }
  });
}

// function filterBreeds(breeds) {
//   let breedDropdown = document.querySelector("#breed-dropdown");

//   breedDropdown.addEventListener("change", (event) => {
//     console.log(event.target.value);

//     if (event.target.value === "a") {
//       console.log("a was here");
//     } else if (event.target.value === "b") {
//       console.log("b was here");
//     } else if (event.target.value === "c") {
//       console.log("c was here");
//     } else if (event.target.value === "d") {
//       console.log("d was here");
//     }
    // take the list of dog breeds
    // take the event target values (dropdown value)
    // if the event target value is equal to 'a' then delete dog breeds with names don't start with 'a'. prepend
    // if the event target value is equal to 'b' then delete dog breeds with names don't start with 'b". prepend
    // if the event target value is equal to 'c' then delete dog breeds with names don't start with 'c'. prepend
    // if the event target value is equal to 'd' then delete dog breeds with names don't start with 'd'. prepend
//   });
// }

// fetch("https://dog.ceo/api/breeds/image/random/4")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.message.forEach((breed, index) => {
//       // data.message is the array path in the console
//       console.log(index);
//       dogCeo(breed);
//     });
//   });

// let dogImageContainer = document.querySelector("#dog-image-container");

// function dogCeo(breed) {
//   let div = document.createElement("div");
//   div.className = "dog-breeds";

//   let img = document.createElement("img");
//   img.src = breed;

//   div.append(img);
//   dogImageContainer.append(div);
// }

// fetch("https://dog.ceo/api/breeds/list/all")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     // data.message is an object containing breed names
//     Object.keys(data.message).forEach((breeds, index) => {
//       // breed represents the breed name
//       console.log(index);
//       // pass breed name to dogCeo function
//       dogBreeds(breeds);
//     });
//   });

// let breedList = document.querySelector("#dog-breeds");

// function dogBreeds(breeds) {
//   // Create a new list item
//   let listItem = document.createElement("li");
//   // Set the text content of the list item to the breed name
//   listItem.textContent = breeds;
//   // Append the list item to the breedList
//   dogBreeds.appendChild(listItem);
// }

// fetch("https://dog.ceo/api/breeds/list/all")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.message.forEach((breed, index) => {
//       // data.message is the array path in the console
//       console.log(index);
//       dogCeo(breed);
//     });
//   });

// let breedDropdown = document.querySelector("#dog-breeds");

// function dogCeo(breed) {
//   let div = document.createElement("div");
//   div.className = "dog-breeds";

//   let img = document.createElement("img");
//   img.src = breed;

//   div.append(img);
//   breedDropdown.append(div);
// }
