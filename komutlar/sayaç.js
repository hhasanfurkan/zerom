module.exports = {
  name:"sayaç",
  code:`
  $customEmoji[ptick;$getVar[emojisw1]] | Sayaç Kanalı <#$mentionedChannels[1]> Olarak Hedef İse \`$message[2]\` Olarak Ayarlandı
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$isNumber[$message[2]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bir Hedef Belirleyin]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | Sayaç Olarak Seçiceğiniz Kanalı Ayarlayın]
  $onlyIf[$message[2]!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir Hedef Belirleyin]
  $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]sayaç #sayaç 100]
  $setServerVar[sayaclog;$mentionedChannels[1]]
  $setServerVar[sayac;$message[2]]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

  `
  }