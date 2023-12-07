import father from "$lib/assets/images/father.jpeg";
import daughter from "$lib/assets/images/daughter.jpeg";
import son from "$lib/assets/images/son.jpeg";
import uncle from "$lib/assets/images/uncle.jpeg";
import aunt from "$lib/assets/images/aunt.jpeg";
import grandmother from "$lib/assets/images/grandmother.jpeg";
import grandfather from "$lib/assets/images/grandfather.jpeg";
import sister from "$lib/assets/images/sister.jpeg";
import mother from "$lib/assets/images/mother.jpeg";
import brother from "$lib/assets/images/brother.jpeg";
import girlfriend from "$lib/assets/images/girlfriend.jpeg";
import boyfriend from "$lib/assets/images/boyfriend.jpeg";
import friend from "$lib/assets/images/friend.jpeg";
import wife from "$lib/assets/images/wife.jpeg";
import husband from "$lib/assets/images/husband.jpeg";
import nephew from "$lib/assets/images/nephew.jpeg";
import niece from "$lib/assets/images/niece.jpeg";

interface option {
	option: string;
	yomikata: string;
}

export interface beginner {
	id: number;
	image: string;
	options: option[];
	correctAnswer: string;
}

export interface intermediate {
	id: number;
	question: string;
	correctAnswer: boolean;
}

export interface expert {
	id: number;
	text: string;
	options: string[];
	correctAnswer: string;
}

export const beginnerQuestions: beginner[] = [
	{
		id: 1,
		image: father,
		options: [
			{ option: "母", yomikata: "はは" },
			{ option: "父", yomikata: "ちち" },
			{ option: "妹", yomikata: "いもうと" },
			{ option: "兄", yomikata: "あに" }
		],
		correctAnswer: "父"
	},
	{
		id: 2,
		image: mother,
		options: [
			{ option: "弟", yomikata: "おとうと" },
			{ option: "妹", yomikata: "いもうと" },
			{ option: "父", yomikata: "ちち" },
			{ option: "母", yomikata: "はは" }
		],
		correctAnswer: "母"
	},
	{
		id: 3,
		image: brother,
		options: [
			{ option: "兄", yomikata: "あに" },
			{ option: "姉", yomikata: "あね" },
			{ option: "父", yomikata: "ちち" },
			{ option: "母", yomikata: "はは" }
		],
		correctAnswer: "兄"
	},
	{
		id: 4,
		image: sister,
		options: [
			{ option: "妹", yomikata: "いもうと" },
			{ option: "弟", yomikata: "おとうと" },
			{ option: "母", yomikata: "はは" },
			{ option: "父", yomikata: "ちち" }
		],
		correctAnswer: "妹"
	},
	{
		id: 5,
		image: grandfather,
		options: [
			{ option: "祖母", yomikata: "そぼ" },
			{ option: "祖父", yomikata: "そふ" },
			{ option: "母", yomikata: "はは" },
			{ option: "父", yomikata: "ちち" }
		],
		correctAnswer: "祖父"
	},
	{
		id: 6,
		image: grandmother,
		options: [
			{ option: "祖母", yomikata: "そぼ" },
			{ option: "祖父", yomikata: "そふ" },
			{ option: "母", yomikata: "はは" },
			{ option: "父", yomikata: "ちち" }
		],
		correctAnswer: "祖母"
	},
	{
		id: 7,
		image: daughter,
		options: [
			{ option: "息子", yomikata: "むすこ" },
			{ option: "娘", yomikata: "むすめ" },
			{ option: "父", yomikata: "ちち" },
			{ option: "母", yomikata: "はは" }
		],
		correctAnswer: "娘"
	},
	{
		id: 8,
		image: son,
		options: [
			{ option: "娘", yomikata: "むすめ" },
			{ option: "息子", yomikata: "むすこ" },
			{ option: "姉", yomikata: "あね" },
			{ option: "弟", yomikata: "おとうと" }
		],
		correctAnswer: "息子"
	},
	{
		id: 9,
		image: niece,
		options: [
			{ option: "姪", yomikata: "めい" },
			{ option: "甥", yomikata: "おい" },
			{ option: "妹", yomikata: "いもうと" },
			{ option: "兄", yomikata: "あに" }
		],
		correctAnswer: "姪"
	},
	{
		id: 10,
		image: nephew,
		options: [
			{ option: "甥", yomikata: "おい" },
			{ option: "姪", yomikata: "めい" },
			{ option: "弟", yomikata: "おとうと" },
			{ option: "妹", yomikata: "いもうと" }
		],
		correctAnswer: "甥"
	},
	{
		id: 11,
		image: girlfriend,
		options: [
			{ option: "彼女", yomikata: "かのじょ" },
			{ option: "彼氏", yomikata: "かれし" },
			{ option: "妹", yomikata: "いもうと" },
			{ option: "兄", yomikata: "あに" }
		],
		correctAnswer: "彼女"
	},
	{
		id: 12,
		image: boyfriend,
		options: [
			{ option: "彼氏", yomikata: "かれし" },
			{ option: "彼女", yomikata: "かのじょ" },
			{ option: "姉", yomikata: "あね" },
			{ option: "弟", yomikata: "おとうと" }
		],
		correctAnswer: "彼氏"
	},
	{
		id: 13,
		image: husband,
		options: [
			{ option: "妻", yomikata: "つま" },
			{ option: "夫", yomikata: "おっと" },
			{ option: "姉", yomikata: "あね" },
			{ option: "弟", yomikata: "おとうと" }
		],
		correctAnswer: "夫"
	},
	{
		id: 14,
		image: wife,
		options: [
			{ option: "夫", yomikata: "おっと" },
			{ option: "妻", yomikata: "つま" },
			{ option: "兄", yomikata: "あに" },
			{ option: "妹", yomikata: "いもうと" }
		],
		correctAnswer: "妻"
	},
	{
		id: 15,
		image: friend,
		options: [
			{ option: "友達", yomikata: "ともだち" },
			{ option: "家族", yomikata: "かぞく" },
			{ option: "兄弟", yomikata: "きょうだい" },
			{ option: "姉妹", yomikata: "しまい" }
		],
		correctAnswer: "友達"
	},
	{
		id: 16,
		image: uncle,
		options: [
			{ option: "叔父", yomikata: "おじ" },
			{ option: "叔母", yomikata: "おば" },
			{ option: "兄弟", yomikata: "きょうだい" },
			{ option: "姉妹", yomikata: "しまい" }
		],
		correctAnswer: "叔父"
	},
	{
		id: 17,
		image: aunt,
		options: [
			{ option: "叔父", yomikata: "おじ" },
			{ option: "叔母", yomikata: "おば" },
			{ option: "兄弟", yomikata: "きょうだい" },
			{ option: "姉妹", yomikata: "しまい" }
		],
		correctAnswer: "叔母"
	}
];

export const intermediateQuestions: intermediate[] = [
	{
		id: 1,
		question: "The kanji for father is 父 and it has 4 strokes.",
		correctAnswer: true
	},
	{
		id: 2,
		question: "The kanji for mother is 母 and it has 5 strokes.",
		correctAnswer: true
	},
	{
		id: 3,
		question: "The kanji for child is 子 and it has 3 strokes.",
		correctAnswer: true
	},
	{
		id: 4,
		question: "The kanji for older brother is 兄 and it has 6 strokes.",
		correctAnswer: false
	},
	{
		id: 5,
		question: "The kanji for older sister is 姉 and it has 8 strokes.",
		correctAnswer: true
	},
	{
		id: 6,
		question: "The kanji for younger brother is 弟 and it has 7 strokes.",
		correctAnswer: true
	},
	{
		id: 7,
		question: "The kanji for younger sister is 妹 and it has 8 strokes.",
		correctAnswer: true
	},
	{
		id: 8,
		question: "The kanji for husband is 夫 and it has 4 strokes.",
		correctAnswer: true
	},
	{
		id: 9,
		question: "The kanji for wife is 妻 and it has 8 strokes.",
		correctAnswer: false
	},
	{
		id: 10,
		question: "The kanji for son is 息 and it has 10 strokes.",
		correctAnswer: false
	},
	{
		id: 11,
		question: "The kanji for daughter is 娘 and it has 10 strokes.",
		correctAnswer: true
	},
	{
		id: 12,
		question: "The kanji for grandfather is 祖父 and it has 17 strokes.",
		correctAnswer: true
	},
	{
		id: 13,
		question: "The kanji for grandmother is 祖母 and it has 18 strokes.",
		correctAnswer: true
	},
	{
		id: 14,
		question: "The kanji for uncle is 叔父 and it has 10 strokes.",
		correctAnswer: false
	},
	{
		id: 15,
		question: "The kanji for aunt is 叔母 and it has 11 strokes.",
		correctAnswer: false
	},
	{
		id: 16,
		question: "The kanji for cousin is いとこ and it has 7 strokes.",
		correctAnswer: false
	},
	{
		id: 17,
		question: "The kanji for nephew is 甥 and it has 12 strokes.",
		correctAnswer: true
	},
	{
		id: 18,
		question: "The kanji for niece is 姪 and it has 15 strokes.",
		correctAnswer: true
	},
	{
		id: 19,
		question: "The kanji for friend is 友 and it has 4 strokes.",
		correctAnswer: true
	},
	{
		id: 20,
		question: "The kanji for love is 愛 and it has 13 strokes.",
		correctAnswer: true
	}
];

export const expertQuestions: expert[] = [
	{
		id: 1,
		text: "田中家はとても楽しい家族です。父の田中さんは毎晩おいしい夕食を作ります。母の田中さんは音楽が大好きで、家族と一緒に音楽を楽しむことがあります。そして、子供たちは学校から帰ると宿題を手伝い合います。田中家の毎日は笑顔で満ちています。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お父さん"
	},
	{
		id: 2,
		text: "田中さんの家族は週末に公園でピクニックをするのが好きです。お父さんは美味しいお弁当を作り、お母さんは子供たちと一緒に芝生で遊びます。お兄さんとお姉さんはフリスビーやサッカーで楽しむことがあります。家族みんなで笑いあい、楽しい時間を過ごします。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お母さん"
	},
	{
		id: 3,
		text: "田中家のおばあさんはとても優しい人です。彼女は家族に美味しいおやつを作ってくれます。また、おばあさんは家族の話を聞いてくれ、時には助言もしてくれます。田中家のみんなはおばあさんのことが大好きです。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おばあさん"
	},
	{
		id: 4,
		text: "佐藤家はペットを飼っています。犬のチロは家族の一員で、毎日一緒に散歩に行ったり、公園で遊んだりしています。子供たちはチロと仲良くなり、一緒に遊ぶのが楽しみです。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "ペット（チロ）"
	},
	{
		id: 5,
		text: "佐藤家のおじいさんは趣味が庭いじりです。彼は孫たちと一緒に花を植えたり、野菜を育てたりしています。家族全員がおじいさんの庭の手入れを手伝います。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おじいさん"
	},
	{
		id: 6,
		text: "山田家は週末に映画館に行くのが好きです。家族みんなで新しい映画を見て、感想を話し合います。特に、お兄さんとお姉さんは映画の大ファンで、いつも新作を楽しみにしています。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お兄さん"
	},
	{
		id: 7,
		text: "山田家のお母さんは美味しいケーキが得意です。子供たちの誕生日にはいつも素敵なケーキを作ります。家族はお母さんの手作りケーキで楽しい誕生日を迎えます。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お母さん"
	},
	{
		id: 8,
		text: "鈴木家のおじいさんは遠くの国で働いています。家族はおじいさんに手紙を書いたり、ビデオ通話で話したりして、彼との絆を保っています。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おじいさん"
	},
	{
		id: 9,
		text: "鈴木家のおばあさんは料理が上手で、孫たちはいつもおばあさんの家で美味しいご飯を楽しみます。おばあさんの作る料理は家族の大好物です。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おばあさん"
	},
	{
		id: 10,
		text: "鈴木家のお兄さんは学校でクラス委員をしています。彼は優しくて頼りにされています。家族や友達からの信頼が彼にとって大切なものです。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お兄さん"
	},
	{
		id: 11,
		text: "木村家は毎年、お正月に親戚一同で集まります。おばあさんはおせち料理を作り、家族全員で新年を迎えます。家族の絆が深まる素敵な瞬間です。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おばあさん"
	},
	{
		id: 12,
		text: "木村家のお母さんは地元の図書館で働いています。彼女は本が大好きで、子供たちにも読書の楽しさを教えています。家族は週末に一緒に本を読んで過ごすことがあります。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お母さん"
	},
	{
		id: 13,
		text: "鈴木家のお兄さんとお姉さんは学校で合唱団に所属しています。彼らはコンサートで歌を披露することがあり、家族や友達が応援しています。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お姉さん"
	},
	{
		id: 14,
		text: "鈴木家のお母さんは休日によく家族と一緒に公園に行きます。そこで家族はピクニックを楽しみ、子供たちは遊具で元気に遊びます。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お母さん"
	},
	{
		id: 15,
		text: "田中家は夏休みに海に行くのが恒例行事です。お父さんは泳ぐのが得意で、子供たちは砂浜で砂遊びを楽しんでいます。家族で海水浴をするのはみんなの楽しみです。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お父さん"
	},
	{
		id: 16,
		text: "佐藤家のお母さんは毎晩子供たちに絵本を読んであげます。寝る前に、家族みんなで楽しいお話を共有し、安心して眠ることができます。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お母さん"
	},
	{
		id: 17,
		text: "佐藤家のお兄さんとお姉さんは週末によく映画を観に行きます。彼らは好きなジャンルの映画を楽しんで、家族にも感想をシェアします。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お姉さん"
	},
	{
		id: 18,
		text: "佐藤家のおじいさんは家族に面白いジョークを言うことが得意です。彼のユーモアは家族を笑顔にさせ、楽しいひとときを作り出します。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おじいさん"
	},
	{
		id: 19,
		text: "佐藤家のおばあさんは手芸が得意です。孫たちに可愛いぬいぐるみや帽子を編んでプレゼントします。彼女の作る手作りの贈り物は家族にとって特別な思い出となります。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "おばあさん"
	},
	{
		id: 20,
		text: "木村家はクリスマスに家族みんなでクリスマスツリーを飾ります。プレゼント交換や美味しい料理で賑やかに過ごし、家族の絆を感じる素敵なイベントとなります。",
		options: ["お母さん", "お父さん", "おばあさん", "おじいさん", "お兄さん", "お姉さん"],
		correctAnswer: "お父さん"
	}
];
