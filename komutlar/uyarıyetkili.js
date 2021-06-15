module.exports = {
name:"uyetkili",
code:`
$customEmoji[ptick] | Uyarı Yetkilisi \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı

$setServerVar[wyetkili;$mentionedRoles[1]]

$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]

$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]uyetkili @uyarı-hammer]
$onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etiketle]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
