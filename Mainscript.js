document.addEventListener('DOMContentLoaded', function () {
  // Show the loading screen
  document.getElementById('loading-screen').style.display = 'flex';
});

window.addEventListener('load', function () {
  // Hide the loading screen
  setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
  }, 1000); // 1 second
  document.body.classList.add('loaded');
});
var toggleButton = document.getElementById('mode-toggle');
toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('night-mode');
  if (document.body.classList.contains('night-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
  // Add animation when switching modes
  document.body.style.animation = 'changeMode 1s';
  setTimeout(function() {
    document.body.style.animation = '';
  }, 1000);
});

// Add touch interaction for CTA buttons
document.querySelectorAll('.cta-button').forEach(function(button) {
  button.addEventListener('touchstart', function() {
    button.classList.add('active');
  });
  button.addEventListener('touchend', function() {
    button.classList.remove('active');
  });
});

function sendDiscordWebhookMessage(message) {
    // This is just a demo link, replace with your real discord webhook URL.
    const webhookUrl = 'https://discord.com/api/webhooks/1302337565982064743/3wAkaA9o2flMx_7CMVEmLuii9v3_4n4yFSDsVN-KjEqJijRggebw_2enb0cPyVUMaUu9';

    // Embed message
    const payload = {
        embeds: [
            {
                title: 'A user visited website',
                description: message,
                color: 0xFF851A, // Orange Hex color code, you can customize this
                timestamp: new Date().toISOString(),
            },
        ],
    };

    // Send to the Discord webhook
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
}

document.addEventListener('DOMContentLoaded', function() {
    sendDiscordWebhookMessage('A user has visited the site.');
});
