fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log('first data', data);
        if (data.id === 2) {
            const ul = document.querySelector('ul')
            const li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = 'first ul'
            document.body.appendChild(li);

        } else {
            const p = document.createElement('p');
            p.textContent = 'This is a error message'
            p.style.color = 'red';
            document.body.appendChild(p)
        }
    })