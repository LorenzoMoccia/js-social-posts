const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//------------ELEMENTS & VARIABLES---------//
const node = document.getElementById("container");
node.parentNode.removeChild(node);

//Array liked post
const likedPostArray = [];

for(let i = 0; i < posts.length; i++){
    const currentPost = posts[i];

    const clone = node.cloneNode(true);
    document.body.appendChild(clone);

    //Autore post
    const authorElement = document.getElementsByClassName("post-meta__author")[i];
    //Img author
    const imageElement = document.getElementsByClassName("post-meta__icon")[i];
    imageElement.classList.add("profile-pic-default");
    //Descrizione post
    const descriptionElement = document.getElementsByClassName("post__text")[i];
    //Immagine post
    const postImage = document.getElementsByClassName("post__image")[i];
    //Likes post
    const postLikes = document.getElementsByClassName("likes__counter")[i];
    //Data
    const postDate = document.getElementsByClassName("post-meta__time")[i];


    //MODIFICO L'HTML
    authorElement.innerHTML = currentPost.author.name;
    imageElement.innerHTML = `<img src="${currentPost.author.image}"></img>`
    descriptionElement.innerHTML = currentPost.content;
    postImage.innerHTML = `<img src="${currentPost.media}"></img>`
    postLikes.innerHTML = currentPost.likes;
    postDate.innerHTML = formatDate(currentPost.created);
    
    //Milestone 2
    const likeBtn = document.getElementsByClassName("like-button")[i];

    likeBtn.addEventListener("click", function(){

        likeBtn.classList.add("like-button--liked");
        postLikes.innerHTML = currentPost.likes + 1;
        console.log(likedPostArray);
        likedPostArray.push(currentPost.id);
    });


    
}



function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }
  

  