module.exports = {
name:"kaçcm",
code:`
$editIn[5s;{author:$userTag:$authorAvatar}{description:$userTag Adlı Kullanıcının Aleti $random[1;50] Cm  $customEmoji[ztbuyucu;$getVar[emojisw2]]}{color:ffccff}{thumbnail:$authorAvatar}]
$author[$userTag;$authorAvatar]
$description[$userTag Adlı Kullanıcının Malafatı Ölçülüyor $customEmoji[ztyukleniyor3;$getVar[emojisw2]]]
$color[ffccff]
$thumbnail[$authorAvatar]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]   
`
} 
