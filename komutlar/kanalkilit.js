module.exports = {
  name:"kanal",
  code:`
  $customEmoji[ptick;$getVar[emojisw1]] | <#$channelID> Adlı Kanal $replaceText[$replaceText[$message;kilit;Başarıyla Kilitlenmiştir;-1];aç;Kilidi Açılmıştır;-1]
     
  $modifyChannelPerms[$channelID;$replaceText[$replaceText[$message;kilit;-;-1];aç;+;-1]sendmessages;$roleID[@everyone]]
  $onlyIf[$hasPerms[$authorID;managechannels]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Kanalları Yönet\` İznin Olmalı!]
  $onlyIf[$checkContains[$message[1];kilit;aç]!=false;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kanal kilit/aç]
  $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kanal kilit/aç]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
}