export const pageInstructions = {
  home: {
    title: 'Instructions',
    content:
      'Welcome to the Japanese Language Learning App! To navigate, use the home button in the top left to return to the home page, and utilize the question mark button in the top right for per-page instructions.'
  },
  beginner: {
    title: 'Beginner Level',
    content:
      'Embark on your Japanese journey at the Beginner Level. Here, choose the correct answer from the provided options. Once you make a selection, the correct answer will be revealed, and the question will automatically change to the next one.'
  },
  intermediate: {
    title: 'Intermediate Level',
    content:
      "Progress to the Intermediate Level, where you'll match kanji on the left with corresponding hiragana on the right. Upon making your selections, the questions will dynamically change, ensuring a varied learning experience. Additionally, the correct answers will be displayed after your choices."
  },
  expert: {
    title: 'Expert Level',
    content:
      'Challenge yourself at the Expert Level by reading carefully crafted story texts. Answer questions based on the provided information. Notably, the questions will evolve as you select answers, offering a dynamic challenge. Furthermore, correct answers will be revealed to enhance your learning experience.'
  }
}

export const beginnerQuestions = [
  {
    id: 1,
    image: 'Father.jpg',
    options: ['母', '父', '妹', '兄'],
    correctAnswer: '父'
  },
  {
    id: 2,
    image: 'Mother.jpg',
    options: ['弟', '妹', '父', '母'],
    correctAnswer: '母'
  },
  {
    id: 3,
    image: 'Brother.jpg',
    options: ['兄', '姉', '父', '母'],
    correctAnswer: '兄'
  },
  {
    id: 4,
    image: 'Sister.jpg',
    options: ['妹', '弟', '母', '父'],
    correctAnswer: '妹'
  },
  {
    id: 5,
    image: 'Grandfather.jpg',
    options: ['おばあさん', 'おじいさん', 'お母さん', 'お父さん'],
    correctAnswer: 'おじいさん'
  },
  {
    id: 6,
    image: 'Grandmother.jpg',
    options: ['おばあさん', 'おじいさん', 'お母さん', 'お父さん'],
    correctAnswer: 'おばあさん'
  },
  {
    id: 7,
    image: 'Daughter.jpg',
    options: ['息子', '娘', '父', '母'],
    correctAnswer: '娘'
  },
  {
    id: 8,
    image: 'Son.jpg',
    options: ['娘', '息子', '姉', '弟'],
    correctAnswer: '息子'
  },
  {
    id: 9,
    image: 'Aunt.jpg',
    options: ['おじさん', 'おばさん', 'お母さん', 'お父さん'],
    correctAnswer: 'おばさん'
  },
  {
    id: 10,
    image: 'Uncle.jpg',
    options: ['おばさん', 'おじさん', 'お母さん', 'お父さん'],
    correctAnswer: 'おじさん'
  },
  {
    id: 11,
    image: 'Niece.jpg',
    options: ['姪', '甥', '妹', '兄'],
    correctAnswer: '姪'
  },
  {
    id: 12,
    image: 'Nephew.jpg',
    options: ['甥', '姪', '弟', '妹'],
    correctAnswer: '甥'
  },
  {
    id: 13,
    image: 'Girlfriend.jpg',
    options: ['彼女', '彼氏', '妹', '兄'],
    correctAnswer: '彼女'
  },
  {
    id: 14,
    image: 'Boyfriend.jpg',
    options: ['彼氏', '彼女', '姉', '弟'],
    correctAnswer: '彼氏'
  },
  {
    id: 15,
    image: 'Husband.jpg',
    options: ['妻', '夫', '姉', '弟'],
    correctAnswer: '夫'
  },
  {
    id: 16,
    image: 'Wife.jpg',
    options: ['夫', '妻', '兄', '妹'],
    correctAnswer: '妻'
  },
  {
    id: 17,
    image: 'Friend.jpg',
    options: ['友達', '家族', '兄弟', '姉妹'],
    correctAnswer: '友達'
  },
  {
    id: 18,
    image: 'Cousin.jpg',
    options: ['いとこ', 'きょうだい', 'おば', 'おじ'],
    correctAnswer: 'いとこ'
  },
  {
    id: 19,
    image: 'MotherInLaw.jpg',
    options: ['お母さん', 'お義母さん', 'お父さん', 'お義父さん'],
    correctAnswer: 'お義母さん'
  },
  {
    id: 20,
    image: 'FatherInLaw.jpg',
    options: ['お父さん', 'お義父さん', 'お母さん', 'お義母さん'],
    correctAnswer: 'お義父さん'
  }
]

export const intermediateQuestions = [
  {
    id: 1,
    kanji: '父',
    hiragana: 'ちち'
  },
  {
    id: 2,
    kanji: '母',
    hiragana: 'はは'
  },
  {
    id: 3,
    kanji: '兄',
    hiragana: 'あに'
  },
  {
    id: 4,
    kanji: '妹',
    hiragana: 'いもうと'
  },
  {
    id: 5,
    kanji: '祖父',
    hiragana: 'そふ'
  },
  {
    id: 6,
    kanji: '祖母',
    hiragana: 'そぼ'
  },
  {
    id: 7,
    kanji: '娘',
    hiragana: 'むすめ'
  },
  {
    id: 8,
    kanji: '息子',
    hiragana: 'むすこ'
  },
  {
    id: 9,
    kanji: '叔母',
    hiragana: 'おば'
  },
  {
    id: 10,
    kanji: '叔父',
    hiragana: 'おじ'
  },
  {
    id: 11,
    kanji: '姪',
    hiragana: 'めい'
  },
  {
    id: 12,
    kanji: '甥',
    hiragana: 'おい'
  },
  {
    id: 13,
    kanji: '彼女',
    hiragana: 'かのじょ'
  },
  {
    id: 14,
    kanji: '彼氏',
    hiragana: 'かれし'
  },
  {
    id: 15,
    kanji: '夫',
    hiragana: 'おっと'
  },
  {
    id: 16,
    kanji: '妻',
    hiragana: 'つま'
  },
  {
    id: 17,
    kanji: '友達',
    hiragana: 'ともだち'
  },
  {
    id: 18,
    kanji: 'いとこ',
    hiragana: 'いとこ'
  },
  {
    id: 19,
    kanji: 'ペット',
    hiragana: 'ぺっと'
  },
  {
    id: 20,
    kanji: '隣人',
    hiragana: 'りんじん'
  },
  {
    id: 21,
    kanji: 'お爺さん',
    hiragana: 'おじいさん'
  },
  {
    id: 22,
    kanji: 'お婆さん',
    hiragana: 'おばあさん'
  },
  {
    id: 23,
    kanji: '娘婿',
    hiragana: 'むすめむこ'
  },
  {
    id: 24,
    kanji: '義理の父',
    hiragana: 'ぎりのちち'
  },
  {
    id: 25,
    kanji: '義理の母',
    hiragana: 'ぎりのはは'
  },
  {
    id: 26,
    kanji: '義理の兄',
    hiragana: 'ぎりのあに'
  },
  {
    id: 27,
    kanji: '義理の妹',
    hiragana: 'ぎりのいもうと'
  },
  {
    id: 28,
    kanji: '孫',
    hiragana: 'まご'
  },
  {
    id: 29,
    kanji: '親戚',
    hiragana: 'しんせき'
  },
  {
    id: 30,
    kanji: 'おじいちゃん',
    hiragana: 'おじいちゃん'
  },
  {
    id: 31,
    kanji: 'おばあちゃん',
    hiragana: 'おばあちゃん'
  },
  {
    id: 32,
    kanji: '従兄弟',
    hiragana: 'いとこ'
  },
  {
    id: 33,
    kanji: '従姉妹',
    hiragana: 'いとこ'
  },
  {
    id: 34,
    kanji: '姉妹',
    hiragana: 'しまい'
  },
  {
    id: 35,
    kanji: '妹弟',
    hiragana: 'きょうだい'
  },
  {
    id: 36,
    kanji: '親友',
    hiragana: 'しんゆう'
  },
  {
    id: 37,
    kanji: '親子',
    hiragana: 'おやこ'
  },
  {
    id: 38,
    kanji: '義理の姉',
    hiragana: 'ぎりのあね'
  },
  {
    id: 39,
    kanji: '義理の妹',
    hiragana: 'ぎりのいもうと'
  },
  {
    id: 40,
    kanji: '家族',
    hiragana: 'かぞく'
  }
]

export const expertQuestions = [
  {
    id: 1,
    text: '田中家はとても楽しい家族です。父の田中さんは毎晩おいしい夕食を作ります。母の田中さんは音楽が大好きで、家族と一緒に音楽を楽しむことがあります。そして、子供たちは学校から帰ると宿題を手伝い合います。田中家の毎日は笑顔で満ちています。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お父さん'
  },
  {
    id: 2,
    text: '田中さんの家族は週末に公園でピクニックをするのが好きです。お父さんは美味しいお弁当を作り、お母さんは子供たちと一緒に芝生で遊びます。お兄さんとお姉さんはフリスビーやサッカーで楽しむことがあります。家族みんなで笑いあい、楽しい時間を過ごします。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お母さん'
  },
  {
    id: 3,
    text: '田中家のおばあさんはとても優しい人です。彼女は家族に美味しいおやつを作ってくれます。また、おばあさんは家族の話を聞いてくれ、時には助言もしてくれます。田中家のみんなはおばあさんのことが大好きです。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おばあさん'
  },
  {
    id: 4,
    text: '佐藤家はペットを飼っています。犬のチロは家族の一員で、毎日一緒に散歩に行ったり、公園で遊んだりしています。子供たちはチロと仲良くなり、一緒に遊ぶのが楽しみです。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'ペット（チロ）'
  },
  {
    id: 5,
    text: '佐藤家のおじいさんは趣味が庭いじりです。彼は孫たちと一緒に花を植えたり、野菜を育てたりしています。家族全員がおじいさんの庭の手入れを手伝います。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おじいさん'
  },
  {
    id: 6,
    text: '山田家は週末に映画館に行くのが好きです。家族みんなで新しい映画を見て、感想を話し合います。特に、お兄さんとお姉さんは映画の大ファンで、いつも新作を楽しみにしています。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お兄さん'
  },
  {
    id: 7,
    text: '山田家のお母さんは美味しいケーキが得意です。子供たちの誕生日にはいつも素敵なケーキを作ります。家族はお母さんの手作りケーキで楽しい誕生日を迎えます。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お母さん'
  },
  {
    id: 8,
    text: '鈴木家のおじいさんは遠くの国で働いています。家族はおじいさんに手紙を書いたり、ビデオ通話で話したりして、彼との絆を保っています。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おじいさん'
  },
  {
    id: 9,
    text: '鈴木家のおばあさんは料理が上手で、孫たちはいつもおばあさんの家で美味しいご飯を楽しみます。おばあさんの作る料理は家族の大好物です。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おばあさん'
  },
  {
    id: 10,
    text: '鈴木家のお兄さんは学校でクラス委員をしています。彼は優しくて頼りにされています。家族や友達からの信頼が彼にとって大切なものです。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お兄さん'
  },
  {
    id: 11,
    text: '木村家は毎年、お正月に親戚一同で集まります。おばあさんはおせち料理を作り、家族全員で新年を迎えます。家族の絆が深まる素敵な瞬間です。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おばあさん'
  },
  {
    id: 12,
    text: '木村家のお母さんは地元の図書館で働いています。彼女は本が大好きで、子供たちにも読書の楽しさを教えています。家族は週末に一緒に本を読んで過ごすことがあります。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お母さん'
  },
  {
    id: 13,
    text: '鈴木家のお兄さんとお姉さんは学校で合唱団に所属しています。彼らはコンサートで歌を披露することがあり、家族や友達が応援しています。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お姉さん'
  },
  {
    id: 14,
    text: '鈴木家のお母さんは休日によく家族と一緒に公園に行きます。そこで家族はピクニックを楽しみ、子供たちは遊具で元気に遊びます。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お母さん'
  },
  {
    id: 15,
    text: '田中家は夏休みに海に行くのが恒例行事です。お父さんは泳ぐのが得意で、子供たちは砂浜で砂遊びを楽しんでいます。家族で海水浴をするのはみんなの楽しみです。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お父さん'
  },
  {
    id: 16,
    text: '佐藤家のお母さんは毎晩子供たちに絵本を読んであげます。寝る前に、家族みんなで楽しいお話を共有し、安心して眠ることができます。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お母さん'
  },
  {
    id: 17,
    text: '佐藤家のお兄さんとお姉さんは週末によく映画を観に行きます。彼らは好きなジャンルの映画を楽しんで、家族にも感想をシェアします。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お姉さん'
  },
  {
    id: 18,
    text: '佐藤家のおじいさんは家族に面白いジョークを言うことが得意です。彼のユーモアは家族を笑顔にさせ、楽しいひとときを作り出します。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おじいさん'
  },
  {
    id: 19,
    text: '佐藤家のおばあさんは手芸が得意です。孫たちに可愛いぬいぐるみや帽子を編んでプレゼントします。彼女の作る手作りの贈り物は家族にとって特別な思い出となります。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'おばあさん'
  },
  {
    id: 20,
    text: '木村家はクリスマスに家族みんなでクリスマスツリーを飾ります。プレゼント交換や美味しい料理で賑やかに過ごし、家族の絆を感じる素敵なイベントとなります。',
    options: ['お母さん', 'お父さん', 'おばあさん', 'おじいさん', 'お兄さん', 'お姉さん'],
    correctAnswer: 'お父さん'
  }
]
