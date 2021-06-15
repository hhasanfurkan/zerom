module.exports = {
name:"afk",
code:`$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$title[Başarılı;]
$description[$customEmoji[ptick;$getVar[emojisw1]] | Artık AFK'sın. İnsanlar Seni Etiketlediğinde \`$message\` Sebebinden AFK Diyeceğim Arkan Sağlam Yani ;)]
$thumbnail[$authorAvatar]
$color[FFCCFF]
$deleteIn[5s]
$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | Lütfen bir afk sebebi belirleyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]


`}