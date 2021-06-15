module.exports = {
name:"uyar",
aliases: ['warn'],
code:`
$channelSendMessage[$channelID; $customEmoji[ptick;$getVar[emojisw1]] | <@$mentioned[1]> Adlı Üye $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1] Sebebinden Uyarıldı]
$title[Ohayoo]
$description[**Uyarılan Üye:** <@$mentioned[1]> | $userTag[$mentioned[1]] | $mentioned[1]

**Uyaran Yetkili:**  <@$authorID> | $userTag[$authorID] | $authorID

**Uyarılma Sebebi:** $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]

**Önceki Uyarı Sayısı:** **\`$getServerVar[warnsayı;$mentioned[1]]\`**]
$footer[Zero Two Uyarı Sistemi; $authorAvatar]
$color[FFCCFF]
$useChannel[$getServerVar[warnlog]]

$setServerVar[warnsayı;$sum[$getServerVar[warnsayı;$mentioned[1]];1];$mentioned[1]]

$setServerVar[wsebep;$replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1];$mentioned[1]]

$onlyForRoles[$getServerVar[wyetkili]; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`$roleName[$getServerVar[wyetkili]]\` Rolün Olmalı]

$onlyIf[$mentioned[1]!=$authorID;$customEmoji[pcross;$getVar[emojisw1]] | Kendini Uyaramazsın]
$onlyIf[$mentioned[1]!=$ownerID;$customEmoji[pcross;$getVar[emojisw1]] | Ownerı Uyaramazsın]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];$customEmoji[pcross;$getVar[emojisw1]] | Rolünden Üstte Birini Uyaramazsın]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
$onlyIf[$getServerVar[warnlog]!=;$customEmoji[pcross;$getVar[emojisw1]] | Uyarı Log Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]uyarı-log\` Yazın]
$onlyIf[$getServerVar[wyetkili]!=;$customEmoji[pcross;$getVar[emojisw1]] | Uyarı Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]wyetkili\` Yazın]
`
}
