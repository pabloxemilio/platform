function showMessage(content, duration) {
  // 创建提示框元素
  const box = document.createElement('div');
  box.textContent = content;
  Object.assign(box.style, {
    position: 'fixed',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#d07206',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '16px',
    zIndex: 9999,
		boxShadow: '8px 0px 8px #00000080',
    opacity: 0,
		width:"90%",
    transition: 'opacity 0.3s'
  });

  document.body.appendChild(box);

  // 触发显示动画
  requestAnimationFrame(() => {
    box.style.opacity = 1;
  });

  // 定时移除
  setTimeout(() => {
    box.style.opacity = 0;
    setTimeout(() => box.remove(), 300);
  }, duration);
}
window.showMessage = showMessage
// 用法示例：
// showMessage('操作成功', 2000);

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
	if (md?.[1] && md?.[1]?.[1]?.action == "bet" && window.coupon.activeMode == 1) {
		console.log("xaizzhu");
		
		const couponData = window?.coupon||{}
		if(couponData.activeMode==1&&couponData.data?.id&&couponData.data?.num==0){
			setTimeout(() => {
				window.$bus?.emit('handleMode',0)
			showMessage("Out of free plays! Your winnings are in the BONUS account! Now in CASH mode — keep playing!",6000)
			}, 2000);
		}

		if (window.coupon?.data?.id) {
			md[1][1].payload.couponId = window.coupon.data.id;
			t = stringifyMessage(md);
			console.log("处理过的", t);
			setTimeout(() => {
				window.$bus.emit("getCouponInfo");
			}, 1000);
		}
	}

	DEBUG && console.log("发送数据: ", t);
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

	// 处理下注金额
	if (md?.[1] && md?.[1][0] == "betsConfig") {
		console.log(md[1][1]["INR"]);
		if (window.coupon.activeMode == 1) {
			const amount = window.coupon.data.amount||10
			md[1][1]["INR"].defaultBetAmount = amount;
			md[1][1]["INR"].maxBetAmount = amount;
			md[1][1]["INR"].minBetAmount = amount;
			md[1][1]["INR"].maxWinAmount = amount;
			t = stringifyMessage(md);
		}
	} else if (md?.[1] && md?.[1]?.[0]?.isFinished == true && md?.[1]?.[0]?.winAmount) {
		// 处理bouns赢金
		const data = md[1][0];
		window.coupon.winAmount = Number(Number(window.coupon.winAmount) + Number(data.winAmount));
		if (window.coupon.activeMode == 1) window.$bus.emit("getCouponInfo");
	} else if (md?.[1]?.[0]?.couponId && window.coupon.activeMode == 1) {
		window.$bus.emit("getCouponInfo");
	}

	DEBUG && console.log("接收数据: ", t);
	return t;
};
