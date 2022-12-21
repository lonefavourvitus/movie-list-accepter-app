        // creating our variables
        const container = document.querySelector('.container')
        let addBtn = document.querySelector('.add-button')
        var form = document.querySelector('form')

        // creating our function
        function insert(e) {
            const regex = /^[a-zA-Z0-9.-]+$/;
            var textField = document.getElementById("texty").value
            var errorBox = document.querySelector(".err-message");
            const nullify = "j"
            console.log(nullify)
            if (textField == "" || textField == " ") {
                errorBox.style.opacity = 1
                errorBox.style.margin = "0.99rem 5rem"
                errorBox.style.position = "absolute"
                errorBox.textContent = 'Please type in a movie name, The input field is empty.';
                setTimeout(() => {
                    errorBox.style.opacity = 0
                    errorBox.style.margin = 0
                }, 4000);
                e.preventDefault();
            } else if (!regex.test(textField)) {
                errorBox.style.opacity = 1
                errorBox.style.margin = "0.99rem 5rem"
                errorBox.style.position = "absolute"
                errorBox.textContent = 'Please type in a valid movie name, your input does not look like the name of a movie.';
                setTimeout(() => {
                    errorBox.style.opacity = 0
                    errorBox.style.margin = "-50px"
                }, 4000);
                e.preventDefault();

            } else {
                // create our div(this will be our main entry point) which will contain other elements(remove-btn, movie-wrapper, movie-name etc)
                const div = document.createElement('div')
                div.classList.add('movie-wrapper')

                // create our image element
                const img = document.createElement('img')

                // if (textField.includes('-'))
                img.setAttribute('alt', textField)
                img.classList.add('img-resize')
                setTimeout(() => {
                    {
                        img.setAttribute('src', textField + '.jpg')
                        img.style.opacity = 1
                    }
                }, 2000);

                // create a wrapper for our li and remove-button
                const liAndRemoveBtnWrapper = document.createElement('div')
                liAndRemoveBtnWrapper.classList.add('li-and-remove-btn-wrapper')

                // create our list item
                const listItem = document.createElement('li')
                listItem.classList.add('list-items')

                // create our remove-button element(for removing/deleting movies)
                const removeBtn = document.createElement('button')

                // create an event listener for our remove button
                removeBtn.addEventListener('click', removeMovie)


                // it's function(remove/delete movie)
                function removeMovie(e) {
                    if (e.target === 'button') {
                        div.style.opacity = 0;
                        setTimeout(() => {
                            div.style.display = 'none';
                        }, 400)

                    } else {
                        div.style.opacity = 0;
                        setTimeout(() => {
                            div.style.display = 'none';
                        }, 400)
                    }
                };

                // updating our movie name from the input field
                listItem.textContent = textField

                // append our created elements to the DOM
                div.append(img)
                liAndRemoveBtnWrapper.append(listItem)
                liAndRemoveBtnWrapper.append(removeBtn)
                div.append(liAndRemoveBtnWrapper)
                container.append(div)

                // give a textual relevance to our remove-button
                removeBtn.textContent = 'Remove Movie'

                // prevent our add-movie button from refreshing our page as it is it's default behaviour when clicked
                e.preventDefault()
                // if (form.value === '') { form.value = 'iui' }
            }
        };
        // function insert ends here


        // create an event listener for our add-movie button
        addBtn.addEventListener('click', insert);