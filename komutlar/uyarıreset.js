module.exports = {
  name:"usıfırla",
  code:`
  $customEmoji[ptick;$getVar[emojisw1]] | Uyarı Sistemi Resetlendi
  
  $setServerVar[warnlog;]
  $setServerVar[wyetkili;]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\| İznin Olmalı]
  
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
}