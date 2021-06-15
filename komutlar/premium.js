module.exports = {
name:"premium",
code:`$setGlobalUserVar[premium;yes;$mentioned[1]]
$setVar[presayı;$sum[$getVar[presayı];1]]
$useChannel[830439675025948723]
<@$mentioned[1]>
$title[Başarılı]
$description[**__Premium Alan Üye__:\`$username[$mentioned[1]]\`

__Premium Aldığı Sunucu__: [$serverName[$guildID]]($getServerInvite)
 
__Hesap Detayları__:
\`Kurulum Tarihi\`:$creationDate[$mentioned[1]]
\`Hesap ID si\` $mentioned[1]**]

$channelSendMessage[$channelID;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üyeye Premium Verildi Hayırlı Olsun <@$mentioned[1]>**]

$onlyForIDs[677468381485596702;$customEmoji[pcross;$getVar[emojisw1]] | Sadece $userTag[$botOwnerID] Premium Verebilir**]

$onlyIf[$mentioned[1]!=;**$customEmoji[azerotwo;$getVar[emojisw2]] | Bakaaa Birini Etiketle**]

`
}
