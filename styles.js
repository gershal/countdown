        // Countdown to May 1, 2025
        function updateCountdown() {
            const launchDate = new Date('May 1, 2025 00:00:00').getTime();
            const now = new Date().getTime();
            const distance = launchDate - now;

            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display results
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            // If launch date passed
            if (distance < 0) {
                clearInterval(countdownTimer);
                document.getElementById('countdown').innerHTML = '<div class="countdown-number">Launched!</div>';
            }
        }

        // Update every second
        updateCountdown();
        const countdownTimer = setInterval(updateCountdown, 1000);

        // Form handling
        document.getElementById('signup-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // In a real implementation, you would send this to your email service
            console.log('Email submitted:', email);
            
            // Show confirmation
            alert(`Thanks! We'll notify you at ${email} when we launch.`);
            this.reset();
        });
    
