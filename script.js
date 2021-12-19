const blogTitles = document.getElementsByTagName("h3");
for (const h3 of blogTitles) {
    console.log(h3.innerText)
}

const blogDetails = document.getElementsByTagName("p");
for (const p of blogDetails) {
    console.log(p.innerText)
}

//Explore by getELementById
const secondTitle = document.getElementById("second-title");
secondTitle.style.backgroundColor = "green";
secondTitle.style.textAlign = "center";
secondTitle.style.fontSize = "20px";
secondTitle.innerText = "This my second blog title";
secondTitle.style.fontFamily = "Courier New, Courier, monospace";
secondTitle.style.border = "3px solid orange";
secondTitle.style.padding = "10px";
secondTitle.style.margin = "20px";
secondTitle.style.borderRadius = "20px";
secondTitle.style.color = "white";
console.log(secondTitle.parentNode);


//Explore by querySelector
const titleBlog = document.querySelector("#second-title");
titleBlog.style.backgroundColor = "purple"

//Explore by querySelectorAll
const blogsBy = document.querySelectorAll(".title");
for (const blogBy of blogsBy) {
    blogBy.style.backgroundColor = "blue"
}

const secondBlog = document.querySelector("#second-blog p");
secondBlog.style.color = "white"

//Create an element
const li = document.createElement("li");
li.innerText = "Blog-5";

//Where to add
const ul = document.getElementById("blog-list");

//Append new elements
ul.appendChild(li);


//Add artical

const article = document.createElement("article");
article.classList.add("title");
const h3 = document.createElement("h3");
h3.innerText = "My awesome blog-4";
const p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, autem odio veritatis vero ducimus quisquam perferendis similique commodi totam officiis!";
//Append childs in the artical
article.appendChild(h3);
article.appendChild(p)

//Find parent of artical

const blogSection = document.getElementById("blogs");
blogSection.appendChild(article);

//Explore by getElementsByClassName
let blogs = document.getElementsByClassName("title");
for (const blog of blogs) {
    blog.style.color = "red";
    blog.style.backgroundColor = "black";
    blog.style.padding = "10px";
    blog.style.margin = "20px";
}