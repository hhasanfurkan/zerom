module.exports = ({
    name:"tagrol",
    code:`$customEmoji[ptick;$getVar[emojisw1]] | Tag Alındığında Verilicek Rol Başarıyla \`$roleName[$mentionedRoles[1]]\`
$setServerVar[tagrol;$mentionedRoles[1]]
$argsCheck[>1;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tagrol @family]
$onlyIf[$getServerVar[tag]!=;$customEmoji[pcross;$getVar[emojisw1]] | İlk Önce Tag Ayarlamalısınız Tag Ayarlamak İçin \`$getServerVar[Prefix]tayarla\` Yazın]
$onlyIf[$mentionedRoles[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]tagrol @family]
$onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyBotPerms[manageroles;Bunun İçin Rolümün \`Rolleri Yönet\` İzni Açık Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bunun İçin Premium Üye Olmalısınız**]
`
})
