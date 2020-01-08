var v_a = 
`
abandon 放弃，抛弃

ability 能力，智能，才能

aboard 在船（飞机，车）上

absence 缺席，不在场

absolute 绝对的，完全的

absolutely 绝对地，极其，完全地

absorb 吸收

abuse 虐待

academic 学院的，学术的

accelerate 加速，促进

accent 腔调，口音，重音

accept 接受，认可

acceptance 接受，接纳，承认

accident 事故，意外的事

accompany 陪伴，伴随

accomplish 完成

accordance 一致

account 账，账目，说明，解释

accumulate 积累，积聚

accurate 准确的，精确的

accuse 谴责，指控，告发

accustomed 惯常的，习惯的

ache 疼痛，酸痛

achieve 完成，达到，获得

achievement 完成，成绩，成就

acid 酸，酸性物质，酸的

acquaintance 熟人，相识

acquire 取得，获得

acre 英亩

across 横越，在…那边

act 行为，动作，表演

action 行动，动作

active 活动的，活跃的，积极的

activity 活动

actor 男演员

actress 女演员

actual 实际的，现实的

actually 实际上

A.D. 公元

addition 加法，增加

additional 附加的，另外的

adequate 足够的，恰当的

adjective 形容词

adjust 调节，调整

administration 管理，经营，行政机关，政府

admire 羡慕，赞赏，钦佩

admit 允许进入，接纳，承认

adopt 收养，采取，通过

adult 成人

advance 推进，促进，前进

advanced 前进的，先进的

advantage 优点，有利条件

adventure 冒险，惊险活动

adverb 副词

advertisement 广告

advice 忠告，意见

advise 忠告，劝告，通知

affair 事，事情，事件

affect 影响

affection 爱，感情

afford 担负得起，买得起

afraid 担心的，害怕的

Africa 非洲

African 非洲人，非洲的

after 在…之后

against 对（着），反对，靠

agent 代理人，代表

agreement 同意，一致，协定

aggressive 挑衅的，放肆的

agriculture 农业

aid 援助，救援

aim 志在，旨在，目标

aircraft 飞机，飞行器

airline 航空公司，（飞机）航线

airport 航空站，机场

awkward 尴尬的

alarm 惊恐，忧虑，报警

alcohol 酒精，乙醇

alike 相同的，相像的

alive 活着的，活跃的

allow 允许， 承认

almost 几乎，差不多

along 向前，沿着

aloud 出声地，大声地

alphabet 字母表

alter 改变，变更

although 虽然，即使

altogether 完全，总之

amaze 使惊愕，使惊叹

ambition 雄心，野心

ambulance 救护车

America 美洲，美国

American 美国人，美国人的

amount 数量，数额，合计

amuse 经…以消遣，给…以娱乐

analysis 分析，解析

analyze/analyse 分析，分解

ancestor 祖宗，祖先

anchor 锚，抛锚，停泊

ancient 古代的，古老的

anger 愤怒，气愤

angle 角，角度，观点

ankle 踝

announce 宣布，通告

annoy 使烦恼，使生气，打搅

annual 每年的，每年度的

anticipate 预料，期望

anxiety 焦虑，挂虑，渴望

anxious 担心的，焦虑的，渴望的

anyhow 无论如何，不管怎样

apart 分离，隔开，相距

apartment 一套公寓房间

apologize/-ise 道歉，认错

apology 道歉，歉意

apparent 明显的

appear 出现，出场，仿佛

appearance 出现，露面，外表

appetite 食欲，胃口

application 申请，申请书，应用

apply 申请，运用，应用

appoint 任命，委派，约定

appointment 约会，约见，任命

approach 接近，途径，方法

appropriate 适合的，恰当

approve 赞成，同意，批准

approximately 似地，约

April 四月

area 面积，地区，范围

arbitrary 随心所欲的，专断的

architecture 建筑学，建筑术，建筑风格

argue 辩论，争论，主张

argument 辩论，论点，论据

arise 出现，发生，起源于

arithmetic 算术

arouse 引起，激起，唤起，唤醒

arrange 整理，布置，安排

arrangement 安排，准备工作

arrest 逮捕，扣留

arrow 箭，箭状物

article 文章，东西，冠词

artificial 人工的

artist 艺术家，美术家

ash 灰

ashamed 惭愧的，害臊的

aside 一旁，一边

assemble 集合，集会，装配

assembly 集会，会议，装配

assignment 任务，作业，分配

assist 帮助，协助

assistance 帮助，援助

assistant 助手，助教，助理的

assume 假装，假定，设想，承担，采取

assure 保证，使确信

astonish 使吃惊，使惊讶

astronaut 宇航员

Atlantic 大西洋的，大西洋

atmosphere 空气，大气，气氛

atom 原子

attach 贴上，系上，使依附

attack 攻击，进攻，抨击

attain 获得，达到

attempt 试图，努力

attend 出席，照顾，注意，留意，专心于

attention 注意，注意力，立正

attitude 态度，看法，姿势

attract 吸引，招引，引诱

attraction 吸引，吸引力，具有吸引力的事物（或人）

attractive 有吸引力的

audience 听众，观众，读者

August 八月

aunt 伯母，婶母，舅母，姨母，姑母

author 作者

automatic 自动的

automobile/auto 汽车

autumn 秋

available 可利用的，可得到的

avenue 林荫路，大街，途径

average 平均，平均数，通常的

avoid 避免，逃避

awake 醒着的，唤醒，醒来

award 奖，奖品，授予

aware 知道的，意识到的

awful 使人畏惧的，可怕的

ax(e) 斧子
`

var v_b = ``

var v_c = ``

v_d = ``;

var v_e = ``;

var vData = [v_a];
var ukVoice, usVoice;

function splitLetter(letter) {
	var arr = letter.split('\n').filter(e => e);
	var newArr = [];
	arr.forEach(function(e) {
		var str =  e.replace(/^\s|\s+$/g,"");
		var obj = {
			en: str.split(' ')[0],
			cn: str.split(' ')[1],
		}
		if (obj.en && obj.cn) {
			newArr.push(obj);
		}
	})
	return newArr;
}

var vSource = vData.map(function(e) {
	return splitLetter(e);
});

// 添加方法
function addClass(str, ele) {
	ele.className += (' ' + str);
}

// 删除
function removeClass(str, ele) {
	var classes = ele.className.split(' ');
	var newClass = [];
	classes.forEach(function(e) {
		if (e !== str) {
			newClass.push(e);
		}
	});
	ele.className = newClass.join(' ');
}

// 添加DOM
function addDom(value, index) {
	var remain = value.length - index - 1;
	return 	'<p>' +  value[index].en + '</p>' +
			'<p class="en">' +  value[index].cn + '</p>' +
			'<div class="control" id="control">' +
				'<span>上一个</span>' +
				'<span>显示</span>' +
				'<span>下一个</span>'+
				'<a href="javascript:void(0)" class="query">查询详情</a>' + 
			'</div>' +
			'<a href="javascript:void(0)" class="back">返回</a>' + 
			'<b class="count">'+ remain +'</b>' + 
			'<div class="panel" onTouchStart="cancelBubble(event)">' + 
			'</div>';
}

// 详细页DOM结构 
function addDetail(data) {
	ukVoice = data.basic['uk-speech'];
	usVoice = data.basic['us-speech'];
	return '<h1>'+ data.query + '</h1>' + 
		   '<div><b>英 ['+ data.basic['uk-phonetic'] +']</b><i onTouchStart="speak(0)"></i></div>' +
		   '<div><b>美 ['+ data.basic['us-phonetic']  +']</b><i onTouchStart="speak(1)"></i></div>' + 
		   '<p>'+ data.basic.explains +'</p>' +
		   '<h4>短语</h4>' +
		   '<ul>' + 
		   		(function() {
					return data.web.map(function(e) {
						return '<li><em>'+ e.key +'</em><span>'+ e.value.join(',') +'</span></li>' ;
					}).join('');
				}())
				+
		   '</ul>'+
		   '<audio></audio>';
}

// 打乱顺序
function shuffer(arr) {
	var newArr = [];
	var copyArr = arr.slice(0);
	arr.forEach(function(e, i) {
		var max = copyArr.length;
		var idx = random(0, max);
		newArr.push(copyArr.splice(idx, 1)[0]);
	});
	return newArr;
}

// 取消冒泡
function cancelBubble(e) {
	e.cancelBubble = true;
}

// 随机数
function random (min, max) {
	return parseInt(Math.random()*(max - min) + min);
}

// 播放读音 
function speak(num) {
	var audio = document.querySelectorAll('audio')[0];
	audio.src = num === 0 ? ukVoice : usVoice;
	audio.play();
}


function jsonp (url, data) {
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	return new Promise(function (resolve, reject) {
	  originJSONP(url, (err, data) => {
		if (!err) {
		  resolve(data)
		} else {
		  reject(err)
		}
	  })
	})
  }
  
  function param(data) {
	let url = ''
	for (var i in data) {
	  let value = data[i] !== undefined ? data[i] : ''
	  url += '&' + i + '=' + encodeURIComponent(value)
	}
	return url ? url.substring(1) : ''
  }
  
  function originJSONP(url, callback) {
	url += '&' + 'callback' + '=callback'
	let s = document.createElement('script')
	s.src = url
	document.body.appendChild(s)
	document.body.removeChild(s)
	window.callback = function(data) {
	  if(!data) {
		let err = 'data missing'
		callback(err)
	  } else {
		callback(null,data)
	  }
	}
  }

  function sign(appKey, q, salt) {
	var key = 'gOQ2mMn0Ajbug77QslQ1PcXLlPuU6Zit';
	var sign = appKey + q + salt + key;
	return md5(sign).toUpperCase();
  }