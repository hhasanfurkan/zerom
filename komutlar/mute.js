module.exports = {
name:"mute",
code:`
$title[Ohayoo] 
$description[Mutelenen Üye: <@$mentioned[1]> | $userTag[$mentioned[1]]

Mute Atan Yetkili: <@$authorID> | $userTag[$authorID]

Mute Sebebi: $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]]
$footer[Zero Two Mute Sistemi]
$color[FFCCFF]
$useChannel[$getServerVar[mlog]]
$channelSendMessage[$channelID;{title:Ohayoo}{description:Üye Mutelendi 
Mutelenen Üye: <@$mentioned[1]>
Mute Atan Yetkili: <@$authorID>
Mute Sebebi: $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]}{footer:Zero Two Uyarı Sistemi}{color:FFCCFF}]

$giveRoles[$mentioned[1];$getServerVar[mrol]]
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]

$setServerVar[mvrol;$joinSplitText[;];$mentioned[1]]
$textSplit[$userRoles[$mentioned[1];ids];, ]

$onlyIf[$hasRole[$authorID;$getServerVar[myrol]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`$roleName[$getServerVar[myrol]]\` Rolün Olmalı]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[pcross;$getVar[emojisw1]] | Rolünden Üstte Birini Muteleyemezsin]
$onlyIf[$mentioned[1]!=$authorID;$customEmoji[pcross;$getVar[emojisw1]] | Kendimi Mutelemek İstiyosan Daha Üst Bir Yetkiliye Söyle]
$onlyBotPerms[manageroles; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Rolleri Yönet\` İzni Açık Olmalı]
$onlyIf[$mentioned[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Kimi Mutelemeliyim Bunu Tüm Gün Düşünücem]
$onlyIf[$getServerVar[mlog]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Logu Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]mute-log\` Yazın]
$onlyIf[$getServerVar[umrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Unmute Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]unmute-rol\` Yazın]
$onlyIf[$getServerVar[myrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]myetkili\` Yazın]
$onlyIf[$getServerVar[mrol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Mute Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]mute-rol\` Yazın]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Mutelenen Üyenin Bir Yada Daha Fazla Rolünü Alamıyorum]`
}
