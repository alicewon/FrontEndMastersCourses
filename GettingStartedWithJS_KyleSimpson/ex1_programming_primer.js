//FEMasters: Getting Started with JS v2 (Kyle Simpson), Exercise 1

// 1. Define an `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.

// 2. If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the `favoriteBooks` array.

// 3. Define a `printFavoriteBooks()` function that receives no parameters.

// 4. `printFavoriteBooks()` should first print a message like "Favorite Books: ..", and include the number of books in the `favoriteBooks` array.

// 5. Finally, `printFavoriteBooks()` should loop through the `favoriteBooks` array and print out each value.


var favoriteBooks = [];

function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      favoriteBooks.push(bookName)
  }
}

function printFavoriteBooks() {
  console.log(
     `Favorite Books: ${favoriteBooks.length}`
  )
  
  for (let bookName of favoriteBooks) {
    console.log(bookName)
  }
}

// function printFavoriteBooks() {
//   return `Favorite Books:` + {favoriteBooks.length}
// }

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks()