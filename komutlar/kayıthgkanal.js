module.exports = {
  name:"gkanal",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Hoşgeldin Kanalı \`$channelName[$mentionedChannels[1]]\` Olarak Ayarlandı
 $setServerVar[gkanal;$mentionedChannels[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunu İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | *Kullanım:** $getServerVar[Prefix]gkanal #kayıt]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
}