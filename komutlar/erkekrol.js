module.exports = {
  name:"erol",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Erkek Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[erol;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin\`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]erol @Erkeküye]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
 
 $onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etiketle]
 `
} 