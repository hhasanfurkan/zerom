module.exports = {
  name:"kyetkili",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Kayıt Yetkilisi \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[kyetkili;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kyetkili @kayıtyetkilisi]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 `
} 