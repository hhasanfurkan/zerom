module.exports = {
name:"tavsiye-kanal",
code:`
$setServerVar[tavsiyekanal;$mentionedChannels[1]]
$customEmoji[ptick;$getVar[emojisw1]] | Tavsiye Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı Artık Sadece O Kanalda Tavsiye Verilebilecek

$onlyPerms[admin; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tavsiye-kanal #bot-komut]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Kanal Etiketle]


$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
}
