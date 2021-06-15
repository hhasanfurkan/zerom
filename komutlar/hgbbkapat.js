module.exports = {
  name:"hgbb-kapat",
  code:`
   $customEmoji[ptick;$getVar[emojisw1]] | Hoşgeldin Baybay Kapatıldı
   $onlyPerms[admin; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
   $setServerVar[hgbb;]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
  }