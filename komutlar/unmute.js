module.exports = {
name:"unmute",
code:`
$title[Ohayoo] 
$description[Unmutelenen Üye: <@$mentioned[1]> | $userTag[$mentioned[1]]
Unmute Atan Yetkili: <@$authorID> | $userTag[$authorID]]
$footer[Zero Two Mute Sistemi]
$color[FFCCFF]
$useChannel[$getServerVar[mlog]]

$channelSendMessage[$channelID;{title:Ohayoo}{description:Üye Unmutelendi 
Unmutelenen Üye: <@$mentioned[1]>
Unmute Atan Yetkili: <@$authorID>}{footer:Zero Two Uyarı Sistemi}{color:FFCCFF}]

$giveRoles[$mentioned[1];$getServerVar[umrol]]
$takeRoles[$mentioned[1];$getServerVar[mrol]]

$onlyIf[$hasrole[$authorID;$getServerVar[myrol]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`$roleName[$getServerVar[myrol]]\` Rolün Olmalı]

$onlyBotPerms[manageroles; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Rolleri Yönet\` İzni Açık Olmalı]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bu Üye Zaten Mutelenmemiş]
$onlyIf[$mentioned[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
$onlyIf[$getServerVar[mlog]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Logu Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]mute-log\` Yazın]
$onlyIf[$getServerVar[umrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Unmute Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]unmute-rol\` Yazın]
$onlyIf[$getServerVar[myrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]myetkili\` Yazın]
$onlyIf[$getServerVar[mrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]mute-rol\` Yazın]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Unmutelen Üyeye Rolünü Veremiyorum]
`
}
