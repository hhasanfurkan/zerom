module.exports = {
name:"kayıt-bilgi",
code:`
$title[Ohayoo]
$description[**
__Kayıt Bilgileri__
$customEmoji[ztcrown_green;$getVar[emojisw2]]Kız Üye Rolü : <@&$getServerVar[krol]>

$customEmoji[ztcrown_white;$getVar[emojisw2]]Erkek Üye Rolü : <@&$getServerVar[erol]>

$customEmoji[zttakla;$getVar[emojisw2]]Kayıtsız Üye Rolü : <@&$getServerVar[kayıtsız]>

$customEmoji[ztdans7;$getVar[emojisw2]]Kayıt Yetkilisi : <@&$getServerVar[kyetkili]>

$customEmoji[zttick_red;$getVar[emojisw2]]Hoşgeldin Kanalı : <#$getServerVar[gkanal]>

$customEmoji[zttick_green;$getVar[emojisw2]]Kayıt Log Kanalı : <#$getServerVar[ckanal]>

—————————————————————

__Kayıt Değerleri__
$customEmoji[azerotwo;$getVar[emojisw2]]Toplam Üye Sayısı : \`$membersCount\`

$customEmoji[ztcrown_green;$getVar[emojisw2]]Toplam Kız Üye Sayısı : \`$roleMembersCount[$getServerVar[krol]]\`

 $customEmoji[ztcrown_white;$getVar[emojisw2]]Toplam Erkek Üye Sayısı : \`$roleMembersCount[$getServerVar[erol]]\`

$customEmoji[zttakla;$getVar[emojisw2]]Toplam Kayıtsız Üye Sayısı : \`$roleMembersCount[$getServerVar[kayıtsız]]\`

 $customEmoji[zthawlipika;$getVar[emojisw2]]Zero Two İle Kayıt Olan Üye Sayısı : \`$getServerVar[ksayı]\`

$customEmoji[zttick_red;$getVar[emojisw2]]Zero Two İle Kayıt Olan Kız Üye Sayısı : \`$getServerVar[kksayı]\`

 $customEmoji[zttick_green;$getVar[emojisw2]]Zero Two İle Kayıt Olan Erkek Üye Sayısı : \`$getServerVar[kesayı]\`**]
$color[FFCCFF]
$footer[Zero Two Kayıt Sistemi; $authorAvatar]
$onlyIf[$getServerVar[kayıtsız]!=; $customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Kayıt Sistemini Kurmalısınız Kurmak İçin \`$getServerVar[Prefix]kayıt-sistemi\` Yazın]

`
}
