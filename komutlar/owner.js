module.exports = ({
name:"owner",
code:`
$title[Ownerı Buldum]
$description[**\`$serverName[$guildID]\`** Adlı Sunucunun Sahibi **\`$userTag[$ownerID]\`**]
$footer[Zero Two;$serverIcon[$guildID]]
$color[303136]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
})
