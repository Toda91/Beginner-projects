  <script>
        var first = prompt("Enter first name");
        var first = prompt("Enter second name");
        var firstNumber = prompt("Please type any number");

        alert(Number(firstNumber) + Number(secondNumber));



        var menu = document.getElementById('menu');
        var nav = document.getElementById('nav');
        var exit = document.getElementById('exit');

        menu.addEventListener('click', function(e) {
            nav.classList.toggle('hide-mobile');
            e.preventDefault();
        });

        exit.addEventListener('click', function(e) {
            nav.classList.add('hide-mobile');
            e.preventDefault();
        });

    </script>
