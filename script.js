const postsTable = document.getElementById('posts');
const productsTable = document.getElementById('products');
const todosTable = document.getElementById('todos');
const tbody1 = document.getElementById('posts-output');
const tbody2 = document.getElementById('products-output');
const tbody3 = document.getElementById('todos-output');
// the function is attached to button, when clicked it will be called.
async function promiseChain(){
    // logic goes here
    postsTable.style.display='none';
    productsTable.style.display='none';
    todosTable.style.display='none';

    try{
        // start chaining the promise hereusing async await;
        await PromiseAPI1();
        postsTable.style.display='block';

        await PromiseAPI2();
        productsTable.style.display='block';

        await PromiseAPI3();
        todosTable.style.display='block';
    }catch(error){
        console.log(error);
    }

}

// Once the fetch returns the data and it's displayed on the screen, resolve the promise.
// Move to the next promise function only when the previous promise is resolved. Use an if condition before returning the next promise.
// The flow should be: button click → promiseAPI1() → promiseAPI2() → promiseAPI3().
// Implement promise chaining using either the ".then()" method or async/await.

// create three promise
function PromiseAPI1(){
    // promise api 1
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
            .then(resolve => resolve.json())
            .then(data => {
                // logic to display the table data on ui
                tbody1.innerHTML = '';
                data.posts.map(post => {
                    tbody1.innerHTML += `
                    <tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                        <td>${post.body}</td>
                        <td>${post.reactions.likes}/${post.reactions.dislikes}</td>
                        <td>${post.views}</td>
                    </tr>
                    `;
                })
            })
            .catch(err => {
                console.log(err);
            });
            resolve();
        }, 1000);
    })
}
function PromiseAPI2(){
    // promise api 2
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
            .then(resolve => resolve.json())
            .then(data => {
                // logic to display the data on ui
                tbody2.innerHTML='';
                data.products.map(product => {
                    tbody2.innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.image}</td>
                        <td>${product.title}</td>
                        <td>${product.description}</td>
                        <td>${product.price}</td>
                        <td>${product.rating}</td>
                    </tr>
                    `;
                })
            })
            .catch(err => {
                console.log(err);
            });
            resolve();
        }, 2000);
    })
}
function PromiseAPI3(){
    // promise api 3
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
            .then(resolve => resolve.json())
            .then(data => {
                tbody3.innerHTML='';
                data.todos.map(todo => {
                    tbody3.innerHTML += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.todo}</td>
                        <td>${todo.completed ? "Completed": "Not Completed"}</td>              
                    </tr>
                    `;
                })
            })
            .catch(err => {
                console.log(err);
            });
            resolve();
        }, 3000);
    })
}
