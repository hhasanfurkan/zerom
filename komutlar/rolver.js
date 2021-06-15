module.exports = {
  name:"rolver",
  code:`
  $description[$customEmoji[ptick;$getVar[emojisw1]] | <@$mentioned[1]> Adlı Üyeye <@&$mentionedRoles[1]> Adlı Rol Verilmiştir.]
  $giveRoles[$mentioned[1];$mentionedRoles[1]]
  
  $onlyIf[$rolePosition[$mentionedRoles[1]]>$rolePosition[$highestRole[$authorID]];$customEmoji[pcross;$getVar[emojisw1]] | Kendinden Üstte Bir Rolü Veremezsin]
  $onlyIf[$hasPerms[$authorID;manageroles]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolleri Yönet Yetkin Olmalıdır !]
  $onlyIf[$message[2]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]rolver @zerotwo @owner ]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
}
