module.exports = {
name:"msıfırla",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | Mute Sistemi Sıfırlandı
$setServerVar[mrol;]
$setServerVar[umrol;]
$setServerVar[myrol;]
$setServerVar[mlog;]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
