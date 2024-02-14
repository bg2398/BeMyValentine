// index.js
$(document).ready(function () {
    // Set your password
    const correctPassword = '11/25/2016';

    $('.title').click(function () {
        $('#passwordModal').fadeIn(); // Show the password modal
        $('#passwordInput').val(''); // Clear any previous input
    });

    $('#passwordSubmit').click(function () {
        const enteredPassword = $('#passwordInput').val();

        if (enteredPassword === correctPassword) {
            // Password is correct, show the content
            $('.container').addClass('open');
            $('.bgoverlay').removeClass('bg-default').addClass('bg-special');
            $('#passwordModal').fadeOut(); // Hide the password modal
        } else {
            // Password is incorrect, show an alert
            alert('Incorrect password. Access denied.');
        }
    });

    $('.close').click(function () {
        $('.container').removeClass('open');
        $('.bgoverlay').removeClass('bg-special').addClass('bg-default');
        removeHearts();
        hideAdditionalContent(); // Hide additional content when closing
    });

    $('.roses').click(function () {
        createHearts();
        showAdditionalContent(); // Show additional content when "Yes" button is clicked
        setTimeout(hideAdditionalContent, 5000); // Hide additional content after 5000 milliseconds (adjust as needed)
    });

    function showAdditionalContent() {
        $('.additional-content').fadeIn(5000, function () {
            // Animation complete callback
            setTimeout(hideAdditionalContent, 5000); // Hide additional content after 5000 milliseconds (adjust as needed)
        });
    }

    function hideAdditionalContent() {
        $('.additional-content').fadeOut(); // Hide the additional content
    }
});





function createHearts() {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < 10; i++) {
        const heart = $('<div class="heart css-heart"></div>');
        const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">' +
            '<g>' +
            '   <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 ' +
            '       s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 ' +
            '       C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 ' +
            '       l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>' +
            '   <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56 ' +
            '       s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21 ' +
            '       C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 ' +
            '       l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>' +
            '   <g>' +
            '       <path fill="#394240" d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0 ' +
            '           c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9 ' +
            '           c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172 ' +
            '           c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977 ' +
            '           c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586 ' +
            '           c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7 ' +
            '           c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677 ' +
            '           l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>' +
            '       <path fill="#394240" d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1 ' +
            '           C58,15.478,53.522,11,48,11z"/>' +
            '   </g>' +
            '</g>' +
            '</svg>';

        const objectTag = $('<object data="data:image/svg+xml,' + encodeURIComponent(svgCode) + '" type="image/svg+xml"></object>');
        heart.append(objectTag);
        $('.container').append(heart);

        gsap.from(heart, {
            x: Math.random() * window.innerWidth,
            y: -windowHeight, // Start from above the viewport
            duration: 8, // Adjust the duration as needed
            ease: 'power2.out',
            onComplete: () => {
                heart.remove();
            }
        });
    }
}

function removeHearts() {
    $('.heart').remove();
}
