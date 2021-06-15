module.exports = {
  name: "otorolkapat",
  code: `
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $setServerVar[otorol;]
  $setServerVar[otorollog;]
 $customEmoji[ptick;$getVar[emojisw1]] | Otorol Resetlenmiştir Tekrar Ayarlamak İçin \`$getServerVar[Prefix]otorol\` Yazın
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
   `
}