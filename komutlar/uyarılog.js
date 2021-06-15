module.exports = {
name:"uyarı-log",
code:`
$customEmoji[ptick] | Uyarı Logu <#$mentionedChannels[1]> Olarak Ayarlandı

$setServerVar[warnlog;$mentionedChannels[1]]

$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]

$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]uyarı-log #uyarı-log ]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Kanal Etiketle]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
