module.exports = {
name:"unmute-rol",
code:`
$customEmoji[ptick;$getVar[emojisw1]] | Unmute Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
$setServerVar[umrol;$mentionedRoles[1]]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etiketle]
$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]unmute-rol @üye ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
