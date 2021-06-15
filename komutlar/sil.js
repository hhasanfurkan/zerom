module.exports = {
  name:"sil",
  code:`
  $customEmoji[ptick;$getVar[emojisw1]]\`$message\` Kadar Mesaj Kyoryuu'lara Yem Oldu
  $deletecommand
  $deleteIn[4s]
  $clear[$message[1]]
  $suppressErrors[Hata !]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Mesajları Yönet\` İznin Olmalı]
  $onlyIf[$message!=;Mesaj Miktarı Girermisin !]
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Mesajları Ham Yapmam Şey Yani Silmem İçin Bir Rakam Girmelisin ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

  `
} 