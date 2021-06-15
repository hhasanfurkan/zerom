module.exports = {
    name:"herkesten-rol-al",
    code:`
    $forEachMember[rolal]
  $customEmoji[ptick;$getVar[emojisw1]] | Herkesten Alınan Rol: $roleName[$mentionedRoles[1]] **⚠️\`Uyarı: Sunucudaki Kişi Sayısına Göre Herkesten Rol Alma Süresi Uzayabilir\`**
  
  $onlyIf[$mentionedRoles[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]herkesten-rol-al @üye]
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $onlyBotPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Yönetici\` İzni Açık Olmalı]
$onlyIf[$rolePosition[$mentionedRoles[1]]>=$rolePosition[$highestRole[$clientID]];$customEmoji[pcross;$getVar[emojisw1]] | Rolümden Üstte Bir Rolü Herkesten Alamam]

$onlyIf[$mentionedRoles[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]herkesten-rol-al @üye]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bunun İçin Premium Üye Olmalısınız**]
$onlyIf[$mentionedRoles[1]!=@everyone;$customEmoji[pcross;$getVar[emojisw1]] | Geçerli Bir Rol Etiketle]

$onlyIf[$mentionedRoles[1]!=@here;$customEmoji[pcross;$getVar[emojisw1]] | Geçerli Bir Rol Etiketle]
  $globalCooldown[5m;$customEmoji[pcross;$getVar[emojisw1]] | Bu Komutu 5 Dakikada Bir Kullanabilirsiniz]`
}
