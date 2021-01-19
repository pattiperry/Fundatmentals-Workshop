export function Movie (movieObject) {
    return`
    <div class="movie-card">
        <p>${movieObject.title}</p>
        <p>${movieObject.director}</p>
        <img class="movie-card_image" src="${movieObject.image}" alt="movie"/>
    </div>
    `
}//builds a function with an html component that i can apply to all the data



// this shows the entire object in the data provider
//     <div class="movie-card">
//         <p>${movieObject.id}</p>
//         <p>${movieObject.title}</p>
//         <p>${movieObject.director}</p>
//         <img class="movie-card_image" src="${movieObject.image}" alt="movie"/>
//         <p>${movieObject.rank}</p>
//     </div>