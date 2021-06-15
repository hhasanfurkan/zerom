module.exports = {
  name:"slowmode",
  code:`
  $customEmoji[ptick;$getVar[emojisw1]] | <#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı
  $slowmode[$channelID;$message[1]s]
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bir Saniye Yazın]
  $onlyIf[$message[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]slowmode 5,3,0,...]
  $onlyPerms[managechannels;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Kanalları Yönet\` İznin Olmalı]
  $onlyBotPerms[managechannels;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Kanalları Yönet\` İzni Açık Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
  }