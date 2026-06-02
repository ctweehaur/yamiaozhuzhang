const quizQuestions = [
    {
        id: 1,
        text: "文中“今日病矣”的“病”字，在这里的正确含义是？",
        py: "wén zhāng zhōng jīnrì bìng yǐ de bìng zì zài zhè lǐ de zhèng què hán yì shì",
        en: "What does the character 'bìng' mean in the phrase 'jīnrì bìng yǐ'?",
        options: [
            {
                text: "身体生病、染上疾病",
                py: "shēn tǐ shēng bìng rǎn shàng jí bìng",
                en: "To fall ill or suffer from a disease.",
                correct: false,
                explanation: "错误。在古汉语中，生病一般用“疾”，“病”在形容身体时通常表示极度疲劳、累坏了，并不是指现代汉语的生病。",
                explanationPy: "cuò wù zài gǔ dài hàn yǔ zhōng shēng bìng yī bān yòng jí bìng zài xíng róng shēn tǐ shí tōng cháng biǎo shì jí dù pí láo lèi huài le bìng bú shì zhǐ xiàn dài hàn yǔ de shēng bìng",
                explanationEn: "Incorrect. In classical Chinese, common illness is expressed as 'ji'. Here 'bing' specifies extreme exhaustion rather than disease."
            },
            {
                text: "极度疲劳、累坏了",
                py: "jí dù pí láo lèi huài le",
                en: "Extremely exhausted, worn out.",
                correct: true,
                explanation: "正确！农夫因为到田里去拔苗，干了重体力活，所以回家感叹自己今天“累坏了”。",
                explanationPy: "zhèng què nóng fū yīn wèi dào tián lǐ qù bá miáo gàn le zhòng tǐ lì huó suǒ yǐ huí jiā gǎn tàn zì jǐ jīntiān lèi huài le",
                explanationEn: "Correct! The farmer engaged in heavy manual labor pulling the plants, so he lamented being thoroughly worn out upon reaching home."
            },
            {
                text: "病危、快要死去了",
                py: "bìng wēi kuài yào sǐ qù le",
                en: "Critically ill, near death.",
                correct: false,
                explanation: "错误。语气和上下文语境完全不符合病危的意思。",
                explanationPy: "cuò wù yǔ qì hé shàng xià wén yǔ jìng wán quán bù fú hé bìng wēi de yì si",
                explanationEn: "Incorrect. The dramatic context and phrasing show no indication of a life-threatening medical emergency."
            },
            {
                text: "缺点、毛病和瑕疵",
                py: "quē diǎn máo bìng hé xiá cī",
                en: "Flaw, defect, or mistake.",
                correct: false,
                explanation: "错误。在这里“病”修饰代词主语，属于形容词用法，表示累，而非名词毛病。",
                explanationPy: "cuò wù zài zhè lǐ bìng xiū shì dài cí zhǔ yǔ shǔ yú xíng róng cí yòng fǎ biǎo shì lèi ér fēi míng cí máo bìng",
                explanationEn: "Incorrect. 'Bing' functions as a predicate adjective describing his physical state, not a noun meaning defect."
            }
        ]
    },
    {
        id: 2,
        text: "对文中句子“非徒无益，而又害之”中“非徒”的翻译最准确的是？",
        py: "duì wén zhāng zhōng jù zǐ fēi tú wú yì ér yòu hài zhī zhōng fēi tú de fān yì zuì zhǔn què de shì",
        en: "Which is the most accurate translation for 'fēi tú' in the text?",
        options: [
            {
                text: "不是徒弟、不是学生",
                py: "bú shì tú dì bú shì xué shēng",
                en: "Not a disciple, not a student.",
                correct: false,
                explanation: "错误。“徒”虽然有徒弟的意思，但在这里是副词“仅仅、只”的意思，不能看作名词。",
                explanationPy: "cuò wù tú suī rán yǒu tú dì de yì si dàn zài zhè lǐ shì fù cí jǐn jǐn zhǐ de yì si bù néng kàn zuò míng cí",
                explanationEn: "Incorrect. Although 'tu' can mean disciple, here it acts as an adverb meaning 'merely/only'."
            },
            {
                text: "不单单、不仅、不只是",
                py: "bù dān dān bù jǐn bù zhǐ shì",
                en: "Not only, not merely.",
                correct: true,
                explanation: "正确！“非徒”是古汉语中常用的递进连词关联词，意思是“不仅……”，后面往往用“而又”来呼应。",
                explanationPy: "zhèng què fēi tú shì gǔ dài hàn yǔ zhōng cháng yòng de dì jìn lián cí guān lián cí yì si shì bù jǐn hòu miàn wǎng wǎng yòng ér yòu lái hū yìng",
                explanationEn: "Correct! 'Fei tu' is a textbook classical correlative meaning 'not only', paired seamlessly with 'er you' (but also)."
            },
            {
                text: "白白浪费、没有收获",
                py: "bái bái làng fèi méi yǒu shōu huò",
                en: "Wasted in vain, yielding nothing.",
                correct: false,
                explanation: "错误。单独的“徒”字有“白白地”的意思（如徒劳），但“非徒”组合在一起是固定词组，表示不仅。",
                explanationPy: "cuò wù dān dú de tú zì yǒu bái bái de yì si rú tú láo dàn fēi tú zǔ hé zài yī qǐ shì gù dìng cí zǔ biǎo shì bù jǐn",
                explanationEn: "Incorrect. While a lone 'tu' can mean 'in vain' (as in Tulao), the compound 'fei tu' explicitly sets up a progressive relationship."
            },
            {
                text: "不准走路、不准步行",
                py: "bù zhǔn zǒu lù bù zhǔn bù xíng",
                en: "Walking or traveling on foot is forbidden.",
                correct: false,
                explanation: "错误。这是完全脱离文意的字面瞎猜，“徒”的步行义（如徒步）在此处讲不通。",
                explanationPy: "cuò wù zhè shì wán quán tuō lí wén yì de zì miàn xiā cāi tú de bù xíng yì rú tú bù zài cǐ chù jiǎng bù tōng",
                explanationEn: "Incorrect. This is a completely contextless literal guess; the pedestrian meaning of 'tu' has no relevance here."
            }
        ]
    },
    {
        id: 3,
        text: "故事中，农夫帮助禾苗长高的方法是？",
        py: "gù shì zhōng nóng fū bāng zhù hé miáo zhǎng gāo de fāng fǎ shì",
        en: "In the story, what method did the farmer use to help the seedlings grow?",
        options: [
            {
                text: "每天给禾苗浇大量的水和施肥",
                py: "měi tiān gěi hé miáo jiāo dà liàng de shuǐ hé shī féi",
                en: "Watering and fertilizing the seedlings heavily every day.",
                correct: false,
                explanation: "错误。文中没有提到浇水施肥，他用的是更愚蠢、粗暴的直接生拉硬拽方式。",
                explanationPy: "cuò wù wén zhāng zhōng méi yǒu tí dào jiāo shuǐ shī féi tā yòng de shì gèng yú chǔn cū bào de zhí jiē shēng lā yìng zhuài fāng shì",
                explanationEn: "Incorrect. The text contains no reference to watering or fertilizing; he adopted a much cruder shortcut approach."
            },
            {
                text: "辛勤地在田里帮禾苗除草",
                py: "xīn qín de zài tián lǐ bāng hé miáo chú cǎo",
                en: "Weeding the fields diligently for the seedlings.",
                correct: false,
                explanation: "错误。除草在文中对应的是“耘苗”，农夫因为嫌除草长得慢，所以没有选择这个正常方法。",
                explanationPy: "cuò wù chú cǎo zài wén zhōng duì yìng de shì yún miáo nóng fū yīn wèi xián chú cǎo zhǎng de màn suǒ yǐ méi yǒu xuǎn zé zhè gè zhèng cháng fāng fǎ",
                explanationEn: "Incorrect. Weeding is described as 'yun miao'. The farmer felt that standard cultivating was too slow, so he rejected it."
            },
            {
                text: "直接动手把禾苗一棵一棵往上拔高",
                py: "zhí jiē dòng shǒu bǎ hé miáo yī kē yī kē wǎng shàng bá gāo",
                en: "Directly pulling the seedlings upward one by one manually.",
                correct: true,
                explanation: "正确！文中明确写道“揠之”，也就是动手把禾苗往上拔，造成了禾苗长高的假象。",
                explanationPy: "zhèng què wén zhāng zhōng míng què xiě dào yà zhī yě jiù shì dòng shǒu bǎ hé miáo wǎng shàng bá zào chéng le hé miáo zhǎng gāo de jiǎ xiàng",
                explanationEn: "Correct! The text states 'yà zhī', meaning he physically tugged the plants upward, creating a brief optical illusion of growth."
            },
            {
                text: "搭建架子来帮禾苗遮挡太阳",
                py: "dā jiàn jià zǐ lái bāng hé miáo zhē dǎng tài yáng",
                en: "Building trellises to shade the seedlings from the sun.",
                correct: false,
                explanation: "错误。文中完全没有搭建架子或遮阳的叙事内容。",
                explanationPy: "cuò wù wén zhāng zhōng wán quán méi yǒu dā jiàn jià zǐ huò zhē yáng de xù shì nèi róng",
                explanationEn: "Incorrect. The narrative includes absolutely no mention of building supportive frameworks or providing sunshade."
            }
        ]
    }
];
