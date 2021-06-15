module.exports = {
name:"tavsiye",
code:`
$channelSendMessage[$channelID;$customEmoji[ptick;$getVar[emojisw1]] | Tavsiyeniz Başarıyla <#$getServerVar[tavsiyelog]> Kanalına İletildi]

$useChannel[$getServerVar[tavsiyelog]]
$title[Ohayoo]
$description[**
$customEmoji[ztdans7;$getVar[emojisw2]]Tavsiyeyi Veren: \`$userTag[$authorID]\` | <@$authorID> | \`$authorID\`

$customEmoji[ztyukleniyor;$getVar[emojisw2]]Tavsiye Tarihi: \`$day/$month/$year\`

$customEmoji[zttakla;$getVar[emojisw2]]Tavsiye: \`$message\`**]
$footer[Zero Two Tavsiye Sistemi;$authorAvatar]
$thumbnail[$serverIcon]
$color[303136]
$deletecommand

$onlyForChannels[$getServerVar[tavsiyekanal];$customEmoji[pcross;$getVar[emojisw1]] | Bunu Sadece <#$getServerVar[tavsiyekanal]> Kanalında Kullanabilirsin]

$onlyIf[$getServerVar[tavsiyelog]!=;$customEmoji[pcross;$getVar[emojisw1]] | Tavsiye Logu Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]tavsiye-log\` Yazın]

$onlyIf[$getServerVar[tavsiyekanal]!=; $customEmoji[pcross;$getVar[emojisw1]] | Tavsiye Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]tavsiye-kanal\` Yazın]

$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tavsiye Zero Two'yu Sunucuna Ekle]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
}
