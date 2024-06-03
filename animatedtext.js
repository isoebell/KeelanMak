let string = `Keelan's shop is coming soon`;
        let additionalString = `listen to 'Boy's In Love' while you wait`;
        let currentCharacter = 0;
        let customFont;
        let backgroundImage; // Variable to hold the background image

        function preload() {
            customFont = loadFont('data/ChivoMono-VariableFont_wght.ttf'); // Load your custom font
            backgroundImage = loadImage('data/zinecover.jpg'); // Load the background image
        }

        function setup() {
            createCanvas(windowWidth, windowHeight);
            
            // Calculate text size based on window dimensions
            let textSizeFactor = min(width, height) * 0.03; // Adjust the factor as needed
            textSize(textSizeFactor);
            
            textFont(customFont);
            textAlign(CENTER, CENTER);
        }

        function draw() {
            // Calculate the aspect ratio of the background image
            let aspectRatio = backgroundImage.width / backgroundImage.height;
            
            // Calculate the scaled dimensions of the background image to fit the canvas while maintaining aspect ratio
            let scaledWidth = width;
            let scaledHeight = scaledWidth / aspectRatio;
            
            // Draw the background image centered on the canvas with scaled dimensions
            image(backgroundImage, 0, (height - scaledHeight) / 2, scaledWidth, scaledHeight);
            
            // Draw the first part of the text
            fill(134, 163, 230);
            let currentString = string.substring(0, currentCharacter);
            text(currentString, width / 2, height / 2.6);
            
            // If the first part of the text is fully typed, start typing the additional string
            if (currentCharacter >= string.length) {
                fill(134, 163, 230);
                let additionalCurrentString = additionalString.substring(0, currentCharacter - string.length);
                text(additionalCurrentString, width / 2, height / 2.1 ); // Adjust the vertical position using percentage
            }
            
            currentCharacter += 0.06;
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
        }