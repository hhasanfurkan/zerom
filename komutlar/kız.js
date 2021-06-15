module.exports = {
  name:"kız",
  aliases: ['k'],
  code:`
    $useChannel[$getServerVar[ckanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  <@$mentioned[1]>
  $title[Kayıt Başarılı ]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
**$customEmoji[azerotwo;$getVar[emojisw2]]Hoşgeldin \`$userTag[$mentioned[1]]\` Yetkililer Seni Kız Olarak Kayıt Etti

$customEmoji[zttick_red;$getVar[emojisw2]]Toplam Kız Üye Sayısı: $roleMembersCount[$getServerVar[krol]]

$customEmoji[ztdans7;$getVar[emojisw2]]Kayıt Eden Yetkili: <@$authorID>

$customEmoji[zttakla;$getVar[emojisw2]]Kuralları Okumayı Unutma**]

$channelSendMessage[$channelID;{title:Başarılı}{description:**$customEmoji[zttakla;$getVar[emojisw2]]\`$userTag[$mentioned[1]]\` Adlı Üyeyi Kayıt Ettim

$customEmoji[ztdans7;$getVar[emojisw2]]Kayıt Eden Yetkili: <@$authorID>

$customEmoji[ztsure;$getVar[emojisw2]]Toplam Kız Kayıt Sayısı: \`$getServerVar[kksayı]\`**}{footer:Kız Üye Rolü Verildi}{color:FFCCFF}]

  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $giveRoles[$mentioned[1];$getServerVar[krol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Üzgünüm Bunun İçin \`$roleName[$getServerVar[kyetkili]]\` Rolün Olmalı Veya Kayıt Yetkilisi Ayarlanmamış]
  $changeNickname[$mentioned[1]; $getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kız @zerotwo Zerotwo | 16]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross;$getVar[emojisw1]] | Kendini Kayıt Edemezsin]
  
$setServerVar[ksayı;$sum[$getServerVar[ksayı];1]]
$setServerVar[kksayı;$sum[$getServerVar[kksayı];1]]
$setUserVar[kulsayı;$sum[$getUserVar[kulsayı;$authorID];1];$authorID]

$onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross;$getVar[emojisw1]] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[krol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Kız Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]krol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross;$getVar[emojisw1]] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[ckanal]!=; $customEmoji[pcross;$getVar[emojisw1]] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Bir Daha Deneyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}