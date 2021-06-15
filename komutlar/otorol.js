module.exports = {
  name: "otorol",
  code: `
$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
 $customEmoji[ptick;$getVar[emojisw1]] | Otorol Kanalı \`$channelName[$mentionedChannels[1]]\` Olarak Otorol Rolü İse \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır Kapatmak Için \`$getServerVar[Prefix]otorolkapat\` Yazın
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$message[2]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]otorol @rol #log]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

   `
}