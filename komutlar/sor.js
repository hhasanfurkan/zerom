module.exports = {
name:"sor",
code:`
$argsCheck[>1;Bir Soru Sor]
$reply[$messageID;$randomText[Kim Bilir?;Bilmiyorum;Evet;Hayır;Neden olmasın?;Kısmen;Kesinlikle;Kesinlikle hayır;Anana sor;Sanırım;Bunu bilemem;Evet gibi;Hayır gibi;Emin değilim;Emin olamıyorum;Dostum cevabı olmayan bir soru sordun];yes]
$onlyIf[$message!=;Bir Soru Sor]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}

