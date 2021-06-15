module.exports = {
  name:"krol",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Kız Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[krol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]krol @Kızüye]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 
 $onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etikeyle]`
} 