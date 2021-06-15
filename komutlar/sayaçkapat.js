module.exports = {
  name:"sayaç-kapat",
  code:`
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $setServerVar[sayac;]
  $setServerVar[sayaclog;]
  $onlyIf[$getServerVar[sayaclog]!=;$customEmoji[pcross;$getVar[emojisw1]] | Bu Zaten Kapalı]
  $customEmoji[ptick;$getVar[emojisw1]] | Sayaç Kapatıldı Tekrardan Açmak İçin \`$getServerVar[Prefix]sayaç\` Yazın
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
  } 
 