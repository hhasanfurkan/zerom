module.exports = {
  name:"çkanal",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Kayıt Log Kanalı \`$channelName[$mentionedChannels[1]]\`Olarak Ayarlandı
 $setServerVar[ckanal;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross;$getVar[emojisw1]] Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]çkanal #chat ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
} 