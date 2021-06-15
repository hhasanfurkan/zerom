module.exports = {
  name:"erkek",
  aliases: ['e'],
  code:`
  $useChannel[$getServerVar[ckanal]]
  $color[$getRoleColor[$highestRole[$mentioned[1]]]]
  <@$mentioned[1]>
  $title[Ohayoo]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
**$customEmoji[azerotwo;$getVar[emojisw2]]Hoşgeldin \`$userTag[$mentioned[1]]\` Yetkililer Seni Erkek Olarak Kayıt Etti

$customEmoji[zttick_green;$getVar[emojisw2]]Toplam Erkek Üye Sayısı: $roleMembersCount[$getServerVar[erol]]

$customEmoji[ztdans7;$getVar[emojisw2]]Kayıt Eden Yetkili: <@$authorID>
  
$customEmoji[zttakla;$getVar[emojisw2]]Kuralları Okumayı Unutma**]


  $channelSendMessage[$channelID;{title:Başarılı}{description:**$customEmoji[zttakla;$getVar[emojisw2]]\`$userTag[$mentioned[1]]\` Adlı Üyeyi Kayıt Ettim
   
 $customEmoji[ztdans7;$getVar[emojisw2]]Kayıt Eden Yetkili: <@$authorID>
   
 $customEmoji[ztsure;$getVar[emojisw2]]Toplam Erkek Kayıt Sayısı: \`$getServerVar[kesayı]\`**}{footer:Erkek Üye Rolü Verildi}{color:FFFFF}]
   
   
  $takeRoles[$mentioned[1];$getServerVar[kayıtsız]]
  $changeNickname[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] | $noMentionMessage[2]]
  $giveRoles[$mentioned[1];$getServerVar[erol]]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kyetkili]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`$roleName[$getServerVar[kyetkili]]\` Rolün Olmalı]
  $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]erkek @ParzivaL Parzi | 16]
  
  $setServerVar[ksayı; $sum[$getServerVar[ksayı];1]]
  $setServerVar[kesayı;$sum[$getServerVar[kesayı];1]]
  $setUserVar[kulsayı;$sum[$getUserVar[kulsayı;$authorID];1];$authorID]

  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross;$getVar[emojisw1]] | Kendini Kayıt Edemezsin ]
 $onlyIf[$getServerVar[kayıtsız]!=;$customEmoji[pcross;$getVar[emojisw1]] | Kayıtsız Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kayıtsız\` Yazın]
  $onlyIf[$getServerVar[erol]!=; $customEmoji[pcross;$getVar[emojisw1]] | Erkek Üye Rolü Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]erol\` Yazın]
  $onlyIf[$getServerVar[kyetkili]!=; $customEmoji[pcross;$getVar[emojisw1]] | Kayıt Yetkilisi Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]kyetkili\` Yazın]
  $onlyIf[$getServerVar[ckanal]!=; $customEmoji[pcross;$getVar[emojisw1]] | Chat Kanalı Ayarlanmamış Ayarlamak İçin \`$getServerVar[Prefix]çkanal\` Yazın]
  $suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Bir Hatayla Karşılaştım Kayıt Sistemini Tamamen Ayarlayıp Birdaha Deneyin]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
} 