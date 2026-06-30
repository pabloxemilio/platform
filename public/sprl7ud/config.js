// Platform override of sprlbegaming config.
// Point the game's WebSocket + REST at OUR server, same-origin, under a unique
// path prefix (/su) so it doesn't collide with the Aviator /api/game/websocket.
// AES disabled (VITE_IS_ENCRYPT=0) -> plaintext JSON {route,data,timestamp}.
const b11 = "2Aekk4Lm9dJlk3kD";
window.c111 = b11;
window.env = window.env || {};
var _wsProto = location.protocol === 'https:' ? 'wss' : 'ws';
window.env.VITE_API_ENDPOINT = location.origin + '/su';
window.env.VITE_API_WS = _wsProto + '://' + location.host + '/su';
window.env.VITE_IS_ENCRYPT = 0;
