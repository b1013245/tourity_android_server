/**
 * お試しでJSONファイルを出力する
 */
var _http = require('http');

/**
* サーバからクライアントへ送る閲覧画面に必要なデータの生成
*/
function createArray(post_id, user_id, message, rated_count, image_path, movie_path, latitude, longitude, uptime){
	var array = {
			'post_id':post_id,
			'user_id':user_id,
			'rated_count':rated_count,
			'image_path':image_path,
			'movie_path':movie_path,
			'latitude':latitude,
			'longitude':longitude,
			'uptime':uptime};
	return array;
}

_http.createServer(function(req, res){
	var ary1 =  createArray(1, 1, 'Hello, world', 100, 'http://hogehoge.co.jp/hoge.png', null, 36.0, 136.5, '2015-10-06 18:18:18');
	var ary2 =  createArray(2, 2, 'Hello, android', 0, 'http://hogehoge.co.jp/hoge2.png', null, 37.0, 134.5, '2015-10-06 18:20:18');
	var ary3 =  createArray(3, 3, 'Hello, javascript', 100, null, 'http://hogehoge.co.jp/hoge3.mp4', 32.0, 137.5, '2015-10-06 18:21:18');
	var json = [ary1, ary2, ary3];
	res.writeHead(200, {'Content-Type':'application/json; charset=utf8'});
	res.end(JSON.stringify(json));
}).listen(5858);

