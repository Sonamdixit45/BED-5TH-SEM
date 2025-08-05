let backgroundColor = document.getElementById("colorPickerContainer");
        let btnEl = document.getElementById("btn");
        let stopBtnEl = document.getElementById("stopBtn");
        let colours = ["red", "black", "green", "yellow", "blue", "brown", "pink", "violet", "skyblue", "orange"];
        let intervalId = null;

        function generateRandomColor() {
            let index = Math.floor(Math.random() * colours.length);
            let randomColor = colours[index];
            backgroundColor.style.backgroundColor = randomColor;
        }

        btnEl.addEventListener("click", function () {
            if (!intervalId) { // prevent multiple intervals
                intervalId = setInterval(generateRandomColor, 1000);
            }
        });

        stopBtnEl.addEventListener("click", function () {
            clearInterval(intervalId);
            intervalId = null;
        });

        //how to send fetch requsst thorugh.. add new todo at server