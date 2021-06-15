module.exports = {
  name:"kayıtsız",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] | Kayıtsız Rolü \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlandı
 $setServerVar[kayıtsız;$mentionedRoles[1]]
 $onlyIf[$hasPerms[$authorID;admin]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
 $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kayıtsız @kayıtsız]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

$onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bir Rol Etiketle]
 `
} 