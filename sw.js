// Evento de Instalação
self.addEventListener('install', (event) => {
  console.log('SW: Instalado');
  self.skipWaiting();
});

// Evento de Ativação
self.addEventListener('activate', (event) => {
  console.log('SW: Ativo');
});

// Evento de Busca (Fetch) - O que você já tinha, mas melhorado
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("Você está offline, mas o app está pronto!");
    })
  );
});
