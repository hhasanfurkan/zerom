module.exports = {
name:"tsıfırla",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | Tavsiye Sistemi Sıfırlandı
$setServerVar[tavsiyelog;]
$setServerVar[tavsiyekanal;]
$onlyPerms[admin; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` Yetkin Olmalı]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}