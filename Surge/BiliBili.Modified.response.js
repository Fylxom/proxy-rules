const $ = new Env("📺 BiliBili: 👘 Modified v0.0.1(2) response");
const URL = new URLs();
const DataBase = {
	"Modified":{
		"Settings":{
			"Switch":true,
			"Skin":{
				"user_equip":1682863365001,
				"load_equip":32263
			},
			"Private":{
				"coin":"",
				"bcoin":"",
				"follower":"",
				"level":"",
				"like":"",
				"vip":false
			}
		},
		"Configs":{
			"Skin":{
				"user_equip":[
					{"id": 1680348700001, "name": "幻想乡的日常 第1弹", "preview": "https://i0.hdslb.com/bfs/garb/41f8974a016ccd8e47bc892d945316e227c6e94b.jpg", "ver": "1680573803", "package_url": "https://i0.hdslb.com/bfs/garb/zip/c5d3ceb305754e7b222d67b93ad3de21882c20c4.zip", "data": {"color_mode": "light", "color": "#000000", "color_second_page": "#99C9E3", "tail_color": "#7D4E28", "tail_color_selected": "#B6268C", "tail_icon_ani": "", "tail_icon_ani_mode": "", "head_myself_mp4_play": "loop", "tail_icon_mode": "img", "side_bg_color": ""}},{"id": 1767959964001, "name": "雪狐桑·个性主题", "preview": "https://i0.hdslb.com/bfs/garb/eddc6a5e93fdd25d92b0bec348d460e8273e7147.png", "ver": "1770792226", "package_url": "https://i0.hdslb.com/bfs/garb/zip/c89d07a788b228c44a5a7564a71797ee5999a5d1.zip", "data": {"color_mode": "dark", "color": "#ffffff", "color_second_page": "#BCDFFF", "tail_color": "#6983F0", "tail_color_selected": "#F49ABA", "tail_icon_ani": "", "tail_icon_ani_mode": "", "head_myself_mp4_play": "loop", "tail_icon_mode": "img", "side_bg_color": ""}},{"id": 1778137991001, "name": "学园偶像大师甜蜜时光", "preview": "https://i0.hdslb.com/bfs/garb/e46e91997fff1b16f6e3a2e0042495187553f6d2.jpg", "ver": "1778316014", "package_url": "https://i0.hdslb.com/bfs/garb/zip/b2104a8464625f5f37fad6f1565d1a01d6db9a56.zip", "data": {"color_mode": "dark", "color": "#ffffff", "color_second_page": "#FF99A4", "tail_color": "#8A0000", "tail_color_selected": "#8A0000", "tail_icon_ani": "", "tail_icon_ani_mode": "", "head_myself_mp4_play": "loop", "tail_icon_mode": "img", "side_bg_color": ""}}
				],
				"load_equip":[
					{"id":2531,"name":"初音未来13周年","ver":"1598602035","loading_url":"https://i0.hdslb.com/bfs/garb/item/9b12e8b5cc16a4c2e71e91c43796f09d5e132847.webp"}
				]
			},
			"Private":{
			}
		}
	},
	"Default": {
		"Settings":{"Switch":"true"}
	}
};

/***************** Processing *****************/
(async () => {
	const { Settings, Caches, Configs } = setENV("BiliBili", "Modified", DataBase);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings?.Switch) {
		case true:
		default:
			let url = URL.parse($request?.url);
			const METHOD = $request?.method, HOST = url?.host, PATH = url?.path, PATHs = PATH.split("/");
			// 解析格式
			const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
			$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, `HOST: ${HOST}`, `PATH: ${PATH}`, `FORMAT: ${FORMAT}`, "");
			// 创建空数据
			let body = { "code": 0, "message": "0", "data": {} };
			// 格式判断
			switch (FORMAT) {
				case undefined: // 视为无body
					break;
				case "application/x-www-form-urlencoded":
				case "text/plain":
				case "text/html":
				default:
					break;
				case "text/xml":
				case "text/plist":
				case "application/xml":
				case "application/plist":
				case "application/x-plist":
					break;
				case "text/json":
				case "application/json":
					body = JSON.parse($response.body);
					let data = body.data;
					// 解析链接
					switch (HOST) {
						case "www.bilibili.com":
							break;
						case "app.bilibili.com":
						case "app.biliapi.net":
							switch (PATH) {
								case "x/v2/splash/show": // 开屏页
								case "x/v2/splash/list": // 开屏页
								case "x/v2/splash/brand/list": // 开屏页
								case "x/v2/splash/event/list2": // 开屏页
									break;
								case "x/v2/feed/index": // 推荐页
									break;
								case "x/v2/feed/index/story": // 推荐story页
									break;
								case "x/v2/search/square": // 搜索页
									break;
								case "x/v2/account/myinfo": // 信息页
									if (Settings?.Private?.coin) {
										data.coins = Settings.Private.coin;
									}
									if (Settings?.Private.bcoin) {
										data.bcoin = Settings.Private.bcoin;
									}
									if (Settings?.Private.level) {
										data.level = Settings.Private.level;
									}
									if (Settings?.Private.vip) {
										data.vip = {
											type: 2,
											status: 1,
											due_date: 4102329600000,
											vip_pay_type: 0,
											theme_type: 0,
											label: {
												path: "",
												text: "年度大会员",
												label_theme: "hundred_annual_vip",
												text_color: "#FFFFFF",
												bg_style: 1,
												bg_color: "#FB7299",
												border_color: "",
												use_img_label: true,
												img_label_uri_hans: "",
												img_label_uri_hant: "",
												img_label_uri_hans_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
												img_label_uri_hant_static: "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/VEW8fCC0hg.png"
												},
											avatar_subscript: 1,
											nickname_color: "#FB7299",
											role: 3,
											avatar_subscript_url: "",
											tv_vip_status: 1,
											tv_vip_pay_type: 0
										}
									}
									body.data = data;
									break;
								case "x/v2/account/mine": // 我的页
									if (Settings?.Private?.coin) {
										data.coin = Settings.Private.coin;
									}
									if (Settings?.Private?.bcoin) {
										data.bcoin = Settings.Private.bcoin;
									}
									if (Settings?.Private?.follower) {
										data.follower = Settings.Private.follower;
									}
									if (Settings?.Private?.level) {
										data.level = Settings.Private.level;
									}
									if (Settings?.Private?.vip) {
										data.senior_gate.identity = 2;
										data.senior_gate.member_text = "硬核会员";
										data.vip_type = 2;
										data.achievement = {
											senior_gate_flash:
													{icon: "https://i0.hdslb.com/bfs/activity-plat/static/20220818/367d27000e27de458c114d7ca4ded948/6TQojRgCjO.webp"},
											top_level_flash:
													{icon: "https://i0.hdslb.com/bfs/activity-plat/static/20220818/367d27000e27de458c114d7ca4ded948/t5iD0zNIbM.webp"}
										};
										delete data.vip_section_v2;
										delete data.vip_section;
										data.vip = {
											status: 1,
											avatar_subscript: 1,
											nickname_color: "#FB7299",
											due_date: 4102329600000,
											role: 3,
											vip_pay_type: 0,
											avatar_subscript_url: "",
											label: {
												bg_color: "#FB7299",
												bg_style: 1,
												text: "年度大会员",
												border_color: "",
												path: "",
												image: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
												label_theme: "hundred_annual_vip",
												text_color: "#FFFFFF"
											},
											type: 2,
											themeType: 0,
											theme_type: 0
										};
									}
									body.data = data;
									break;
								case "x/v2/space": // 空间页
									if ($request.headers['x-bili-mid'] === data.card.mid) { //判断为用户本人，其他人不做修改
										if (Settings?.Private?.follower) {
											data.card.fans = Settings.Private.follower;
										}
										if (Settings?.Private?.level) {
											data.card.level_info.current_level = Settings.Private.level;
										}
										if (Settings?.Private?.vip) {
											data.card.level_info.senior_inquiry.inquiry_text = "硬核会员";
											data.card.vip = {
												vipStatusWarn: "",
												vipType: 2,
												dueRemark: "",
												vipDueDate: 4102329600000,
												accessStatus: 0,
												vipStatus: 1,
												themeType: 0,
												label: {
													bg_color: "#FB7299",
													bg_style: 1,
													text: "年度大会员",
													border_color: "",
													path: "",
													image: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
													label_theme: "annual_vip",
													text_color: "#FFFFFF"
												}
											};
										}
										if (Settings?.Private?.like) {
											data.card.likes.like_num = Settings.Private.like;
										}
									}
									body.data = data;
									break;
								case "x/resource/show/skin": // 皮肤页
									data.user_equip = Configs.Skin.user_equip.find(e => {
										if (Settings.Skin.user_equip.toString() === e.id.toString()) {
											$.log("切换皮肤为: "+ e.name);
											return e;
										}
									});
									data.load_equip = Configs.Skin.load_equip.find(e => {
										if (Settings.Skin.load_equip.toString() === e.id.toString()) {
											$.log("切换加载动画为: "+ e.name);
											return e;
										}
									});
									body.data = data;
									break;
							};
							break;
						case "api.bilibili.com":
						case "api.biliapi.net":
							switch (PATH) {
								case "pgc/player/api/playurl": // 番剧-播放地址-api
								case "pgc/player/web/playurl": // 番剧-播放地址-web
								case "pgc/player/web/playurl/html5":  // 番剧-播放地址-web-HTML5
									break;
								case "pgc/view/v2/app/season": // 番剧页面-内容-app
									break;
								case "pgc/view/web/season": // 番剧-内容-web
								case "pgc/view/pc/season": // 番剧-内容-pc
									break;
								case "pgc/page/bangumi": // 观影页
								case "pgc/page/cinema/tab": // 观影页
									break;
								case "x/vip/web/vip_center/combine": // 会员页
									if (Settings?.Private?.vip) {
										data.user.vip.theme_type = 0;
										data.user.vip.label = {
											img_label_uri_hans_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
											use_img_label: true,
											img_label_uri_hant_static: "https://i0.hdslb.com/bfs/vip/8d7e624d13d3e134251e4174a7318c19a8edbd71.png",
											bg_color: "#FB7299",
											bg_style: 1,
											text: "年度大会员",
											border_color: "",
											img_label_uri_hans: "",
											img_label_uri_hant: "",
											label_theme: "hundred_annual_vip",
											text_color: "#FFFFFF"
										}
										data.user.vip.vip_pay_type = 0,
										data.user.vip.vip_due_date = 4102329600000,
										data.user.vip.avatar_subscript = 1,
										data.user.vip.is_new_user = false,
										data.user.vip.tip_material = null,
										data.user.vip.vip_type = 2,
										data.user.vip.avatar_subscript_url = "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
										data.user.vip.vip_status = 1,
										data.user.vip.nickname_color = "#FB7299"
										data.user.account_exception_text = "",
										data.user.vip_keep_time = 946656000,
										data.user.notice = {
											tv_text: "",
											surplus_seconds: 0,
											tv_surplus_seconds: 0,
											type: 0,
											can_close: false,
											text: ""
										},
										data.user.background_image_small = "",
										data.user.is_auto_renew = false,
										data.user.panel_sub_title = "",
										data.user.tv = {
											vip_pay_type: 0,
											status: 1,
											type: 1,
											due_date: 4102329600000
										},
										data.user.background_image_big = "",
										data.user.vip_overdue_explain = "年度大会员有效期 2099/12/31",
										data.user.tv_overdue_explain = "超级大会员有效期 2099/12/31",
										data.user.renew = {
											link: "",
											text: ""
										}
									}
									body.data = data;
									break;
								case "x/vip/price/panel/lexi": // 会员页
									if (Settings?.Private?.vip) {
										data.basic.user_info = {
											vip_status: 1,
											vip_type: 2,
											vip_overdue_time: 4102329600000,
											tv_vip_overdue_time: 4102329600000,
											tv_vip_status: 1
										}
									}
									body.data = data;
									break;
								case "x/vip/top_panel_info": // 续费页
									if (Settings?.Private?.vip) {
										data.ever_vip = false;
										data.vip_overdue_time = 0;
										data.vip_type = 2;
										data.tv = "超级大会员：有效期至2099-12-31";
										data.vip_status = 1;
										data.vip = "大会员：有效期至2099-12-31";
										data.tv_vip_status = 1;
									}
									body.data = data;
									break;
								case "x/player/wbi/playurl": // UGC-用户生产内容-播放地址
									break;
								case "x/space/acc/info": // 用户空间-账号信息-pc
								case "x/space/wbi/acc/info": // 用户空间-账号信息-wbi
									switch (url.params?.vmid || url.params?.mid) {
										case "11783021": // 哔哩哔哩番剧出差
										case "1988098633": // b站_戲劇咖
										case "2042149112": // b站_綜藝咖
											break;
										default:
											break;
									};
									break;
							
							};
							break;
						case "api.live.bilibili.com":
							switch (PATH) {
								case "xlive/app-room/v1/index/getInfoByRoom": // 直播
									break;
							};
							break;
					};
					$response.body = JSON.stringify(body);
					break;
				case "application/x-protobuf":
				case "application/grpc":
				case "application/grpc+proto":
				case "applecation/octet-stream":
					let rawBody = $.isQuanX() ? new Uint8Array($response.bodyBytes) : $response.body;
					//$.log(`🚧 ${$.name}`, `isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`, "");
					/******************  initialization start  *******************/
					/******************  initialization finish  ******************/
					switch (FORMAT) {
						case "application/x-protobuf":
							break;
						case "application/grpc":
						case "application/grpc+proto":
							/******************  initialization finish  ******************/
							// 先拆分B站gRPC校验头和protobuf数据体
							let header = rawBody.slice(0, 5);
							body = rawBody.slice(5);
							// 处理response压缩protobuf数据体
							switch (header?.[0]) {
								case 0: // unGzip
									break;
								case 1: // Gzip
									body = pako.ungzip(body);
									header[0] = 0; // unGzip
									break;
							};
							// 解析链接并处理protobuf数据
							switch (HOST) {
								case "grpc.biliapi.net": // HTTP/2
								case "app.bilibili.com": // HTTP/1.1
									/******************  initialization finish  ******************/
									switch (PATHs?.[0]) {
										case "bilibili.app.playurl.v1.PlayURL": // 普通视频
											switch (PATHs?.[1]) {
												case "PlayView": // 播放地址
													break;
												case "PlayConf": // 播放配置
													break;
											};
											break;
										case "bilibili.app.dynamic.v2.Dynamic": // 动态
											switch (PATHs?.[1]) {
												case "DynAll": // 视频动态
													break;
											}
											break;
										case "bilibili.app.view.v1.View": // 视频
											switch (PATHs?.[1]) {
												case "View": // 视频播放页
													break;
											}
											break;
										case "bilibili.pgc.gateway.player.v2.PlayURL": // 番剧

											switch (PATHs?.[1]) {
												case "PlayView": { // 播放地址
													break;
												};
												case "PlayConf": // 播放配置
													break;
											};
											break;
										case "bilibili.app.nativeact.v1.NativeAct": // 活动-节目、动画、韩综（港澳台）
											switch (PATHs?.[1]) {
												case "Index": // 首页
													break;
											};
											break;
										case "bilibili.app.interface.v1.Search": // 搜索框
											switch (PATHs?.[1]) {
												case "Suggest3": // 搜索建议
													break;
											};
											break;
										case "bilibili.polymer.app.search.v1.Search": // 搜索结果
											/******************  initialization start  *******************/
											/******************  initialization finish  *******************/
											switch (PATHs?.[1]) {
												case "SearchAll": { // 全部结果（综合）
													/******************  initialization start  *******************/
													/******************  initialization finish  *******************/
													break;
												};
												case "SearchByType": { // 分类结果（番剧、用户、影视、专栏）
													break;
												};
											};
											break;
									};
									break;
							};
							// protobuf部分处理完后，重新计算并添加B站gRPC校验头
							rawBody = newRawBody({ header, body }); // gzip压缩有问题，别用
							break;
					};
					// 写入二进制数据
					if ($.isQuanX()) $response.bodyBytes = rawBody
					else $response.body = rawBody;
					break;
			};
			break;
		case "false":
			break;
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: { // 有回复数据，返回回复数据
				const FORMAT = ($response?.headers?.["Content-Type"] ?? $response?.headers?.["content-type"])?.split(";")?.[0];
				$.log(`🎉 ${$.name}, finally`, `$response`, `FORMAT: ${FORMAT}`, "");
				//$.log(`🚧 ${$.name}, finally`, `$response: ${JSON.stringify($response)}`, "");
				if ($response?.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response?.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					switch (FORMAT) {
						case undefined: // 视为无body
							// 返回普通数据
							$.done({ headers: $response.headers });
							break;
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						case "text/xml":
						case "text/plist":
						case "application/xml":
						case "application/plist":
						case "application/x-plist":
						case "text/json":
						case "application/json":
						default:
							// 返回普通数据
							$.done({ headers: $response.headers, body: $response.body });
							break;
						case "application/x-protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "applecation/octet-stream":
							// 返回二进制数据
							//$.log(`${$response.bodyBytes.byteLength}---${$response.bodyBytes.buffer.byteLength}`);
							$.done({ headers: $response.headers, bodyBytes: $response.bodyBytes.buffer.slice($response.bodyBytes.byteOffset, $response.bodyBytes.byteLength + $response.bodyBytes.byteOffset) });
							break;
					};
				} else $.done($response);
				break;
			};
			case undefined: { // 无回复数据
				break;
			};
		};
	})

/***************** Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {Array} platforms - Platform Names
 * @param {Object} database - Default DataBase
 * @return {Object} { Settings, Caches, Configs }
 */
function setENV(name, platforms, database) {
	$.log(`☑️ ${$.name}, Set Environment Variables`, "");
	let { Settings, Caches, Configs } = getENV(name, platforms, database);
	/***************** Settings *****************/
	$.log(`✅ ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Caches *****************/
	//$.log(`✅ ${$.name}, Set Environment Variables`, `Caches: ${typeof Caches}`, `Caches内容: ${JSON.stringify(Caches)}`, "");
	/***************** Configs *****************/
	return { Settings, Caches, Configs };
};
/**
 * Create New Raw Body
 * @author app2smile
 * @param {ArrayBuffer} header - unGzip Header
 * @param {ArrayBuffer} body - unGzip Body
 * @param {String} type - encoding type
 * @return {ArrayBuffer} new raw Body with Checksum Header
 */
function newRawBody({ header, body }, encoding = undefined) {
	//$.log(`⚠ ${$.name}, Create New Raw Body`, "");
	// Header: 1位：是否校验数据 （0或者1） + 4位:校验值（数据长度）
	const flag = (encoding == "gzip") ? 1 : (encoding == "identity") ? 0 : (encoding == undefined) ? 0 : header?.[0] ?? 0; // encoding flag
	const checksum = Checksum(body.length); // 校验值为未压缩情况下的数据长度, 不是压缩后的长度
	if (encoding == "gzip") body = pako.gzip(body); // gzip压缩（有问题，别压）
	let rawBody = new Uint8Array(header.length + body.length);
	rawBody.set([flag], 0) // 0位：Encoding类型，当为1的时候, app会校验1-4位的校验值是否正确
	rawBody.set(checksum, 1) // 1-4位： 校验值(4位)
	rawBody.set(body, 5); // 5-end位：protobuf数据
	//$.log(`🎉 ${$.name}, Create New Raw Body`, "");
	return rawBody;

	// 计算校验和 (B站为数据本体字节数)
	function Checksum(num) {
		let arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
		let view = new DataView(arr);
		// 首位填充计算过的新数据长度
		view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
		return new Uint8Array(arr);
	};
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t);break;case"Node.js":this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}

/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/GetSomeFries/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} key - Persistent Store Key
 * @param {Array} names - Platform Names
 * @param {Object} database - Default Database
 * @return {Object} { Settings, Caches, Configs }
 */
function getENV(key,names,database){let BoxJs=$.getjson(key,database),Argument={};if("undefined"!=typeof $argument&&Boolean($argument)){let arg=Object.fromEntries($argument.split("&").map((item=>item.split("="))));for(let item in arg)setPath(Argument,item,arg[item])}const Store={Settings:database?.Default?.Settings||{},Configs:database?.Default?.Configs||{},Caches:{}};Array.isArray(names)||(names=[names]);for(let name of names)Store.Settings={...Store.Settings,...database?.[name]?.Settings,...BoxJs?.[name]?.Settings,...Argument},Store.Configs={...Store.Configs,...database?.[name]?.Configs},BoxJs?.[name]?.Caches&&"string"==typeof BoxJs?.[name]?.Caches&&(BoxJs[name].Caches=JSON.parse(BoxJs?.[name]?.Caches)),Store.Caches={...Store.Caches,...BoxJs?.[name]?.Caches};return function traverseObject(o,c){for(var t in o){var n=o[t];o[t]="object"==typeof n&&null!==n?traverseObject(n,c):c(t,n)}return o}(Store.Settings,((key,value)=>("true"===value||"false"===value?value=JSON.parse(value):"string"==typeof value&&(value?.includes(",")?value=value.split(","):value&&!isNaN(value)&&(value=parseInt(value,10))),value))),Store;function setPath(object,path,value){path.split(".").reduce(((o,p,i)=>o[p]=path.split(".").length===++i?value:o[p]||{}),object)}}

// https://github.com/VirgilClyne/GetSomeFries/blob/main/function/URL/URLs.embedded.min.js
function URLs(t){return new class{constructor(t=[]){this.name="URL v1.2.2",this.opts=t,this.json={scheme:"",host:"",path:"",type:"",query:{}}}parse(t){let s=t.match(/(?:(?<scheme>.+):\/\/(?<host>[^/]+))?\/?(?<path>[^?]+)?\??(?<query>[^?]+)?/)?.groups??null;return s?.path?s.paths=s?.path?.split("/"):s.path="",s?.paths&&(s.type=s?.paths?.[s?.paths?.length-1]?.split(".")?.[1]),s?.query&&(s.query=Object.fromEntries(s.query.split("&").map((t=>t.split("="))))),s}stringify(t=this.json){let s="";return t?.scheme&&t?.host&&(s+=t.scheme+"://"+t.host),t?.path&&(s+=t?.host?"/"+t.path:t.path),t?.query&&(s+="?"+Object.entries(t.query).map((t=>t.join("="))).join("&")),s}}(t)}
