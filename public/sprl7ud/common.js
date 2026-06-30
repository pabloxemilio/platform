function parseMessage(str) {
	// 取出前缀数字
	const match = str.match(/^(\d+)(.*)$/);
	if (!match) return null;

	const code = Number(match[1]);
	const rest = match[2];

	if (!rest) {
		// 没有内容，直接返回
		return [code];
	}

	try {
		// 优先尝试 JSON 解析（数组/对象都行）
		return [code, JSON.parse(rest)];
	} catch (e) {
		// 如果不是标准 JSON（比如 {a:123} 没引号），再尝试 Function hack
		try {
			// 用 Function 转换成合法对象
			const val = new Function("return " + rest)();
			return [code, val];
		} catch (err) {
			// 都失败就原样返回
			return [code, rest];
		}
	}
}
function stringifyMessage(arr) {
	if (!Array.isArray(arr) || arr.length === 0) return "";

	const code = arr[0]; // 前缀数字
	const payload = arr[1]; // 可能是对象 / 数组 / 空

	if (payload === undefined) {
		return String(code);
	}

	if (typeof payload === "string") {
		return code + payload;
	}

	try {
		// 优先 JSON.stringify
		return code + JSON.stringify(payload);
	} catch (e) {
		return code + String(payload);
	}
}

const DEBUG = Number(window.localStorage.getItem("debug")) || false;

/*
 * 解密 AES/ECB/PKCS5Padding 加密的二进制数据
 * @param encryptedBytes Uint8Array 从 WebSocket 收到的 binary 数据
 * @param keyStr 密钥（需与后端一致，16/24/32字节）
 */

function decryptAesEcb(encryptedBytes, keyStr) {
	const keyStr2 = keyStr;
	const key = CryptoJS.enc.Utf8.parse(window.c111);
	const encryptedWordArray = CryptoJS.lib.WordArray.create(encryptedBytes);
	const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedWordArray }, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	return decrypted.toString(CryptoJS.enc.Utf8);
}

/*
 * 加密字符串为二进制（发送用）
 */
function encryptAesEcb(plainText, keyStr) {
	const keyStr2 = keyStr;
	const key = CryptoJS.enc.Utf8.parse(window.c111);
	const encrypted = CryptoJS.AES.encrypt(plainText, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7,
	});
	const wordArray = encrypted.ciphertext;
	const byteArray = new Uint8Array(wordArray.sigBytes);
	for (let i = 0; i < wordArray.sigBytes; i++) {
		byteArray[i] = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	}
	return byteArray;
}

window.sx_encrypt = (t) => {
	const md = parseMessage(t);

	DEBUG && console.error(new Date().getTime(),"发送数据: ", t);
	if (window.env.VITE_IS_ENCRYPT == 1) {
		t = encryptAesEcb(t, Date());
	}

	return t;
};

window.sx_decode = (t) => {
	if (window.env.VITE_IS_ENCRYPT == 1) {
		const encryptedBytes = new Uint8Array(t);
		t = decryptAesEcb(encryptedBytes, Date());
	}

	const md = parseMessage(t);

	DEBUG && console.error(new Date().getTime(),"接收数据: ", t);
	return t;
};
