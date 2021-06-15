module.exports = {
name:"tavsiye-log",
code:`
$setServerVar[tavsiyelog;$mentionedChannels[1]]
$customEmoji[ptick;$getVar[emojisw1]] | Tavsiye Logu <#$mentionedChannels[1]> Olarak Ayarlandı Artık Gelen Tavsiyeleri Oraya Atıcam

$onlyPerms[admin; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
$onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tavsiye-log #tavsiye-log]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Kanal Etiketle]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
}
