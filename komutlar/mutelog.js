module.exports = {
name:"mute-log",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | Mute Logu <#$mentionedChannels[1]> Olarak Ayarlandı
$setServerVar[mlog;$mentionedChannels[1]]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
$onlyIf[$message!=; $customEmoji[pcross] | **Kullanım:** $getServerVar[Prefix]mute-log #mute-log]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
